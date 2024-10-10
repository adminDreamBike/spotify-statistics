import { create } from "zustand";

const INITIAL_STATE = {
  id: "",
  name: "Song Name",
  href: "",
  urlImage: "/images.png",
  artitst: "Artist Name",
};
export const useTrackStore = create((set, get) => ({
  track: INITIAL_STATE,
  setTrack: (track) => set(() => ({ track })),
}));
