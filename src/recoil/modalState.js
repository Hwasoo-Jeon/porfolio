import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: {
    isOpen: false, // 모달의 초기 상태 (닫힌 상태)
    titleIdx: 0, // 해당 컨텐츠 참조용
  },
});
