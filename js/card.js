// js/card.js
export function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'card';

    if (anime.image) {
        const img = document.createElement('img');
        img.src = anime.image;
        img.alt = anime.title;
        card.appendChild(img);
    }

    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h3');
    title.textContent = anime.title;
    content.appendChild(title);

    if (anime.synopsis) {
        const synopsis = document.createElement('p');
        synopsis.textContent = anime.synopsis;
        content.appendChild(synopsis);
    }

    if (anime.genres) {
        const genres = document.createElement('p');
        genres.className = 'genres';
        genres.textContent = `Genres : ${anime.genres.join(', ')}`;
        content.appendChild(genres);
    }

    if (anime.ranking) {
        const rank = document.createElement('p');
        rank.textContent = `Classement : ${anime.ranking}`;
        content.appendChild(rank);
    }

    if (anime.episodes) {
        const episodeNumber = document.createElement('p');
        episodeNumber.textContent = `Épisodes : ${anime.episodes}`;
        content.appendChild(episodeNumber);
    }

    card.appendChild(content);
    return card;
}

export function displayResults(data, container) {
    container.innerHTML = '';

    if (!data) {
        container.innerHTML = "<p>Aucun résultat.</p>";
        return;
    }

    if (Array.isArray(data.data)) {
        data.data.forEach(anime => {
            container.appendChild(createAnimeCard(anime));
        });
    } else if (Array.isArray(data)) { // pour /genre
        const ul = document.createElement('ul');
        data.forEach(g => {
            const li = document.createElement('li');
            li.textContent = typeof g === 'object' && g._id ? g._id : g;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    } else {
        container.appendChild(createAnimeCard(data));
    }
}
