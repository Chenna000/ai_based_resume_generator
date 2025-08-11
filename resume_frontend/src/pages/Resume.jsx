import React from "react";

const Resume = ({ data }) => {
  const {
    personalInformation,
    summary,
    skills,
    experience,
    education,
    certifications,
    projects,
    achievements,
    languages,
    interests,
  } = data;

  return (
    <div className="bg-white text-black px-10 py-12 max-w-4xl mx-auto font-sans leading-relaxed">
      {/* Personal Info */}
      <div className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold">{personalInformation?.fullName}</h1>
        <p className="text-sm mt-1">
          {personalInformation?.email} | {personalInformation?.phoneNumber} |{" "}
          {personalInformation?.location}
        </p>
        <p className="text-sm">
          {personalInformation?.linkedIn && (
            <>
              <a href={personalInformation?.linkedIn}>LinkedIn</a>{" "}
              {personalInformation?.gitHub && <>| </>}
            </>
          )}
          {personalInformation?.gitHub && (
            <a href={personalInformation?.gitHub}>GitHub</a>
          )}
          {personalInformation?.portfolio && (
            <> | <a href={personalInformation?.portfolio}>Portfolio</a></>
          )}
        </p>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Summary</h2>
          <p>{summary}</p>
        </div>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Skills</h2>
          <ul className="flex flex-wrap gap-4 text-sm">
            {skills.map((skill, index) => (
              <li key={index}>
                {skill.title} <span className="font-semibold">– {skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{job.jobTitle} – {job.company}</p>
              <p className="text-sm text-gray-600">
                {job.location} | {job.duration}
              </p>
              <p>{job.responsibility}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-sm text-gray-600">
                {edu.university}, {edu.location} – {edu.graduationYear}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Certifications</h2>
          <ul className="list-disc ml-5">
            {certifications.map((cert, index) => (
              <li key={index}>
                {cert.title} – {cert.issuingOrganization}, {cert.year}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-3">
              <p className="font-semibold">{project.title}</p>
              <p>{project.description}</p>
              {project.technologiesUsed?.length > 0 && (
                <p className="text-sm text-gray-600">
                  Tech: {project.technologiesUsed.join(", ")}
                </p>
              )}
              {project.githubLink && (
                <p className="text-sm">
                  <a href={project.githubLink} className="text-blue-600 underline">
                    GitHub Link
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Achievements */}
      {achievements?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Achievements</h2>
          <ul className="list-disc ml-5">
            {achievements.map((ach, index) => (
              <li key={index}>
                {ach.title} ({ach.year}) – {ach.extraInformation}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Languages */}
      {languages?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Languages</h2>
          <ul className="flex flex-wrap gap-3 text-sm">
            {languages.map((lang) => (
              <li key={lang.id}>{lang.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Interests */}
      {interests?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Interests</h2>
          <ul className="flex flex-wrap gap-3 text-sm">
            {interests.map((interest) => (
              <li key={interest.id}>{interest.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Resume;
