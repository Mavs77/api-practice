document.getElementById('giph-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    const searchTerm = document.getElementById('giph-search').value;
    const weirdness = document.getElementById('weirdness-factor').value;

    const apiURL = `https://api.giphy.com/v1/gifs/translate?api_key=As7G3HYSV6hAJPPw0QF0wUEMflrBXeFE&s=${searchTerm}&weirdness=${weirdness}`

    try {
        const response = await fetch(`${apiURL}`);
        if (!response.ok) {
            throw new Error('Failed to fetch the Giph');
        }

        const data = await response.json();
        const giphImage = document.getElementById('giph-image');
        giphImage.src = data.data.images.original.url; // Update the image
        giphImage.alt = `Giph for ${searchTerm}`;
        giphImage.style.display = 'block'; // Show the image
    } catch (error) {
        console.error('Error fetching Giph:', error);
    }
});



