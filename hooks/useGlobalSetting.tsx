import { create } from "zustand";

interface GlobalSetting {
  customizer: boolean;
  toggleCustomizer: () => void;
}

export const useGlobalSetting = create<GlobalSetting>((set) => ({
  customizer: false,
  toggleCustomizer: () => set((state) => ({ customizer: !state.customizer })),
}));
