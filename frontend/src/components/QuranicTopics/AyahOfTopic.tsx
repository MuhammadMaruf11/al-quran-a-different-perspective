'use client'
import { toBengaliNumber } from "@/helpers/toBengaliNumber";
import { Verses } from "@/types/ayah";
import { topicSlug } from "@/types/topic";
import axios from "axios";
import { useEffect, useState } from "react";


const AyahOfTopic = ({ params }: topicSlug) => {

    const [topics, setTopics] = useState<Verses[]>([]);
    const [title, setTitle] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`/data/quranic-topics/topics/topic-${params?.topicId}/verses/verses-${params?.subTopicId}.json`);
                setTitle(response.data.title)
                setTopics(response.data.data);
            } catch (error) {
                console.error("Error fetching surah:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [params?.topicId, params.subTopicId]);

    if (isLoading) return <>লোড হচ্ছে...</>;

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-12 text-center">{title}</h1>
            <div className="space-y-6">
                {topics?.map((topic) => (
                    <div key={topic.id} className="border-b pb-4">
                        <p className="text-sm text-muted-foreground mt-1 font-bold">
                            <span>সূরা : {toBengaliNumber(topic.surah)} </span> - <span> আয়াত : {toBengaliNumber(topic.ayah)}</span>
                        </p>
                        <p className="text-right text-xl font-serif">{topic.text}</p>
                        <p className="mt-2 text-base">{topic?.translation}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AyahOfTopic