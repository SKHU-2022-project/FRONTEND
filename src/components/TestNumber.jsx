// styles
import styled from 'styled-components';

export default function TestNumber() {
  return (
    <Container>
      <Wrapper>
        <h1>Numb</h1>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 0rem 2rem;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem 11rem;
`;
