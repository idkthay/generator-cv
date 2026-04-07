import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/db';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginUser(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Credenciais inválidas!');
    }
  };

  return (
    <div className="app-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '400px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.8rem', background: 'linear-gradient(to right, var(--primary-color), #ec4899)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          MyResume
        </h1>
        <h2 style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 500 }}>Acesse sua conta</h2>
        
        {error && <div style={{ color: '#dc2626', background: '#fee2e2', padding: '0.75rem', borderRadius: '0.5rem', fontSize: '0.875rem', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">E-mail</label>
            <input type="email" required className="form-input" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Senha</label>
            <input type="password" required className="form-input" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>Entrar</button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '0.875rem', marginTop: '1rem' }}>
          Não tem uma conta? <Link to="/register" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600 }}>Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}
