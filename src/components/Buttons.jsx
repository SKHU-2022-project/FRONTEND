import { Link } from 'react-router-dom';

// styles
import styled from 'styled-components';

function Buttons() {
  return (
    <Container>
      <Link to={`/major`}>
        <MobileBtn>전공 테스트 시작하기</MobileBtn>
      </Link>
      <Link to={`/comment`}>
        <MobileBtn>전공 테스트 결과 댓글 보러가기</MobileBtn>
      </Link>
      <Link to={`/introduce`}>
        <MobileBtn>스쿠 쭈안이에가 궁금해</MobileBtn>
      </Link>
    </Container>
  );
}

export default Buttons;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const MobileBtn = styled.button`
  width: 40vh;
  border: none;
  border-radius: 0.3rem;
  padding: 1.65rem;
  background-color: #117fd6;
  color: white;
  font-weight: 600;
  font-size: 1.15rem;
  margin-bottom: 1rem;
  &:hover {
    opacity: 0.85;
  }
`;
