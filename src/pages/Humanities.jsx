import React from 'react';
import { useMediaQuery } from 'react-responsive';

// components
import TestNumber from '../components/TestNumber';
import Question from '../components/Question';
import Answer from '../components/Answer';
import Footer from '../components/Footer';

// styles
import styled from 'styled-components';

export default function Humanities() {
  return (
    <>
      <Container>
        <TestNumber />
        <Question />
        <Answer />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  height: 115vh;
`;
