import Footer from '../components/Footer';

import { useMediaQuery } from 'react-responsive';

// styles
import styled from 'styled-components';
import TestLogo from '../images/TestLogo.png';

export default function Introduce() {
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
          <Title>
            <span>&lt;</span>
            <DesktopLogoImage src={TestLogo} alt="" />
            <StyledH1>개발자들</StyledH1>
            <span> / &gt;</span>
          </Title>
          <DesktopContainerWrapper>
            <Wrapper>
              <DesktopDevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>백엔드 : 정재완</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
            <Wrapper>
              <DesktopDevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>백엔드 : 최명환</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
            <Wrapper>
              <DesktopDevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>프론트엔드 : 이은지</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
            <Wrapper>
              <DesktopDevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>프론트엔드 : 노욱진</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
          </DesktopContainerWrapper>
          <TextContainer>
            <TitleBottom>개발 동기</TitleBottom>
            <div>
              <span>
                저희 스쿠 쭈안이에(지앤차)는 성공회대 재학생 중 아직 전공 선택을
                하지 않은 1, 2학년을 대상으로 전공 선택의 고민을 도와주기 위하여
                개발하게 되었습니다.
                <br />
                <br />
                결과가 나올 때 학과만 나오는 것이 아닌, 해당 과의 장점과 필요
                역량도 나타나기 때문에 전공 선택에 조금이라도 도움이 될 것이라
                생각합니다.
                <br />
                <br />
                1, 2학년이 아닌 3, 4학년은 결과가 본인의 전공과 맞는지 가볍게
                재미로 테스트하셨으면 좋겠습니다.
                <br />
                <br />
                또한, 저희 팀의 의미는 성공회대학교의 영어 앞글자를 딴
                SKHU(스쿠)와 중국어로 ‘전공’을 뜻하는 쭈안이에, 또 중국어로
                ‘검사’를 뜻하는 지앤차를 더해서 성공회대 전공검사라는 의미를
                지니고 있습니다.
                <br />
                <br />팀 이름은 약칭으로 ‘스쿠 쭈안이에’ 입니다.
                <br />
                <br />
                부디 (전공 선택 하는 데) 도움이 되시길 바라며 재미있게 즐겨
                주시기를 바랍니다.
              </span>
            </div>
          </TextContainer>
          <Footer />
        </DesktopContainer>
      )}
      {isTablet && (
        <TabletContainer>
          <Title>
            <span>&lt;</span>
            <LogoImage src={TestLogo} alt="" />
            <StyledH1>개발자들</StyledH1>
            <span> / &gt;</span>
          </Title>
          <TabletContainerWrapper>
            <Wrapper>
              <TabletDevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>백엔드 : 정재완</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
            <Wrapper>
              <TabletDevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>백엔드 : 최명환</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
            <Wrapper>
              <TabletDevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>프론트엔드 : 이은지</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
            <Wrapper>
              <TabletDevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>프론트엔드 : 노욱진</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
          </TabletContainerWrapper>
          <TextContainer>
            <TitleBottom>개발 동기</TitleBottom>
            <div>
              <span>
                저희 스쿠 쭈안이에(지앤차)는 성공회대 재학생 중 아직 전공 선택을
                하지 않은 1, 2학년을 대상으로 전공 선택의 고민을 도와주기 위하여
                개발하게 되었습니다.
                <br />
                <br />
                결과가 나올 때 학과만 나오는 것이 아닌, 해당 과의 장점과 필요
                역량도 나타나기 때문에 전공 선택에 조금이라도 도움이 될 것이라
                생각합니다.
                <br />
                <br />
                1, 2학년이 아닌 3, 4학년은 결과가 본인의 전공과 맞는지 가볍게
                재미로 테스트하셨으면 좋겠습니다.
                <br />
                <br />
                또한, 저희 팀의 의미는 성공회대학교의 영어 앞글자를 딴
                SKHU(스쿠)와 중국어로 ‘전공’을 뜻하는 쭈안이에, 또 중국어로
                ‘검사’를 뜻하는 지앤차를 더해서 성공회대 전공검사라는 의미를
                지니고 있습니다.
                <br />
                <br />팀 이름은 약칭으로 ‘스쿠 쭈안이에’ 입니다.
                <br />
                <br />
                부디 (전공 선택 하는 데) 도움이 되시길 바라며 재미있게 즐겨
                주시기를 바랍니다.
              </span>
            </div>
          </TextContainer>
          <Footer />
        </TabletContainer>
      )}
      {isMobile && (
        <Container>
          <Title>
            <span>&lt;</span>
            <LogoImage src={TestLogo} alt="" />
            <StyledH1>개발자들</StyledH1>
            <span> / &gt;</span>
          </Title>
          <ContainerWrapper>
            <Wrapper>
              <DevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>백엔드 : 정재완</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
            <Wrapper>
              <DevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>백엔드 : 최명환</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
            <Wrapper>
              <DevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>프론트엔드 : 이은지</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
            <Wrapper>
              <DevImg src={TestLogo} alt="개발자 사진" />
              <TextBox>
                <TextPart>프론트엔드 : 노욱진</TextPart>
                <Text>깃헙 주소</Text>
              </TextBox>
            </Wrapper>
          </ContainerWrapper>
          <TextContainer>
            <TitleBottom>개발 동기</TitleBottom>
            <div>
              <span>
                저희 스쿠 쭈안이에(지앤차)는 성공회대 재학생 중 아직 전공 선택을
                하지 않은 1, 2학년을 대상으로 전공 선택의 고민을 도와주기 위하여
                개발하게 되었습니다.
                <br />
                <br />
                결과가 나올 때 학과만 나오는 것이 아닌, 해당 과의 장점과 필요
                역량도 나타나기 때문에 전공 선택에 조금이라도 도움이 될 것이라
                생각합니다.
                <br />
                <br />
                1, 2학년이 아닌 3, 4학년은 결과가 본인의 전공과 맞는지 가볍게
                재미로 테스트하셨으면 좋겠습니다.
                <br />
                <br />
                또한, 저희 팀의 의미는 성공회대학교의 영어 앞글자를 딴
                SKHU(스쿠)와 중국어로 ‘전공’을 뜻하는 쭈안이에, 또 중국어로
                ‘검사’를 뜻하는 지앤차를 더해서 성공회대 전공검사라는 의미를
                지니고 있습니다.
                <br />
                <br />팀 이름은 약칭으로 ‘스쿠 쭈안이에’ 입니다.
                <br />
                <br />
                부디 (전공 선택 하는 데) 도움이 되시길 바라며 재미있게 즐겨
                주시기를 바랍니다.
              </span>
            </div>
          </TextContainer>
          <Footer />
        </Container>
      )}
    </>
  );
}

// Desktop
const DesktopLogoImage = styled.img`
  width: 10vw;
  margin-right: 0.75rem;
  margin-left: 0.5rem;
`;
const DesktopContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  height: 150vh;
  padding: 0 15rem;
`;
const DesktopContainerWrapper = styled.div`
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const DesktopDevImg = styled.img`
  width: 20%;
  height: 16vh;
  border-radius: 50%;
  margin-right: 1rem;
`;
// Tablet
const TabletContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  height: 150vh;
  padding: 0 8rem;
`;
const TabletContainerWrapper = styled.div`
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const TabletDevImg = styled.img`
  width: 25%;
  height: 15vh;
  border-radius: 50%;
  margin-right: 1rem;
`;
// Mobile
const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  height: 150vh;
  padding: 0 2rem;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-weight: 600;
  font-size: 1.5rem;
`;
const LogoImage = styled.img`
  width: 15vw;
  margin-right: 0.75rem;
  margin-left: 0.5rem;
`;
const StyledH1 = styled.h1`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;
const ContainerWrapper = styled.div`
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3rem;
  margin-top: 3rem;
`;
const DevImg = styled.img`
  width: 40%;
  height: 15vh;
  border-radius: 50%;
  margin-right: 1rem;
`;
const TextPart = styled.h1`
  margin-bottom: 0.5rem;
  font-weight: 600;
`;
const Text = styled.span`
  font-size: 0.75rem;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contenr: center;
  align-items: center;
  padding: 2rem 3rem;
  margin-bottom: 3rem;
  line-height: 1.5rem;
  background-color: #d9d9d9;
`;
const TitleBottom = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  font-weight: 600;
  font-size: 1.5rem;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
