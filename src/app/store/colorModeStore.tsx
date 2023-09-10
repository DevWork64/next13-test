import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ColorModeStoreType {
  isLightMode: boolean;
  setMode: () => void;
}

export const useColorModeStore = create<ColorModeStoreType>()(
  persist(
    (set) => ({
      isLightMode: true,
      setMode: () => set((state) => ({ isLightMode: !state.isLightMode })),
    }),
    { name: "color-store" }
  )
);
