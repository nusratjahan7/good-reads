"use client"
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import cover from "@/assets/cover.jpeg";
import Image from "next/image";

const UpdateProfile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const [coverUrl, setCoverUrl] = useState("");
    const [previewCover, setPreviewCover] = useState("");

    const [status, setStatus] = useState("");

    useEffect(() => {
        const savedCover = localStorage.getItem("coverUrl");
        if (savedCover) {
            setPreviewCover(savedCover);
        }
        const savedImage = localStorage.getItem("profileImage");
        if (savedImage) {
            setPreviewImage(savedImage);
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        if (coverUrl) localStorage.setItem("coverUrl", coverUrl);
        if (image) localStorage.setItem("profileImage", image);

        await authClient.updateUser({
            ...(name && { name }),
            ...(image && { image }),
        });

        setStatus("success");
        router.refresh();
        router.push("/myProfile");
    };

    return (
        <section className="!mx-auto shadow-2xl max-w-lg !px-6 !my-9 !py-8">
            <h1 className="font-serif text-3xl text-center !mb-8">Update Profile</h1>

            <form onSubmit={handleSubmit} className="flex items-center flex-col gap-5">

                <div className="relative w-full">
                    {/* Cover Preview */}
                    <div className="relative h-32 w-full rounded-xl overflow-hidden border border-(--rust)">
                        {previewCover ? (
                            <img
                                src={previewCover}
                                alt="cover"
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <Image
                                src={cover}
                                alt="cover"
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>

                    {/* Profile Preview */}
                    <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-(--gold) bg-(--surface) flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/6">
                        {previewImage ? (
                            <img
                                src={previewImage}
                                alt="preview"
                                className="h-full w-full object-cover"
                            />
                        ) : user?.image ? (
                            <img
                                src={user.image}
                                alt="preview"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <span className="font-serif text-4xl text-(--gold)">
                                {user?.name?.[0]?.toUpperCase() ?? "?"}
                            </span>
                        )}
                    </div>
                </div>

                {/* Name */}
                <div className="flex flex-col w-full gap-1.5">
                    <label className="text-sm font-medium text-(--rust)">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="!px-4 !py-3 rounded-xl bg-(--surface) border border-(--rust) text-(--gold) outline-none focus:border-(--gold) transition-all"
                    />
                </div>

                {/* Image URL */}
                <div className="flex flex-col w-full gap-1.5">
                    <label className="text-sm font-medium text-(--rust)">Photo URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value);
                            setPreviewImage(e.target.value);
                        }}
                        placeholder="https://your-image-url.com"
                        className="!px-4 !py-3 rounded-xl bg-(--surface) border border-(--rust) text-(--gold) outline-none focus:border-(--gold) transition-all"
                    />
                </div>

                {/* Cover URL */}
                <div className="flex flex-col w-full gap-1.5">
                    <label className="text-sm font-medium text-(--rust)">Cover Photo URL</label>
                    <input
                        type="text"
                        value={coverUrl}
                        onChange={(e) => {
                            setCoverUrl(e.target.value);
                            setPreviewCover(e.target.value);
                        }}
                        placeholder="https://cover-image-url.com"
                        className="!px-4 !py-3 rounded-xl bg-(--surface) border border-(--rust) text-(--gold) outline-none focus:border-(--gold) transition-all"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="!py-3 !px-6 bg-(--rust) text-white rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-60 w-full"
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