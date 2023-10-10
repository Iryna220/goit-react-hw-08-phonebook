import Container from './Container/Container';
import UserRoutes from 'UserRoutes';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <Container>
      <Navigation />
      <UserRoutes />
    </Container>
  );
}

export default App;
