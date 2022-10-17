// styles
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

export default function TestNumber() {
  const { id } = useParams();
  const [countNum, setCountNum] = useState();

  useEffect(() => {
    async function renderPage() {
      setCountNum(Number(id) - 1);
    }
    renderPage();
  }, []);

  return (
    <Container>
      <Text>{countNum}&nbsp;/&nbsp;10</Text>
    </Container>
  );
}

const Container = styled.div`
  padding: 0rem 2rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h1`
  font-size: 1.5rem;
`;
