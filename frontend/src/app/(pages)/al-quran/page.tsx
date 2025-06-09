import SurahList from '@/components/SurahList/SurahList';

async function getSurahList() {
    const res = await fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/index.json');
    return res.json();
}

export default async function AlQuranPage() {
    const surahs = await getSurahList();

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">সূরা তালিকা</h1>
            <SurahList surahs={surahs} />
        </section>
    );
}
