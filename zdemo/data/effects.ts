export type EffectBadge = "new" | "top" | "mixed";

export interface Effect {
  id: number;
  title: string;
  posterImage: string;   // Static thumbnail (.webp)
  videoSrc: string;      // Preview video (.mp4)
  badges?: EffectBadge[]; 
  mixedWith?: string;    // Only used if badge includes "mixed"
  aspectRatio?: string;  // Optional custom ratio like "4/5" or "1/1"
}

export const effects: Effect[] = [
  {
    id: 1,
    title: "Raven Transition",
    posterImage: "https://cdn.higgsfield.ai/kling_motion/94b61df4-fff8-4c97-8115-59d8f2fcd93d.webp",
    videoSrc: "https://cdn.higgsfield.ai/kling_motion/8c4795a8-e7ef-4272-8fb3-9d349192a013.mp4",
    badges: ["new", "top"],
  },
  {
    id: 2,
    title: "Splash Transition",
    posterImage: "https://cdn.higgsfield.ai/kling_motion/c55aaeff-aff4-4555-829e-3ffdc193df7f.webp",
    videoSrc: "https://cdn.higgsfield.ai/kling_motion/413e9bed-2fb7-4f61-b69f-e8c7466bfcf6.mp4",
  },
  {
    id: 3,
    title: "Ahegao",
    posterImage: "https://cdn.higgsfield.ai/wan2_2_motion/792e4782-a153-4cd6-a4dc-9470fa92a39a.webp",
    videoSrc: "https://cdn.higgsfield.ai/wan2_2_motion/22b6f9ca-5469-4086-8956-a2deb4944307.mp4",
    badges: ["top"],
  },
  {
    id: 21,
    title: "Crash Zoom In",
    posterImage: "https://static.higgsfield.ai/52862ad0-ca56-4a11-bb1d-cb0ca74f7971.webp",
    videoSrc: "https://static.higgsfield.ai/52862ad0-ca56-4a11-bb1d-cb0ca74f7971.mp4",
    badges: ["mixed"],
    mixedWith: "Tentacles",
  },
  {
    id: 22,
    title: "Flashback",
    posterImage: "https://cdn.higgsfield.ai/seedance_motion/8d5a7208-018e-40ed-b3c5-68696f0ff7bd.webp",
    videoSrc: "https://cdn.higgsfield.ai/seedance_motion/b84cf2aa-6be4-499a-b957-81cd27d72c1f.mp4",
  }
];