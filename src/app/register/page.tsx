import type { Metadata } from 'next';
import AuthForm from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Request Access',
  description: 'Register to request access to the LXXI investor portal — institutional-grade African deal flow and research.',
  robots: { index: false, follow: false },
};

export default function Register() {
  return <AuthForm mode="register" />;
}
