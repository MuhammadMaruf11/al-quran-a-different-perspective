import SubTopicsName from "@/components/QuranicTopics/SubTopicsName";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

export default async function TopicPage({ params }: { params: Promise<{ topicId: string }> }) {

    const awaitedParam = await params;

    const res = await fetch(`${base_url}/topic/${awaitedParam.topicId}`, {
        cache: "force-cache",
    });

    if (!res.ok) {
        return <div className="text-red-500">Topic not found</div>;
    }

    const data = await res.json();

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <SubTopicsName topics={data} topicId={awaitedParam.topicId} />
        </section>
    );
}
