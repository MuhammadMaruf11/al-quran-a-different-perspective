'use client'

import { toBengaliNumber } from "@/helpers/toBengaliNumber"
import { Surah } from "@/types/surah"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
    surahs?: Surah[];
};

const SurahList = ({ surahs }: Props) => {

    const [surahList, setSurahList] = useState<Surah[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (surahs && surahs.length > 0) {
            setSurahList(surahs);
        } else {
            const fetchData = async () => {
                setIsLoading(true);
                try {
                    const response = await axios.get('/data/quran.json');
                    setSurahList(response.data);
                } catch (error) {
                    console.error('Error fetching surahs:', error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchData();
        }
    }, [surahs]);


    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {isLoading ? <p>
                লোড হচ্ছে...
            </p> : surahList?.map((surah: Surah) => (
                <li key={surah.id} className="">
                    <Link className='border p-4 rounded hover:bg-muted transition block' href={`/al-quran/${surah.id}`}>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{toBengaliNumber(surah.id)}. {surah.transliteration} ({surah.translation})</span>
                            <div>
                                <p className="font-semibold">{surah.name}</p>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SurahList