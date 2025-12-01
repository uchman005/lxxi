'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: 'ease-out-cubic', // Smooth easing
      once: false, // Animations trigger only once
      offset: 100, // Trigger animations 100px before element is in view
    });
  }, []);

  return null;
}