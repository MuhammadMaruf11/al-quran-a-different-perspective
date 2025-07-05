import Link from 'next/link'
import { Topic } from '@/types/topic';
import { toBengaliNumber } from '@/helpers/toBengaliNumber';

const MainTopicsName = ({ topics }: { topics: Topic[] }) => {

    if (!topics) return <p>Data not found...</p>;

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-12 text-center">কুরআনিক বিষয়ভিত্তিক তালিকা</h1>
            <ul className="grid grid-cols-3 gap-4">
                {topics?.map((topic) => (
                    <li key={topic?.id} className="">
                        <Link href={`/topics/${topic?.id}`} className="border p-4 rounded hover:bg-muted transition block text-center">
                            {toBengaliNumber(topic?.id)}.  {topic?.topicName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainTopicsName;