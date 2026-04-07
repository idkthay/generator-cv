import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../components/Editor';
import ResumePreview from '../components/ResumePreview';
import type { ResumeData } from '../types';
import { Printer, LogOut } from 'lucide-react';
import { getResumeData, saveResumeData, getCurrentUser, logoutUser } from '../services/db';

export default function Dashboard() {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      navigate('/');
      return;
    }
    // Carrega dados da conta deste usuário
    setResumeData(getResumeData());
  }, [navigate]);

  useEffect(() => {
    // Toda vez que resumeData mudar, salva automaticamente no LocalStorage
    if (resumeData) {
      saveResumeData(resumeData);
    }
  }, [resumeData]);

  const handlePrint = () => {
    window.print();
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  if (!resumeData) return null; // loading auth

  return (
    <div className="app-container">
      <div className="editor-section glass-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '1.5rem', background: 'linear-gradient(to right, var(--primary-color), #ec4899)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Gerador de Currículos
          </h1>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-primary" onClick={handlePrint}>
              <Printer size={18} />
              Imprimir / PDF
            </button>
            <button className="btn btn-outline" onClick={handleLogout} title="Sair">
              <LogOut size={18} />
            </button>
          </div>
        </div>
        
        <Editor resumeData={resumeData} setResumeData={setResumeData as React.Dispatch<React.SetStateAction<ResumeData>>} />
      </div>

      <div className="preview-section">
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
}
