import Link from 'next/link'
import { Params, TopicsData } from '@/types/topic';
import { toBengaliNumber } from '@/helpers/toBengaliNumber';

type Props = {
    topics: TopicsData;
    topicId: Params["topicId"];
};

const SubTopicsName = ({ topics, topicId }: Props) => {

    if (!topics) return <>Data not found...</>;

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-12 text-center">{topics.title}</h1>
            <ul className="grid grid-cols-3 gap-4">
                {topics.data?.map((topic) => (
                    <li key={topic?.id} className="">
                        <Link href={`/topics/${topicId}/${topic?.id}`} className="border p-4 rounded hover:bg-muted transition block text-center">
                            {toBengaliNumber(topic?.id)}.  {topic?.topicName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubTopicsName;