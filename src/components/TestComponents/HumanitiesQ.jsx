import React, { useState } from 'react';

// styles
import styled from 'styled-components';

export default function HumanitiesQ() {
  const [Arr, setArr] = useState(['나는 오늘 학교를 간다', 2, 3, 4]);

  return (
    <Container>
      <Wrapper>
        <h1>0. 오늘은 대체공휴일이다. 이때 나는...?</h1>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 3.5rem 0;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const Wrapper = styled.div`
  border-radius: 0.5rem;
  background-color: #117fd6;
  color: white;
  padding: 1.5rem 2rem;
  line-height: 1.5rem;
  width: 100%;
`;
