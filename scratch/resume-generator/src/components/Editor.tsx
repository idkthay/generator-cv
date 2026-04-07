import type { ResumeData, Experience, Education } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function Editor({ resumeData, setResumeData }: Props) {
  // Pessoais
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value }
    }));
  };

  // Experiência
  const updateExp = (index: number, field: keyof Experience, value: string) => {
    const newExp = [...resumeData.experience];
    newExp[index] = { ...newExp[index], [field]: value };
    setResumeData(prev => ({ ...prev, experience: newExp }));
  };

  const addExp = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: crypto.randomUUID(), company: '', position: '', startDate: '', endDate: '', description: '' }]
    }));
  };

  const removeExp = (index: number) => {
    const newExp = [...resumeData.experience];
    newExp.splice(index, 1);
    setResumeData(prev => ({ ...prev, experience: newExp }));
  };

  // Educação
  const updateEdu = (index: number, field: keyof Education, value: string) => {
    const newEdu = [...resumeData.education];
    newEdu[index] = { ...newEdu[index], [field]: value };
    setResumeData(prev => ({ ...prev, education: newEdu }));
  };

  const addEdu = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { id: crypto.randomUUID(), school: '', degree: '', startDate: '', endDate: '' }]
    }));
  };

  const removeEdu = (index: number) => {
    const newEdu = [...resumeData.education];
    newEdu.splice(index, 1);
    setResumeData(prev => ({ ...prev, education: newEdu }));
  };

  // Skills
  const updateSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setResumeData(prev => ({ ...prev, skills: value.split(',').map(s => s.trim()) }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* Seção Pessoal */}
      <section>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Dados Pessoais</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Nome Completo</label>
            <input type="text" name="fullName" className="form-input" value={resumeData.personalInfo.fullName} onChange={handlePersonalChange} placeholder="Ex: João da Silva"/>
          </div>
          <div className="form-group">
            <label className="form-label">Cargo / Título</label>
            <input type="text" name="jobTitle" className="form-input" value={resumeData.personalInfo.jobTitle} onChange={handlePersonalChange} placeholder="Ex: Desenvolvedor Senior"/>
          </div>
          <div className="form-group">
            <label className="form-label">E-mail</label>
            <input type="email" name="email" className="form-input" value={resumeData.personalInfo.email} onChange={handlePersonalChange} placeholder="Ex: joao@email.com"/>
          </div>
          <div className="form-group">
            <label className="form-label">Telefone</label>
            <input type="text" name="phone" className="form-input" value={resumeData.personalInfo.phone} onChange={handlePersonalChange} placeholder="(00) 00000-0000"/>
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Localização</label>
            <input type="text" name="location" className="form-input" value={resumeData.personalInfo.location} onChange={handlePersonalChange} placeholder="Cidade, Estado"/>
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Resumo Profissional</label>
            <textarea name="summary" className="form-textarea" value={resumeData.personalInfo.summary} onChange={handlePersonalChange} placeholder="Descreva brevemente suas qualificações..."/>
          </div>
        </div>
      </section>

      {/* Seção Experiência */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Experiência Profissional</h2>
          <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }} onClick={addExp}>
            <Plus size={14}/> Adicionar
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {resumeData.experience.map((exp, index) => (
            <div key={exp.id} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1rem', margin: 0 }}>Experiência {index + 1}</h3>
                <button className="btn btn-danger" style={{ padding: '0.25rem 0.5rem' }} onClick={() => removeExp(index)}>
                  <Trash2 size={14}/>
                </button>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Empresa</label>
                  <input type="text" className="form-input" value={exp.company} onChange={e => updateExp(index, 'company', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Cargo</label>
                  <input type="text" className="form-input" value={exp.position} onChange={e => updateExp(index, 'position', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Data Início</label>
                  <input type="text" className="form-input" value={exp.startDate} onChange={e => updateExp(index, 'startDate', e.target.value)} placeholder="Ex: Jan 2020"/>
                </div>
                <div className="form-group">
                  <label className="form-label">Data Fim</label>
                  <input type="text" className="form-input" value={exp.endDate} onChange={e => updateExp(index, 'endDate', e.target.value)} placeholder="Ex: Presente"/>
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Descrição</label>
                  <textarea className="form-textarea" value={exp.description} onChange={e => updateExp(index, 'description', e.target.value)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Educação */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Formação Acadêmica</h2>
          <button className="btn btn-outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }} onClick={addEdu}>
            <Plus size={14}/> Adicionar
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {resumeData.education.map((edu, index) => (
            <div key={edu.id} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1rem', margin: 0 }}>Formação {index + 1}</h3>
                <button className="btn btn-danger" style={{ padding: '0.25rem 0.5rem' }} onClick={() => removeEdu(index)}>
                  <Trash2 size={14}/>
                </button>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Instituição</label>
                  <input type="text" className="form-input" value={edu.school} onChange={e => updateEdu(index, 'school', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Curso / Grau</label>
                  <input type="text" className="form-input" value={edu.degree} onChange={e => updateEdu(index, 'degree', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Ano Início</label>
                  <input type="text" className="form-input" value={edu.startDate} onChange={e => updateEdu(index, 'startDate', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Ano Fim</label>
                  <input type="text" className="form-input" value={edu.endDate} onChange={e => updateEdu(index, 'endDate', e.target.value)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Skills */}
      <section>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Habilidades</h2>
        <div className="form-group">
          <label className="form-label">Habilidades (separadas por vírgula)</label>
          <input type="text" className="form-input" value={resumeData.skills.join(', ')} onChange={updateSkills} placeholder="Ex: React, TypeScript, Node.js..." />
        </div>
      </section>

    </div>
  );
}
