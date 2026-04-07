import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/db';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }
    
    if (registerUser(email, password)) {
      navigate('/'); // Vai pro login
    } else {
      setError('E-mail já está em uso!');
    }
  };

  return (
    <div className="app-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '400px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.8rem', background: 'linear-gradient(to right, var(--primary-color), #ec4899)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          MyResume
        </h1>
        <h2 style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 500 }}>Crie sua conta</h2>
        
        {error && <div style={{ color: '#dc2626', background: '#fee2e2', padding: '0.75rem', borderRadius: '0.5rem', fontSize: '0.875rem', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">E-mail</label>
            <input type="email" required className="form-input" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Senha</label>
            <input type="password" required minLength={4} className="form-input" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Confirme a Senha</label>
            <input type="password" required minLength={4} className="form-input" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>Registrar</button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '0.875rem', marginTop: '1rem' }}>
          Já tem uma conta? <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600 }}>Faça Login</Link>
        </p>
      </div>
    </div>
  );
}
