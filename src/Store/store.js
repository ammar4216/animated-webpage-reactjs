import create from "zustand";


const useStore = create((set) => ({
  index: 0,
  inc: () => set((state) => ({ index: state.index + 1 })),
  dec: () => set((state) => ({ index: state.index - 1 })),
}));

export { useStore };