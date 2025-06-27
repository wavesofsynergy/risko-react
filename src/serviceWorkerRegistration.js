// src/serviceWorkerRegistration.js

// Este archivo permite convertir tu app en una PWA.
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado: ', registration);
        })
        .catch((registrationError) => {
          console.log('Service Worker falló: ', registrationError);
        });
    });
  }
}
