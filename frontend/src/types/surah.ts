import { Ayah } from "@/types/ayah";

export type Surah = {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  verses: Ayah[];
};
