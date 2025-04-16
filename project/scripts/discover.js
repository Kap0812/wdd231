
// discover.js
document.addEventListener('DOMContentLoaded', () => {
    const discoverCards = document.getElementById('discover-cards');
  
    fetch('data/discover.json') // Assuming your JSON file is named data.json and in the same directory
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        discoverCards.innerHTML = ''; // Clear the loading message
  
        data.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('discover-card');
  
          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.title;
  
          const title = document.createElement('h2');
          title.textContent = item.title;
  
          const description = document.createElement('p');
          description.textContent = item.description;
  
          const scripture = document.createElement('p');
          scripture.textContent = `Scripture: ${item.scripture}`;
          scripture.classList.add('scripture');
  
          card.appendChild(image);
          card.appendChild(title);
          card.appendChild(description);
          card.appendChild(scripture);
  
          discoverCards.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error fetching or processing data:', error);
        discoverCards.innerHTML = '<p>Error loading scripture topics.</p>';
      });
  });