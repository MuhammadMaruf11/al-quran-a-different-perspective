import SingleSurah from '@/components/SingleSurah/SingleSurah';
import { notFound } from 'next/navigation';

async function getSurahBN(id: string) {
    const res = await fetch(`https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/${id}.json`);
    if (!res.ok) return null;
    return res.json();
}

export default async function SurahPage({ params }: { params: { id: string } }) {
    const surahBN = await getSurahBN(params.id);
    if (!surahBN) return notFound();

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <SingleSurah surah={surahBN} params={params.id} />
        </section>
    );
}
