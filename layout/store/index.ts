import { create } from 'zustand'

interface IStore {
  collapseSidebar: boolean
  toggleCollapseSidebar: () => void
}

export const useLayoutStore = create<IStore>(set => ({
  collapseSidebar: true,
  toggleCollapseSidebar: () => set(state => ({ collapseSidebar: !state.collapseSidebar })),
}))
