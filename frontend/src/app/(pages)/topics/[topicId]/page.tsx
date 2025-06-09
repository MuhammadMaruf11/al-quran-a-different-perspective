import SubTopicsName from "@/components/QuranicTopics/SubTopicsName";

export default function TopicPage({ params }: { params: { topicId: string } }) {
    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <SubTopicsName params={params?.topicId} />
        </section>
    );
}
