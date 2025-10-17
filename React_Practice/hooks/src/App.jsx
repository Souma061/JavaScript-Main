import UserProfile from './userProfile';
import Button from '@mui/material/Button';
import React from 'react';
import './index.css';

// Convention: Component names should start with a capital letter (PascalCase)

function App() {
  // The main App component returns the JSX that will be displayed on the page.
  const [userId, setUserId] = React.useState(1);

  const handleUser = () => {
    const randomId = Math.floor(Math.random() * 10) + 1; // Random userId between 1 and 10
    setUserId(randomId);
  }

  return (
    <div className="App">
      <h1>Random User Profile Viewer</h1>

      {/* 3. The button triggers our handler function on click. */}
      <Button variant="contained" color="primary" onClick={handleUser}>
        Fetch New Random User
      </Button>

      {/* 4. The UserProfile component receives the current userId from our state.
           When the state changes, this prop changes, and the component re-fetches. */}
      <UserProfile userId={userId} />
    </div>
  );
}

export default App;

