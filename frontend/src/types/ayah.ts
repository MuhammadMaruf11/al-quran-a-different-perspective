export type Ayah = {
  id: number;
  text: string;
  translation: string;
};

export type Verses = Ayah & {
  surah: string;
  ayah: string;
};
