// components
import Footer from './components/footer';

// styles
import styled from 'styled-components';

function App() {
  return (
    <Main>
      <Footer />
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  height: 100vh;
`;
