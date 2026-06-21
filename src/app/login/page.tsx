import type { Metadata } from 'next';
import AuthForm from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to the LXXI investor portal to access your dashboard, deal flow, and research.',
  robots: { index: false, follow: false },
};

export default function Login() {
  return <AuthForm mode="login" />;
}
