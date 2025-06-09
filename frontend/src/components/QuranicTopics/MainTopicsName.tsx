'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Topic } from '@/types/topic';
import { toBengaliNumber } from '@/helpers/toBengaliNumber';

const MainTopicsName = () => {
    const [topics, setTopics] = useState<Topic[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res = await axios.get('/data/quranic-topics/topics-name.json');
                setTopics(res.data);
            } catch (err) {
                console.error('Error loading topics:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTopics();
    }, []);

    if (isLoading) return <p>লোড হচ্ছে...</p>;

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