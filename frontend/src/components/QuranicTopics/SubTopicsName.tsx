'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Topic } from '@/types/topic';
import { toBengaliNumber } from '@/helpers/toBengaliNumber';

type Props = {
    params: string | number;
};

const SubTopicsName = ({ params }: Props) => {
    const [topics, setTopics] = useState<Topic[]>([]);
    const [title, setTitle] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/data/quranic-topics/topics/topic-${params}/topic-${params}.json`);
                setTitle(response.data.title)
                setTopics(response.data.data);
            } catch (error) {
                console.error("Error fetching surah:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [params]);

    if (isLoading) return <>লোড হচ্ছে...</>;

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-12 text-center">{title}</h1>
            <ul className="grid grid-cols-3 gap-4">
                {topics?.map((topic) => (
                    <li key={topic?.id} className="">
                        <Link href={`/topics/${params}/${topic?.id}`} className="border p-4 rounded hover:bg-muted transition block text-center">
                            {toBengaliNumber(topic?.id)}.  {topic?.topicName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubTopicsName;