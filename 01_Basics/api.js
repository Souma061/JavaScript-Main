async function fetchUserdata(userId) {
  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  try {
    console.log(`Fetching userId: ${userId} from ${apiUrl}`);
    const response = await fetch(apiUrl);
    if (response.ok) {
      const userData = await response.json();
      console.log(userData);
      return userData;
    } else {
      console.error(`Error: ${response.status} ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}
