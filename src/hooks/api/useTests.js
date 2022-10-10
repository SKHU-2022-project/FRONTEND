/* eslint-disable */

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { testsState } from '../../store/tests';
import { instance } from '../../libs/api';

export default function useTests() {
  const [dummy, setDummy] = useRecoilState(testsState);

  async function refreshTests() {
    // ! api 수정 필요(현재 아이티 쪽 데이터부터)
    const response = await instance.get('it/test/1');
    setDummy(response);
    console.log(response);
    console.log(dummy);
    console.log('response test');
  }
  useEffect(() => {
    refreshTests();
    window.scrollTo(0, 0);
    console.log(test);
  }, []);

  return {
    dummy,
    refreshTests,
  };
}
