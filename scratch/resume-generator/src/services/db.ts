import type { ResumeData } from '../types';

const USERS_KEY = 'resume_users_db';
const SESSION_KEY = 'resume_session';

export const emptyResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: []
};

export function registerUser(email: string, password: string): boolean {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
  if (users[email]) {
    return false; // Usuário já existe
  }
  
  users[email] = {
    password: password,
    resume: emptyResumeData
  };
  
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
}

export function loginUser(email: string, password: string): boolean {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
  if (users[email] && users[email].password === password) {
    localStorage.setItem(SESSION_KEY, email);
    return true;
  }
  return false;
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}

export function getCurrentUser(): string | null {
  return localStorage.getItem(SESSION_KEY);
}

export function getResumeData(): ResumeData {
  const email = getCurrentUser();
  if (!email) return emptyResumeData;
  
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
  return users[email]?.resume || emptyResumeData;
}

export function saveResumeData(resumeData: ResumeData) {
  const email = getCurrentUser();
  if (!email) return;

  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
  if (users[email]) {
    users[email].resume = resumeData;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
}
