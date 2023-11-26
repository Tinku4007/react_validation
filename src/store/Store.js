import { create } from "zustand";

export const useStore = create((set) => ({
    sidebarService: false,
    toggle: () => set((state) => ({ sidebarService: !state.sidebarService }))
}));