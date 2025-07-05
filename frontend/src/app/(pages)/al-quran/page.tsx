import SurahList from '@/components/SurahList/SurahList';

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

export default async function AlQuranPage() {

    const res = await fetch(`${base_url}/surah`, {
        cache: "force-cache",
    });

    if (!res.ok) {
        return <div className="text-red-500">Topic not found</div>;
    }

    const data = await res.json();

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">সূরা তালিকা</h1>
            <SurahList surahs={data} />
        </section>
    );
}
