import MainTopicsName from "@/components/QuranicTopics/MainTopicsName"

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL


export default async function MainTopicPage() {

    const res = await fetch(`${base_url}/topic`, {
        cache: "force-cache",
    });

    if (!res.ok) {
        return <div className="text-red-500">Topic not found</div>;
    }

    const data = await res.json();

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <MainTopicsName topics={data} />
        </section>
    )
}
