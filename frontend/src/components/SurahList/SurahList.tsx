import { toBengaliNumber } from "@/helpers/toBengaliNumber"
import { Surah } from "@/types/surah"
import Link from "next/link"

const SurahList = ({ surahs }: { surahs: Surah[] }) => {

    if (!surahs) return <p>Data not found...</p>;

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {surahs?.map((surah) => (
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