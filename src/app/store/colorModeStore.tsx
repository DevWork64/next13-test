import { create } from "zustand";

interface ColorModeStoreType {
  isLightMode: boolean;
  setMode: () => void;
}

export const useColorModeStore = create<ColorModeStoreType>((set) => ({
  isLightMode: true,
  setMode: () => set((state) => ({ isLightMode: !state.isLightMode })),
}));
