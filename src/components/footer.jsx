import React from 'react';

// styles
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <Wrapper>
        <div>Logo</div>
        <div>Copyright skhuzhuanye</div>
        <div>countries</div>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 3rem;
  padding-top: 1.5rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
