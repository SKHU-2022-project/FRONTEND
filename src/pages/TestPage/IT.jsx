import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

// components
import TestNumber from '../../components/TestNumber';
import Footer from '../../components/Footer';
import { testsStateValue, answerStateValue } from '../../store/tests';
import { instance } from '../../libs/api';

// styles
import styled from 'styled-components';

export default function Humanities() {
  const { id } = useParams();
  const [questionValue, setQuestionValue] = useRecoilState(testsStateValue);
  const [answerValue, setAnswerValue] = useRecoilState(answerStateValue);

  const navigate = useNavigate();

  async function submitAnswer() {
    await instance.post('it/submit/');
  }

  function onClickNext() {
    navigate(`/it/test/${Number(id) + 1}`);
    submitAnswer();
    if (id > 10) {
      navigate(`/results`);
    }
  }

  useEffect(() => {
    async function renderPage() {
      const response = await instance.get(`/it/test/${id}`);
      setQuestionValue(response.Qserializer);
      setAnswerValue(response.Aserializer);
    }
    renderPage();
  }, []);

  return (
    <>
      <ContainerMain>
        <TestNumber />
        <Container>
          <Wrapper>
            <h1>{questionValue.question}</h1>
          </Wrapper>
        </Container>
        <ContainerAns>
          <List>
            {answerValue.map((list, index) => {
              return (
                <WrapperAns key={index} type="submit" onClick={onClickNext}>
                  {index + 1}번. &nbsp;{list.answer}
                </WrapperAns>
              );
            })}
          </List>
        </ContainerAns>
      </ContainerMain>
      <Footer />
    </>
  );
}

const ContainerMain = styled.div`
  height: 100vh;
  margin-bottom: 10rem;
  padding: 0 2rem;
`;

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
const ContainerAns = styled.div`
  padding: 0rem 2rem;
  flex-direction: column;
`;

const List = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 3rem;
`;

const WrapperAns = styled.button`
  border-radius: 0.5rem;
  background-color: #117fd6;
  color: white;
  padding: 1.5rem 2rem;
  line-height: 1.5rem;
  margin-bottom: 1.8rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
