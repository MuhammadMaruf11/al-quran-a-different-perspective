'use client'
import API from "@/helpers/api";
import { apiList } from "@/helpers/apiList";
import { useState } from "react";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus("সব ফিল্ড পূরণ করুন");
            return;
        }

        try {
            const response = await API.post(apiList.postMessage, formData);

            if (response.status === 201) {
                setStatus("মেসেজ সফলভাবে পাঠানো হয়েছে!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("সার্ভার এরর! আবার চেষ্টা করুন।");
        }
    };


    return (
        <div className="max-w-xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">যোগাযোগ করুন</h1>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block mb-1 font-semibold">
                        নাম
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint-500"
                        placeholder="আপনার নাম লিখুন"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 font-semibold">
                        ইমেইল
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint-500"
                        placeholder="আপনার ইমেইল লিখুন"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-1 font-semibold">
                        বার্তা
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint-500"
                        placeholder="আপনার বার্তা লিখুন"
                        required
                    ></textarea>
                </div>

                {status && <p className="text-center  font-medium">{status}</p>}

                <button
                    type="submit"
                    className="block w-full bg-mint-500 border cursor-pointer py-3 rounded transition"
                >
                    পাঠান
                </button>
            </form>
        </div>
    );
}

export default ContactMe;