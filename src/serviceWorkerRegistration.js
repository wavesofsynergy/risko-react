// src/serviceWorkerRegistration.js
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register('/service-worker.js', {
    ready() {
      console.log('App ready to work offline.');
    },
    registered() {
      console.log('Service worker registered.');
    },
    cached() {
      console.log('Content cached.');
    },
    updatefound() {
      console.log('Update found.');
    },
    updated() {
      console.log('New content available; please refresh.');
    },
    offline() {
      console.log('App running in offline mode.');
    },
    error(error) {
      console.error('SW registration error:', error);
    },
  });
}
