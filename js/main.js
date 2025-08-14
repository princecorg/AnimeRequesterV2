// main.js
import { getApiKey, setupApiKeyButton } from './apiKeyManager.js';
import { setApiKey, setupEndpointListener, setupSearchButton, setupClearButton } from './apiHandler.js';
import { setupThemeToggle } from './themeToggle.js';
import { setupScrollTop } from './scrollTop.js';

// --- Initialisation clé API ---
const key = getApiKey();
if (key) setApiKey(key);

// Configure le bouton de changement de clé API
setupApiKeyButton();

// --- Initialisation fonctionnalités ---
setupEndpointListener();
setupSearchButton();
setupClearButton();
setupScrollTop();
setupThemeToggle();
