import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// components
import TestNumber from '../../components/TestNumber';
import HumanitiesQ from '../../components/TestComponents/HumanitiesQ';
import HumanitiesA from '../../components/TestComponents/HumanitiesA';
import Footer from '../../components/Footer';

// styles
import styled from 'styled-components';

export default function Humanities() {
  return (
    <>
      <Container>
        <TestNumber />
        <HumanitiesQ />
        <HumanitiesA />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  margin-bottom: 7rem;
`;
