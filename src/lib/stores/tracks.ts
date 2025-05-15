import { create } from "zustand";

interface Track {
  id: string;
  name: string;
  href: string;
  urlImage: string;
  artitst: string;
}

interface TrackStore {
  track: Track;
  setTrack: (track: Track) => void;
}

const INITIAL_STATE: Track = {
  id: "",
  name: "Song Name",
  href: "",
  urlImage: "/images.png",
  artitst: "Artist Name",
};

export const useTrackStore = create<TrackStore>((set) => ({
  track: INITIAL_STATE,
  setTrack: (track) => set(() => ({ track })),
}));
