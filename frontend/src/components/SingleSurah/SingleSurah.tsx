import { toBengaliNumber } from "@/helpers/toBengaliNumber"
import { Surah } from "@/types/surah";

const SingleSurah = ({ singleSurah }: { singleSurah: Surah }) => {

    if (!singleSurah) return <>Data not found...</>;

    return (
        <>
            {<>
                <h1 className="text-2xl font-bold mb-4 flex justify-between border-b pb-4">
                    <span>{singleSurah?.transliteration} ({singleSurah?.translation})</span>
                    <span>{singleSurah?.name} </span>
                </h1>
                <div className="space-y-6">
                    {singleSurah?.verses.map((ayah, index: number) => (
                        <div key={ayah.id} className="border-b pb-4">
                            <p className="text-sm text-muted-foreground mt-1 font-bold">
                                আয়াত : {toBengaliNumber(ayah.id)}
                            </p>
                            <p className="text-right text-xl font-serif">{ayah.text}</p>
                            <p className="mt-2 text-base">{singleSurah?.verses[index].translation}</p>
                        </div>
                    ))}
                </div>
            </>}
        </>
    )
}

export default SingleSurah