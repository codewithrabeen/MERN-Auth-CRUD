// serviceWorkerRegistration.js
// Service Worker registration (disabled version)
// This file is kept for compatibility — does not affect app behavior.

export function register() {
  // Service worker registration disabled intentionally.
  // To enable offline caching, change this function
  // to include the Create React App default code.
  console.log("Service worker not registered (disabled).");
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error("Error while unregistering service worker:", error);
      });
  }
}
