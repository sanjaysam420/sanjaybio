import { useState, useEffect } from 'react';
import './PWAInstall.css';

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA installed successfully');
      setIsInstalled(true);
      setDeferredPrompt(null);
      setShowPrompt(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (isInstalled) {
    return null;
  }

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="pwa-install-banner">
      <div className="pwa-install-content">
        <p>Install this app for a better experience</p>
        <button className="pwa-install-btn" onClick={handleInstall}>
          Install
        </button>
        <button className="pwa-dismiss-btn" onClick={handleDismiss}>
          Later
        </button>
      </div>
    </div>
  );
}
