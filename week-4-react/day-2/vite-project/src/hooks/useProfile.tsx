import { useState } from "react";

export interface Profile {
  id: number;
  trainerName: string;
  stableName: string;
  email: string;
  bio: string;
  favoriteUma: string[];
  achievements: string[];
  contact: string;
  image: string; // hanya URL
}

export function useProfile() {

  const [profile] = useState<Profile>({
    id: 1,
    trainerName: "Trainer zaki",
    stableName: "tracen academy",
    email: "zakitoriq1@gmail.com",
    bio: "Trainer berpengalaman di Tracen Academy, fokus pada strategi stamina dan mental.",
    favoriteUma: ["Oguri Cap", "Dream journey", "Narita Top Road"],
    achievements: ["Kikuka Sho", "Arima Kinen", "Tokyo Yushun", "Japan Cup", "Tenno Sho"],
    contact: "+62 812-3456-7890",
    image: "https://pm1.aminoapps.com/6991/444e4ab9d55132405af1b5dbac03ed6341f1f245r1-641-429v2_hq.jpg",
  });

  return { profile };
}