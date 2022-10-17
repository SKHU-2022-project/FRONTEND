import useComments from '../hooks/api/useComments';

// styles
import styled from 'styled-components';

export default function CommentList() {
  const { commentValue } = useComments();

  return (
    <Container>
      <h1>api</h1>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 10rem;
  margin-top: 1rem;
  padding-left: 1rem;
`;
