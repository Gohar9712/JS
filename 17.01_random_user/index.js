const tabelBody = document.getElementById('tbody')
const pageNumber = document.getElementById('')
 let currentPage = 1;

  // Fetch data from API
  async function fetchUserData(page) {
    const response = await fetch(`https://randomuser.me/api/?page=${page}&results=10`);
    const data = await response.json();
    return data.results;
  }

   function renderUsers(users) {
    const userList = document.querySelector('.user-list');
    userList.innerHTML = ''; // Clear previous results

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>${user.name.first} ${user.name.last}</strong><br>
        Email: ${user.email}<br>
        Location: ${user.location.city}, ${user.location.country}
      `;
      userList.appendChild(listItem);
    });
  }

  // Update page buttons
  function updateButtons() {
    document.getElementById('prev-btn').disabled = currentPage === 1;
  }

  // Handle page change
  async function changePage(newPage) {
    currentPage = newPage;
    const users = await fetchUserData(currentPage);
    renderUsers(users);
    updateButtons();
  }

  // Event listeners
  document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    changePage(currentPage + 1);
  });

  // Initial fetch and render
  changePage(currentPage);

