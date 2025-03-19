// Fetch and display members from members.json

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Display members on the page
function displayMembers(members) {
    const container = document.getElementById('member-container');
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        const img = document.createElement('img');
        img.src = `images/${member.image}`;
        img.alt = `${member.name} logo`;

        const name = document.createElement('h3');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = 'Visit Website';
        website.target = '_blank';

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        container.appendChild(card);
    });
}

// Toggle between grid and list view
function toggleView(viewType) {
    const container = document.getElementById('member-container');
    if (viewType === 'grid') {
        container.classList.add('grid-view');
        container.classList.remove('list-view');
    } else {
        container.classList.add('list-view');
        container.classList.remove('grid-view');
    }
}

// Add event listeners to toggle buttons
document.getElementById('grid-view-btn').addEventListener('click', () => toggleView('grid'));
document.getElementById('list-view-btn').addEventListener('click', () => toggleView('list'));

// Fetch members on page load
fetchMembers();
