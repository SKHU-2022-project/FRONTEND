import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { commentsState } from '../../store/tests';
import { instance } from '../../libs/api';

export default function useComments() {
  const [commentValue, setCommentValue] = useRecoilState(commentsState);

  async function refreshComments() {
    // ! get api 주소 필요
    const response = await instance.get(`/comment/`);
    setCommentValue(response);
  }
  useEffect(() => {
    refreshComments();
  }, []);

  async function createComments() {
    // ! post api 주소 필요
    await instance.post(`/post/comments`);
    refreshComments();
  }

  //   async function deleteComments() {
  //     await instance.delete(`/post/${commentId}`);
  //     refreshComments();
  //   }

  return { commentValue, createComments };
}
