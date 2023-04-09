import create from "zustand";

interface IStore {
  token?: string;
  userInfo?: any;
  login: (token: string) => void;
  setUserInfo: (user: any) => void;
  logout: () => void;
}

const useAuthStore = create<IStore>((set) => ({
  login: (token) => set(() => ({ token: token })),
  setUserInfo: (user) => set(() => ({ userInfo: user })),
  logout: () => set({ token: undefined, userInfo: undefined }),
}));

export default useAuthStore;
