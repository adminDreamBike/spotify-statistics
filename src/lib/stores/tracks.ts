import { create } from "zustand";

const INITIAL_STATE = {
  id: "",
  name: "",
  href: "",
  urlImage: "",
  artitst: "",
};
export const useTrackStore = create((set, get) => ({
  track: INITIAL_STATE,
  setTrack: (track) => set(() => ({ track })),
}));
