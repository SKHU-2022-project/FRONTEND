// styles
import styled from 'styled-components';

export default function Question() {
  return (
    <Container>
      <Wrapper>
        <h1>0. 질문질문질문질문질문질문질문질문질문질</h1>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 0rem 2rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  border-radius: 0.5rem;
  background-color: #117fd6;
  color: white;
  padding: 1.5rem 2rem;
  line-height: 1.5rem;
`;
