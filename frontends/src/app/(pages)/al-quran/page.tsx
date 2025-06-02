/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';

async function getSurahList() {
    const res = await fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json');
    return res.json();
}

export default async function AlQuranPage() {
    const surahs = await getSurahList();

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">সূরা তালিকা</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {surahs.map((surah: any) => (
                    <li key={surah.id} className="">
                        <Link className='border p-4 rounded hover:bg-muted transition block' href={`/al-quran/${surah.id}`}>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">{surah.id}. {surah.transliteration} ({surah.translation})</span>
                                <div>
                                    <p className="font-semibold">{surah.name}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
