import type { ResumeData } from '../types';
import { Mail, Phone, MapPin } from 'lucide-react';

interface Props {
  data: ResumeData;
}

export default function ResumePreview({ data }: Props) {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="resume-document">
      {/* Header */}
      <header style={{ borderBottom: '2px solid var(--text-dark)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0', color: 'var(--text-dark)', letterSpacing: '-0.025em' }}>
          {personalInfo.fullName || 'Seu Nome'}
        </h1>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', margin: '0 0 1rem 0', fontWeight: 500 }}>
          {personalInfo.jobTitle || 'Seu Cargo'}
        </h2>
        
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.875rem', color: 'var(--text-light)' }}>
          {personalInfo.email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={14} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={14} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-dark)' }}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Experiência Profissional
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experience.map(exp => (
              <div key={exp.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-dark)' }}>{exp.position}</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-light)', fontWeight: 500 }}>
                    {exp.startDate} {exp.endDate && `- ${exp.endDate}`}
                  </span>
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--primary-color)', fontWeight: 500, marginBottom: '0.5rem' }}>
                  {exp.company}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.6, margin: 0 }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Formação Acadêmica
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map(edu => (
              <div key={edu.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-dark)' }}>{edu.degree}</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-light)', fontWeight: 500 }}>
                    {edu.startDate} {edu.endDate && `- ${edu.endDate}`}
                  </span>
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                  {edu.school}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-dark)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Habilidades
          </h3>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map((skill, index) => skill && (
              <span key={index} style={{ background: 'var(--bg-color)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.875rem', color: 'var(--text-dark)', border: '1px solid var(--border-color)' }}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
