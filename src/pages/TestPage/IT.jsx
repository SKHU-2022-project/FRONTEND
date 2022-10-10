import React, { useState } from 'react';

// hooks
import useTests from '../../hooks/api/useTests';

// styles
import styled from 'styled-components';

export default function IT() {
  // ! 받은 배열의 첫 번째 항목만
  const { dummy } = useTests();

  return (
    <>
      {/* {dummy.map(ans => {
        return (
          <div>
            <span>{ans.major}</span>
            <span>{ans.count}</span>
          </div>
        );
      })} */}
      <div>{dummy.major}</div>
    </>
  );
}
