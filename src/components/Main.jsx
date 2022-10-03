import React from 'react';
import { useMediaQuery } from 'react-responsive';

// components
import Buttons from './Buttons';

// styles
import styled from 'styled-components';
import TestLogo from '../images/TestLogo.png';
import TestCh from '../images/TestCh.png';

function Main() {
  const isDesktop = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <>
      {isDesktop && (
        <DesktopContainer>
          <DesktopLogo src={TestLogo} alt="임시 테스트 로고입니다." />
          <DesktopCh src={TestCh} alt="임시 테스트 로고입니다." />
          <Text>
            <span>나에게 어울리는</span>
            <span>교내 전공 찾기 테스트</span>
            <span>본 테스트는 4학기 미만 학생들을 위한 전공 테스트입니다.</span>
          </Text>
          <Buttons />
        </DesktopContainer>
      )}
      {isTablet && (
        <TabletContainer>
          <TabletLogo src={TestLogo} alt="임시 테스트 로고입니다." />
          <TabletCh src={TestCh} alt="임시 테스트 로고입니다." />
          <Text>
            <span>나에게 어울리는</span>
            <span>교내 전공 찾기 테스트</span>
            <span>본 테스트는 4학기 미만 학생들을 위한 전공 테스트입니다.</span>
          </Text>
          <Buttons />
        </TabletContainer>
      )}

      {isMobile && (
        <MobileContainer>
          <Logo src={TestLogo} alt="임시 테스트 로고입니다." />
          <Ch src={TestCh} alt="임시 테스트 로고입니다." />
          <Text>
            <span>나에게 어울리는</span>
            <span>교내 전공 찾기 테스트</span>
            <span>본 테스트는 4학기 미만 학생들을 위한 전공 테스트입니다.</span>
          </Text>
          <Buttons />
        </MobileContainer>
      )}
    </>
  );
}

export default Main;

// Desktop
const DesktopContainer = styled.div`
  height: 130vh;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DesktopLogo = styled.img`
  width: 10vw;
  margin-bottom: 4rem;
`;
const DesktopCh = styled.img`
  width: 15vw;
  margin-bottom: 1rem;
`;
// Tablet
const TabletContainer = styled.div`
  height: 120vh;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TabletLogo = styled.img`
  width: 15vw;
  margin-bottom: 4rem;
`;
const TabletCh = styled.img`
  width: 20vw;
  margin-bottom: 1rem;
`;

// Mobile
const MobileContainer = styled.div`
  height: 115vh;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 20vw;
  margin-bottom: 2.5rem;
`;
const Ch = styled.img`
  width: 30vw;
  margin-bottom: 1rem;
`;

const Text = styled.h1`
  margin: 1rem 0;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-size: 1.5rem;
  }
  span: first-child {
    font-family: MapleFontsBold;
  }
  span: last-child {
    opacity: 0.5;
    font-size: 0.6rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
