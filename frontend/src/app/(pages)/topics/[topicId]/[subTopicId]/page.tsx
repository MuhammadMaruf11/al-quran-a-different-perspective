import AyahOfTopic from "@/components/QuranicTopics/AyahOfTopic";

export default function TopicPage({
    params
}: {
    params: { topicId: string; subTopicId: string };
}) {

    const paramsObject = {
        topicId: params.topicId,
        subTopicId: params.subTopicId
    }

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <AyahOfTopic params={paramsObject} />
        </section>
    );
}
