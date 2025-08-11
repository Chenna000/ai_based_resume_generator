package com.resume.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.resume.backend.config.OpenRouterConfig;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import okhttp3.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;

@Service
public class ResumeServiceImpl implements ResumeService {

    private final String openRouterApiKey;

    public ResumeServiceImpl(OpenRouterConfig config) {
        this.openRouterApiKey = config.getKey();

        if (this.openRouterApiKey == null || this.openRouterApiKey.isBlank()) {
            throw new IllegalStateException("OpenRouter API key is missing.");
        }
    }

    @Override
    public Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException {
        String promptString = loadPromptFromFile("resume_prompt.txt");
        String promptContent = putValuesToTemplate(promptString, Map.of("userDescription", userResumeDescription));
        String response = callOpenRouter(promptContent);
        return parseMultipleResponses(response);
    }

    private String callOpenRouter(String prompt) throws IOException {
        String endpoint = "https://openrouter.ai/api/v1/chat/completions";

        OkHttpClient client = new OkHttpClient();
        ObjectMapper mapper = new ObjectMapper();

        String payload = mapper.writeValueAsString(Map.of(
                "model", "mistralai/mistral-7b-instruct",  // ✅ Free and available
                "messages", List.of(Map.of("role", "user", "content", prompt))
        ));

        Request request = new Request.Builder()
                .url(endpoint)
                .addHeader("Authorization", "Bearer " + openRouterApiKey)
                .addHeader("HTTP-Referer", "http://localhost:3000") // You can also use your deployed frontend URL
                .addHeader("X-Title", "Resume AI Builder")
                .addHeader("Content-Type", "application/json")
                .post(RequestBody.create(payload, MediaType.parse("application/json")))
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("OpenRouter API error: " + response.code() + " - " + response.body().string());
            }

            String body = Objects.requireNonNull(response.body()).string();
            JsonNode root = mapper.readTree(body);
            return root.get("choices").get(0).get("message").get("content").asText();
        }
    }


    private String loadPromptFromFile(String filename) throws IOException {
        Path path = new ClassPathResource(filename).getFile().toPath();
        return Files.readString(path);
    }

    private String putValuesToTemplate(String template, Map<String, String> values) {
        for (Map.Entry<String, String> entry : values.entrySet()) {
            template = template.replace("{{" + entry.getKey() + "}}", entry.getValue());
        }
        return template;
    }

    public static Map<String, Object> parseMultipleResponses(String response) {
        Map<String, Object> jsonResponse = new HashMap<>();

        int thinkStart = response.indexOf("<think>") + 7;
        int thinkEnd = response.indexOf("</think>");
        jsonResponse.put("think", (thinkStart < thinkEnd) ? response.substring(thinkStart, thinkEnd).trim() : null);

        int jsonStart = response.indexOf("```json") + 7;
        int jsonEnd = response.lastIndexOf("```");
        if (jsonStart < jsonEnd) {
            String jsonContent = response.substring(jsonStart, jsonEnd).trim();
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> dataContent = objectMapper.readValue(jsonContent, Map.class);
                jsonResponse.put("data", dataContent);
            } catch (Exception e) {
                jsonResponse.put("data", null);
            }
        } else {
            jsonResponse.put("data", null);
        }

        return jsonResponse;
    }
}
