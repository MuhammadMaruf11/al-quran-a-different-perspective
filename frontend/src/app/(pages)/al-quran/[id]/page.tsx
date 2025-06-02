/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';

async function getSurahBN(id: string) {
    const res = await fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/${id}.json`);
    if (!res.ok) return null;
    return res.json();
}

export default async function SurahPage({ params }: { params: { id: string } }) {
   
    const surahBN = await getSurahBN(params.id);
    if ( !surahBN) return notFound();

  

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4 flex justify-between border-b pb-4">
                <span>{surahBN.transliteration} ({surahBN.translation})</span>
                <span>{surahBN.name} </span>
            </h1>
            <div className="space-y-6">
                {surahBN.verses.map((ayah: any, index: number) => (
                    <div key={ayah.id} className="border-b pb-4">
                        <p className="text-sm text-muted-foreground mt-1 font-bold">আয়াত : {ayah.id}</p>
                        <p className="text-right text-xl font-serif">{ayah.text}</p>
                        <p className="mt-2 text-base">{surahBN.verses[index].translation}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
