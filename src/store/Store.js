import { create } from "zustand";

export const useStore = create((set) => ({
    sidebarService: false,
    toggle: () => set((state) => ({ sidebarService: !state.sidebarService }))
}));

export const useUsersStore = create((set) => ({
    onboarded: [],
    setUsers: (data) => set(() => ({ onboarded: data }))
}))

export const OnboardedStore = create((set) => ({
    onboardedUser: [],
    setonboardedUser: (data) => set(() => ({ onboardedUser: data }))
}))