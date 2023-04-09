import { create } from "zustand";

interface IStore {
  loading: boolean;
}

const useGlobalStore = create<IStore>(() => ({
  loading: false,
}));

export default useGlobalStore;
