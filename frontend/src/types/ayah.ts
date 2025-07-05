export type Ayah = {
  id: number;
  text: string;
  translation: string;
};

export type Verses = Ayah & {
  surah: number;
  ayah: number;
};
