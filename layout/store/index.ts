import { create } from 'zustand'

interface IStore {
  collapseSidebar: boolean
  toggleCollapseSidebar: () => void
}

export const useLayoutStore = create<IStore>(set => ({
  collapseSidebar: false,
  toggleCollapseSidebar: () => set(state => ({ collapseSidebar: !state.collapseSidebar })),
}))
