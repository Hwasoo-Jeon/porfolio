import { useRecoilState } from "recoil";
import { modalState } from "./modalState";

export function useToggleModal(title) {
  const [modal, setModal] = useRecoilState(modalState);

  // 모달 열기 함수
  const openModal = (titleIdx) => {
    setModal((cur) => ({
      titleIdx: titleIdx,
      isOpen: !cur.isOpen,
    }));
  };
  return { modal, openModal };
}
