import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Container from './components/Container';

function App() {
  return (
    <div
      style={{
        background: '#E7EBF0',
        overflow: 'hidden',
      }}
    >
      <Nav />
      <Container />
    </div>
  );
}

export default App;
