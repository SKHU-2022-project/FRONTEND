// components
import Main from './components/Main.jsx';
import Buttons from './components/Buttons';
import Footer from './components/Footer.jsx';

// styles
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Main />
      <Buttons />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
`;
