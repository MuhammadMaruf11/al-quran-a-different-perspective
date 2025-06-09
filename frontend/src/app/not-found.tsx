import Link from "next/link";

export default function NotFound() {
    return (
        <section className="h-[calc(100vh-120px)] flex items-center justify-center text-center px-6">
            <div>
                <h1 className="text-6xl font-bold mb-12">404 Error!</h1>
                <h3 className="text-3xl mb-60">
                    Page not found
                </h3>
                <div className="">
                    <Link href='/' className="block border border-[#aaa] px-6 py-4">
                        Go to Home page
                    </Link>
                </div>
            </div>
        </section>
    )
}