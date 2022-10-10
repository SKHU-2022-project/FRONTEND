import { Link } from 'react-router-dom';

// styles
import styled from 'styled-components';

function Buttons() {
  return (
    <>
      <Link to={`/major`}>
        <MobileBtn>전공 테스트 시작</MobileBtn>
      </Link>
      <MobileBtn>전공 테스트 결과 댓글</MobileBtn>
      <MobileBtn>어떤 전공이 있을까?</MobileBtn>
      <MobileBtn>지앤차란?</MobileBtn>
    </>
  );
}

export default Buttons;

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
