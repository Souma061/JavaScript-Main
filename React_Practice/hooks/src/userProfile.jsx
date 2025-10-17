import useFetch from './useFetch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress'

function UserProfile({ userId }) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const { data: user, loading, error } = useFetch(url);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  if (!user) {
    return <Typography>No user data available</Typography>;
  }
  return (
     <Card sx={{ minWidth: 275, maxWidth: 400, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user?.email}
        </Typography>
        <Typography variant="body2">
          {user?.company?.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserProfile;
