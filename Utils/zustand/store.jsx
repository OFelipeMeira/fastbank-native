import { create } from "zustand";

export const useBearStore = create(
    (set) => ({
        token: undefined,
        setToken: (value) => {
            set((state) => ({ ...state, token: value }));
        },
        unSetToken: (value) => {
            set((state) => ({ token: undefined }));
        },

        account_id: undefined,
        setAccount_id: (value) => {
            set((state) => ({ ...state, account_id: value }));
        },

        name: undefined,
        setName: (value) => {
            set((state) => ({ ...state, name: value }));
        },
    })
);
