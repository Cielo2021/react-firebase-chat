// userStore.js
import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) {
      set({ currentUser: null, isLoading: false });
      return;
    }

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        console.log("User document does not exist.");
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.log("Error fetching user information:", err);
      set({ currentUser: null, isLoading: false });
    }
  },
}));
