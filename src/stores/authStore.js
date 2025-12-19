import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      login: (userData, token) => {
        set({ 
          user: userData, 
          token, 
          isAuthenticated: true 
        });
      },
      
      logout: () => {
        set({ 
          user: null, 
          token: null, 
          isAuthenticated: false 
        });
      },
      
      updateUser: (userData) => {
        set({ user: { ...get().user, ...userData } });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
