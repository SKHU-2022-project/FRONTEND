/* eslint-disable */
// ! 현재 안쓰는 api Hooks

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { testsStateValue, answerStateValue } from '../../store/tests';
import { instance } from '../../libs/api';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

export default function useTests() {
  const [questionValue, setQuestionValue] = useRecoilState(testsStateValue);
  const [answerValue, setAnswerValue] = useRecoilState(answerStateValue);

  async function refreshTests() {
    // ! api 수정 필요(현재 아이티 쪽 데이터부터)
    // ! 총 4개의 get 필요
    // ! useParams로 페이지 번호 넘길 것

    const response = await instance.get(`it/test/${id}`);
    console.log(response);
    setQuestionValue(response.Qserializer);
    setAnswerValue(response.Aserializer);
  }
  useEffect(() => {
    refreshTests();
    window.scrollTo(0, 0);
  }, []);

  async function submitAnswer() {
    await instance.get('it/submit/');
  }

  return {
    questionValue,
    answerValue,
    refreshTests,
  };
}
