import AyahOfTopic from "@/components/QuranicTopics/AyahOfTopic";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL

export default async function SubTopicPage({
    params
}: {
    params: Promise<{ topicId: string; subTopicId: string }>;
}) {

    const awaitedParam = await params;

    const res = await fetch(`${base_url}/topic/${awaitedParam.topicId}/${awaitedParam.subTopicId}`, {
        cache: "force-cache",
    });

    if (!res.ok) {
        return <div className="text-red-500">Topic not found</div>;
    }


    const data = await res.json();

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <AyahOfTopic topics={data} />
        </section>
    );
}
