import { create } from 'zustand';

const useUserStore = create((set) => ({
  archivedIds: [],
  hiddenIds: [],
  
  archiveUser: (id) => set((state) => ({
    archivedIds: [...state.archivedIds, id]
  })),
  
  restoreUser: (id) => set((state) => ({
    archivedIds: state.archivedIds.filter(archivedId => archivedId !== id)
  })),
  
  hideUser: (id) => set((state) => ({
    hiddenIds: [...state.hiddenIds, id]
  }))
}));

export default useUserStore;