import { atom } from 'recoil';

export const testsStateValue = atom({
  key: 'testsState',
  default: {},
});

export const answerStateValue = atom({
  key: 'answersState',
  default: [],
});

export const commentsState = atom({
  key: 'commentState',
  default: [],
});
