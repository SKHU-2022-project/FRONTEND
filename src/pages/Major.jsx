import { Link } from 'react-router-dom';

// components

import Footer from '../components/Footer';

// styles
import styled from 'styled-components';
import TestCh from '../images/TestCh.png';

export default function Major() {
  return (
    <Container>
      <LogoImg src={TestCh} alt="" />
      <Question>첫번째 질문 : 당신의 학부는?</Question>
      <BtnBox>
        <Link to={`/humanities/test`}>
          <MobileBtn>1. 인문 융합자율학부</MobileBtn>
        </Link>
        <Link to={`/sociology/test`}>
          <MobileBtn>2. 사회 융합자율학부</MobileBtn>
        </Link>
        <Link to={`/media/test`}>
          <MobileBtn>3. 미디어 융합자율학부</MobileBtn>
        </Link>
        <Link to={`/it/test`}>
          <MobileBtn>4. IT 융합자율학부</MobileBtn>
        </Link>
      </BtnBox>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;
const LogoImg = styled.img`
  width: 20vw;
  margin-bottom: 1.5rem;
`;
const Question = styled.div`
  border-radius: 0.5rem;
  background-color: #117fd6;
  color: white;
  padding: 1.5rem 4.5rem;
  line-height: 1.5rem;
`;

const BtnBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 7rem;
`;
const MobileBtn = styled.button`
  padding: 1.65rem;
  width: 50vh;
  border: none;
  border-radius: 0.3rem;
  background-color: #117fd6;
  color: white;
  font-weight: 600;
  font-size: 1.15rem;
  margin-bottom: 1rem;
  &:hover {
    opacity: 0.85;
  }
`;
