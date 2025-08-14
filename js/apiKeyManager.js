// apiKeyManager.js

import { setApiKey } from './apiHandler.js';

/**
 * Récupère la clé API depuis sessionStorage
 * ou la demande à l'utilisateur si elle n'existe pas.
 */
export function getApiKey() {
    let key = sessionStorage.getItem('RAPIDAPI_KEY');

    if (!key) {
        key = prompt("Veuillez saisir votre clé API RapidAPI :");
        if (key) {
            sessionStorage.setItem('RAPIDAPI_KEY', key);
        } else {
            alert("Clé API manquante. Le projet ne pourra pas fonctionner.");
        }
    }

    toggleApiButton(key); // Masquer le bouton si clé présente
    return key;
}

/**
 * Affiche ou masque le bouton "changer clé API"
 */
function toggleApiButton(key) {
    const btn = document.getElementById('changeApiKey');
    if (!btn) return;
    btn.style.display = key ? 'none' : 'flex';
}

/**
 * Configure le bouton pour changer la clé API.
 * Appeler après l'initialisation du DOM.
 */
export function setupApiKeyButton() {
    const btn = document.getElementById('changeApiKey');
    if (!btn) return;

    btn.addEventListener('click', () => {
        // Supprimer la clé existante et redemander
        sessionStorage.removeItem('RAPIDAPI_KEY');
        const newKey = getApiKey();
        if (newKey) {
            setApiKey(newKey);
            alert("Nouvelle clé API enregistrée !");
        }
    });

    // Masquer ou afficher le bouton selon la clé existante
    toggleApiButton(sessionStorage.getItem('RAPIDAPI_KEY'));
}
