import { useState } from 'react';

export default function useInput() {
  const [comment, setComment] = useState('');

  function onChangeComment(e) {
    setComment(e.target.value);
  }
  function clearComment() {
    setComment('');
  }
  return {
    comment,
    onChangeComment,
    clearComment,
  };
}
