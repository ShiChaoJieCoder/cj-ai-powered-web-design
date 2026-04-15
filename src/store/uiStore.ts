import { create } from "zustand";

type UiState = {
  mobileNavOpen: boolean;
  heroReveal: boolean;
  setMobileNavOpen: (open: boolean) => void;
  toggleMobileNav: () => void;
  setHeroReveal: (v: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
  mobileNavOpen: false,
  heroReveal: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  toggleMobileNav: () => set((s) => ({ mobileNavOpen: !s.mobileNavOpen })),
  setHeroReveal: (v) => set({ heroReveal: v }),
}));
