import { create } from 'zustand'

interface IStore {
  collapseSidebar: boolean
  toggleCollapseSidebar: () => void
  openMenu: boolean
  toggleOpenMenu: () => void
}

export const useLayoutStore = create<IStore>(set => ({
  collapseSidebar: false,
  toggleCollapseSidebar: () => set(state => ({ collapseSidebar: !state.collapseSidebar })),
  openMenu: false,
  toggleOpenMenu: () => set(state => ({ openMenu: !state.openMenu })),
}))
