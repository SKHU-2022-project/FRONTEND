import Footer from '../components/Footer';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

// styles
import styled from 'styled-components';

export default function Comment() {
  return (
    <Container>
      <Title>
        <StyledH1>테스트 결과 댓글 공유</StyledH1>
        <StyledSub>
          테스트 후 당신의 결과를 다른 사람들과 소통해보세요
        </StyledSub>
      </Title>
      <CommentBox>
        <CommentList />
        <CommentInput />
      </CommentBox>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  margin-top: 2rem;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;
const StyledH1 = styled.h1`
  font-size: 1.5rem;
`;
const StyledSub = styled.span`
  font-size: 0.75rem;
  margin-top: 1rem;
`;
const CommentBox = styled.div`
  margin: 0 4rem;
  border: 1px solid black;
  margin-bottom: 5rem;
`;
