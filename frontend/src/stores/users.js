import create from 'zustand';

const useStore = create((set) => ({
  user: 'superman',
  changeUser: (newUser) => set({ user: newUser }),
}));

export { useStore };
