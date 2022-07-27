import {ReactNode} from 'react';
import create from 'zustand';

interface PopupState {
  visible: boolean;
  element: ReactNode | null;
  setVisibility: (visible: boolean) => void;
  setElement: (element: ReactNode | null) => void;
}

export const usePopup = create<PopupState>((set) => ({
  visible: false,
  setVisibility: (visible: boolean) => set({visible}),
  element: null,
  setElement: (element: ReactNode | null) => set({element}),
}));
