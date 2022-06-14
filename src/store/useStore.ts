import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type User = {
  username: string;
  password: string;
};

interface UserState {
  user: User | null;
  error?: string | null;
  login: ({ username, password }: User) => void;
  logout: () => void;
}

const useUserStore = create<UserState>()(
  devtools(
    persist((set) => ({
      user: null,
      logout: () => set({ user: null }),
      login: ({ username, password }: User) => {
        const isCorrectCredentials =
          username === "admin" && password === "admin123";
        isCorrectCredentials
          ? set({
              user: {
                password,
                username,
              },
            })
          : set({ error: "Invalid Username or Password" });
      },
    }))
  )
);

export default useUserStore;
