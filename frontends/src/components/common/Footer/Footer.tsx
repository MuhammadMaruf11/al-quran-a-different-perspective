import Link from "next/link";

const  Footer = ()=>{
    return (
        <footer className="mt-8 border-t border-border py-6 px-6">
            <div className="text-center">
                <p className="font-semibold">Muhammad Maruf - Software Developer</p>
                <div className="flex justify-center gap-4 mt-2">
                    <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
                    <Link href="https://github.com" target="_blank">GitHub</Link>
                    <Link href="https://facebook.com" target="_blank">Facebook</Link>
                </div>
                <div className="mt-4 flex justify-center gap-4 text-sm flex-wrap">
                    <Link href="/al-quran">Al-Quran</Link>
                    <Link href="/tafsir">Tafsir</Link>
                    <Link href="/topics">Quranic Topics</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;