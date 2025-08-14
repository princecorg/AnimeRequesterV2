// apiHandler.js
import { displayResults } from './card.js';

let API_KEY = null;
const API_HOST = "anime-db.p.rapidapi.com"; // indiqué sur la documentation de l'API

/**
 * Définir la clé API pour l'ensemble des requêtes
 */
export function setApiKey(key) {
    API_KEY = key;
    const btn = document.getElementById('changeApiKey');
    if (btn) btn.style.display = 'none'; // Masquer le bouton si la clé existe
}

/**
 * Effectuer une requête vers l'API Anime
 */
export async function apiRequest(endpoint, params = {}) {
    if (!API_KEY) throw new Error("Clé API manquante.");
    const url = new URL(`https://${API_HOST}${endpoint}`);
    Object.entries(params).forEach(([k, v]) => {
        if (v !== undefined && v !== null && v !== '') url.searchParams.append(k, v);
    });

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            "X-RapidAPI-Host": API_HOST,
            "X-RapidAPI-Key": API_KEY
        }
    });

    if (!res.ok) throw new Error(`HTTP ${res.status} - ${await res.text()}`);
    return res.json();
}

/**
 * Gérer le changement d'endpoint dans le formulaire
 */
export function setupEndpointListener() {
    const endpointSel = document.getElementById('endpoint');
    const genreContainer = document.getElementById('genreContainer');
    const paramInput = document.getElementById('param');
    const paramLabel = document.querySelector('label[for="param"]');

    endpointSel.addEventListener('change', async function () {
        const val = this.value;
        if (val === 'by-genre') {
            genreContainer.style.display = 'grid';
            paramInput.style.display = 'none';
            paramLabel.style.display = 'none';
            if (!genreContainer.dataset.populated) {
                try {
                    const genresData = await apiRequest('/genre');
                    genreContainer.innerHTML = '';
                    genreContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
                    genresData.forEach(({ _id }) => {
                        const label = document.createElement('label');
                        label.style.display = 'flex';
                        label.style.alignItems = 'center';
                        label.style.gap = '5px';
                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.value = _id;
                        checkbox.id = `genre_${_id}`;
                        label.appendChild(checkbox);
                        label.appendChild(document.createTextNode(_id));
                        genreContainer.appendChild(label);
                    });
                    genreContainer.dataset.populated = '1';
                } catch (err) {
                    genreContainer.textContent = 'Erreur lors du chargement des genres.';
                    console.error(err);
                }
            }
        } else {
            genreContainer.style.display = 'none';
            paramInput.style.display = val !== 'get-genres' ? 'block' : 'none';
            paramLabel.style.display = val !== 'get-genres' ? 'block' : 'none';
        }
    });
}

/**
 * Configurer le bouton "Rechercher"
 */
export function setupSearchButton() {
    document.getElementById('searchBtn').addEventListener('click', async () => {
        const endpoint = document.getElementById('endpoint').value;
        const val = document.getElementById('param').value.trim();
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = "<p>Chargement ...</p>"; // À voir pour ajouter une petite animation en css

        try {
            let result;
            switch (endpoint) {
                case 'search':
                    if (!val) throw new Error('Entrez un titre.');
                    result = await apiRequest('/anime', { search: val, page: 1, size: 25 });
                    break;
                case 'by-id':
                    if (!val) throw new Error('Entrez un ID.');
                    result = await apiRequest(`/anime/by-id/${encodeURIComponent(val)}`);
                    break;
                case 'by-ranking':
                    const rank = val && !isNaN(Number(val)) ? Number(val) : 1;
                    result = await apiRequest(`/anime/by-ranking/${rank}`);
                    break;
                case 'by-genre':
                    const selectedGenres = Array.from(document.querySelectorAll('#genreContainer input:checked')).map(cb => cb.value).join(',');
                    if (!selectedGenres) throw new Error('Sélectionnez au moins un genre.');
                    result = await apiRequest('/anime', { genres: selectedGenres, page: 1, size: 10 });
                    break;
                case 'get-genres':
                    result = await apiRequest('/genre');
                    break;
                default:
                    throw new Error("Endpoint inconnu.");
            }
            displayResults(result, resultsDiv);
        } catch (err) {
            resultsDiv.innerHTML = `<p style="color:red;">Erreur : ${err.message}</p>`;
        }
    });
}

/**
 * Configurer le bouton "Réinitialiser"
 */
export function setupClearButton() {
    document.getElementById('clearBtn').addEventListener('click', () => {
        // Stocker le thème actuel avant le rechargement de la page
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        window.location.reload();
        sessionStorage.setItem('theme', currentTheme);
    });
}
