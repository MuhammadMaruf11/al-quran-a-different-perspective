'use client'
import { toBengaliNumber } from "@/helpers/toBengaliNumber";
import { SubTopicsData } from "@/types/topic";

const AyahOfTopic = ({ topics }: { topics: SubTopicsData }) => {

    if (!topics) return <>Data not found...</>;

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-12 text-center">{topics?.title}</h1>
            <div className="space-y-6">
                {topics?.data?.map((topic) => (
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