import React, { useState } from 'react';

// hooks
import useTests from '../../hooks/api/useTests';

// styles
import styled from 'styled-components';

// map 돌려야 함

export default function HumanitiesA() {
  // const [Arr, setArr] = useState([
  //   '그래도 수업인데 오늘 학교를 간다.',
  //   '공휴일이나까 학교를 가지 않는다.',
  //   '그냥 다른 곳으로 놀러간다.',
  // ]);

  // ! 받은 배열의 첫 번째 항목만
  const { dummy } = useTests();

  // ! map 함수가 필요한가?

  return (
    <Container>
      <List>
        {/* {Arr.map((index, ans) => {
          return (
            <Wrapper>
              <Text>{index}</Text>
            </Wrapper>
          );
        })} */}
        {dummy.map(ans => {
          return (
            <Wrapper>
              <Text>{ans.major}</Text>
              <Text>{ans.count}</Text>
            </Wrapper>
          );
        })}
      </List>
    </Container>
  );
}

const Container = styled.div`
  padding: 0rem 2rem;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
`;

const Wrapper = styled.button`
  border-radius: 0.5rem;
  background-color: #117fd6;
  color: white;
  padding: 1.5rem 2rem;
  line-height: 1.5rem;
  margin-bottom: 1.8rem;
  width: 100%;
`;

const Text = styled.span`
  font-size: 0.85rem;
`;
