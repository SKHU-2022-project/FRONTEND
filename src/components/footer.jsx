import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

// styles
import styled from 'styled-components';
import TestLogo from '../images/TestLogo.png';

function Footer() {
  const isDesktop = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  function onClickHandler() {
    alert('미구현입니다.');
  }

  return (
    <>
      {isDesktop && (
        <DesktopContainer>
          <DesktopWrapper>
            <DesktopLogo src={TestLogo} alt="" />
            <div>
              <Copyright>&copy;2022 SkhuZhuanye.</Copyright>
              <Copyright>All rights reserved.</Copyright>
            </div>
            <Countries>
              <button>한국어</button>
              <button onClick={onClickHandler}>English</button>
              <button onClick={onClickHandler}>中國語</button>
            </Countries>
          </DesktopWrapper>
        </DesktopContainer>
      )}
      {isTablet && (
        <TabletContainer>
          <TabletWrapper>
            <TabletLogo src={TestLogo} alt="" />
            <div>
              <Copyright>&copy;2022 SkhuZhuanye.</Copyright>
              <Copyright>All rights reserved.</Copyright>
            </div>
            <Countries>
              <button>한국어</button>
              <button onClick={onClickHandler}>English</button>
              <button onClick={onClickHandler}>中國語</button>
            </Countries>
          </TabletWrapper>
        </TabletContainer>
      )}
      {isMobile && (
        <MobileContainer>
          <MobileWrapper>
            <MobileLogo src={TestLogo} alt="" />
            <div>
              <Copyright>&copy;2022 SkhuZhuanye.</Copyright>
              <Copyright>All rights reserved.</Copyright>
            </div>
            <Countries>
              <button>한국어</button>
              <button onClick={onClickHandler}>English</button>
              <button onClick={onClickHandler}>中國語</button>
            </Countries>
          </MobileWrapper>
        </MobileContainer>
      )}
    </>
  );
}

export default Footer;

// Desktop
const DesktopContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
const DesktopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10rem;
`;
const DesktopLogo = styled.img`
  width: 5vw;
`;

// Tablet
const TabletContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
const TabletWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
`;
const TabletLogo = styled.img`
  width: 10vw;
`;

// Mobile
const MobileContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.5rem;
`;
const MobileLogo = styled.img`
  width: 15vw;
`;
const Copyright = styled.div`
  font-size: 0.75rem;
  opacity: 0.65;
  margin-left: 1.5rem;
`;
const Countries = styled.div`
  button {
    border: none;
    background-color: white;
    font-size: 0.7rem;
    opacity: 0.65;
    &:hover {
      color: #117fd6;
    }
  }
`;
