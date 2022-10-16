// hooks
import useInput from '../hooks/useInput';
import useComments from '../hooks/api/useComments';

//css
import styled from 'styled-components';

export default function CommentInput() {
  const { createComments } = useComments();
  const { comment, onChangeComment, clearComment } = useInput({});

  function onSubmit(e) {
    e.preventDefault();
    if (comment.length === 0) {
      alert('내용을 입력해주세요!');
    } else {
      createComments(comment);
      console.log(comment);
      clearComment();
    }
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input value={comment} onChange={onChangeComment} />
        <SubmitBtn>전송</SubmitBtn>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 3rem;
  padding-left: 1rem;
`;
const Input = styled.input`
  border-radius: 0.3rem;
  width: 85%;
`;
const SubmitBtn = styled.button`
  border: none;
  background-color: white;
`;
