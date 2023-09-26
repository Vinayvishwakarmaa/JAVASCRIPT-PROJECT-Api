const accessKey = 'RjDaqrj1o6CP9OKi6r5xfu7DKASKFKRAyUdnJQBthAs';
//
const searchForm = document.querySelector('form');
const imagesContainer = document.querySelector('.images-container');
const searchInput = document.querySelector('.search-input');



// Function to fetch images using Unsplash API

const fetchImages = async (query) => {
      imagesContainer.innerHTML = '';


      const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&client_id=${accessKey}`;  

      const response = await fetch(url);
      const data = await response.json();
      
      data.results.forEach(photo => {
            // Creading Image Div
            const imageElement = document.createElement('div');
            imageElement.classList.add('imageDiv');
            imageElement.innerHTML = `<img src=${photo.urls.regular}/>`;

            // creating overlay 
            const overlayElement = document.createElement('div');
            overlayElement.classList.add('overlay');

            // Creating overlay Text
            const overlayText = document.createElement('h3');
            overlayText.innerText = `${photo.alt_description}` 

            overlayElement.appendChild(overlayText);
            imageElement.appendChild(overlayElement);
            imagesContainer.appendChild(imageElement);
      });
};

// fetchImages();

// adding Event Listener to search form

searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputText = searchInput.value.trim();
      if (inputText !== '') {
            fetchImages(inputText);
      }
      else {
            imagesContainer.innerHTML = `<h2>Please enter a search query.</h2>`
      }
});