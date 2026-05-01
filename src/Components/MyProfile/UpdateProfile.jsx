"use client"
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import cover from "@/assets/cover.jpeg";

const UpdateProfile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [coverUrl, setCoverUrl] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (user) {
            setName("");
            setImage("");
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        await authClient.updateUser({
            name,
            image,
        });

        setStatus("success");
        router.push("/myProfile");
    };

    return (
        <section className="!mx-auto shadow-2xl max-w-md !px-6 !my-9 !py-8">
            <h1 className="font-serif text-3xl text-center !mb-8">Update Profile</h1>

            <form onSubmit={handleSubmit} className="flex flex-col w-70 sm:w-96 gap-5">

                {/* Cover Preview */}
                <div className="relative h-32 w-full rounded-xl overflow-hidden border border-(--rust)">
                    <Image
                        src={coverUrl || cover}
                        alt="cover"
                        fill
                        className="object-cover"
                    />
                </div>             

                {/* Profile Preview */}
                <div className="flex items-center justify-center">
                    {image && (
                        <Image
                            src={image}
                            alt="preview"
                            className="w-20 h-20 rounded-full object-cover border-2 border-(--gold)"
                            width={200}
                            height={200}
                        />
                    )}
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-(--rust)">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="!px-4 !py-3 rounded-xl bg-(--surface) border border-(--rust) text-(--gold) outline-none focus:border-(--gold) transition-all"
                    />
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-(--rust)">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="https://your-image-url.com"
                        className="!px-4 !py-3 rounded-xl bg-(--surface) border border-(--rust) text-(--gold) outline-none focus:border-(--gold) transition-all"
                    />
                </div>

                {/* Cover URL */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-(--rust)">
                        Cover Photo URL
                    </label>
                    <input
                        type="text"
                        value={coverUrl}
                        onChange={(e) => setCoverUrl(e.target.value)}
                        placeholder="https://cover-image-url.com"
                        className="!px-4 !py-3 rounded-xl bg-(--surface) border border-(--rust) text-(--gold) outline-none focus:border-(--gold) transition-all"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="!py-3 !px-6 bg-(--rust) text-white rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-60"
                >
                    {status === "loading" ? "Updating..." : "Update Information"}
                </button>

                {status === "success" && (
                    <p className="text-green-500 text-sm text-center">✅ Profile updated!</p>
                )}
                {status === "error" && (
                    <p className="text-red-500 text-sm text-center">❌ Something went wrong.</p>
                )}
            </form>
        </section>
    );
};

export default UpdateProfile;