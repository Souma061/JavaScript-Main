const fetchButton = document.getElementById('fetch-button')
const userList = document.getElementById('user-container')

fetchButton.addEventListener('click', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()

    const user = data.results[0]
    const userItem = document.createElement('div')
    userItem.classList.add('user-item')
    userItem.innerHTML = `
    <img src= "${user.picture.medium}" alt="User Picture" />
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>Email: ${user.email}</p>
    <p>Location: ${user.location.city}, ${user.location.country}</p>
    `
    userList.appendChild(userItem)


  } catch (error) {
    console.error('Error fetching user data:', error);
  }
})


