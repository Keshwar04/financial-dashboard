import { create } from "zustand";
import {
  loadedRes,
  productRes,
  transactionRes,
  unloadedRes,
  walletPerfomanceRes,
} from "../mockData";

export const useOperationStore = create((set) => ({
  loadedData: loadedRes,
  setLoadedData: (data) => set(() => ({ loadedData: data })),

  unLoadedData: unloadedRes,
  setUnLoadedData: (data) => set(() => ({ unLoadedData: data })),

  transactionData: transactionRes,
  setTransactionData: (data) => set(() => ({ transactionData: data })),

  productData: productRes,
  setProductData: (data) => set(() => ({ productData: data })),

  partnerData: [],
  setPartnerData: (data) => set(() => ({ partnerData: data })),

  walletPerfomanceData: walletPerfomanceRes,
  setWalletPerfomanceData: (data) =>
    set(() => ({ walletPerfomanceData: data })),

  error: {},
  setError: (updater) =>
    set((state) => ({
      error: typeof updater === "function" ? updater(state.error) : updater,
    })),
}));
