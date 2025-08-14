// js/genreRenderer.js
export function renderGenreCheckboxes(genres) {
    const genreListDiv = document.getElementById('genreList');
    genreListDiv.innerHTML = '';

    genres.forEach(genre => {
        const genreName = genre._id;

        const label = document.createElement('label');
        label.htmlFor = `genre_${genreName}`;
        label.classList.add('genre-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = genreName;
        checkbox.id = `genre_${genreName}`;

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(genreName));

        genreListDiv.appendChild(label);
    });
}
