"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'; 
import cover from '@/assets/cover.jpeg';
import { BiCalendar, BiMailSend, BiPencil } from 'react-icons/bi';
import { useRouter } from 'next/navigation'; 

const MyProfile = () => {
    const [coverUrl, setCoverUrl] = useState(""); 
    const router = useRouter();

    useEffect(() => {
        const saved = localStorage.getItem("coverUrl");
        if (saved) setCoverUrl(saved);
    }, []);

    const { data: session } = authClient.useSession();
    const user = session?.user;

    useEffect(() => {
        if (session !== undefined && !user) {
            router.push("/login");
        }
    }, [user, session, router]);

    if (!user) return null; 

    const createdDate = new Date(user?.createdAt);
    const formattedDate = createdDate.toLocaleDateString();

    return (
        <div>
            <section className="!mx-auto max-w-3xl !px-6 !py-5 md:!py-4">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                    <div className="relative h-40 w-full">
                        <Image
                            src={coverUrl || cover}
                            alt="cover"
                            fill
                            className="object-cover w-full" 
                        />
                    </div>
                    <div className="!px-8 !pb-8">
                        <div className="!-mt-14 flex items-end justify-between">
                            <div className="h-28 w-28 overflow-hidden rounded-full border-4 z-30 border-[#fff8e9] bg-(--surface)">
                                {user?.image ? (
                                    <Image src={user.image} alt={user.name} width={100} height={100} className="h-full w-full object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center font-serif text-4xl text-(--gold)">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                            <button className="btn outline-none shadow-none border-none !px-3 bg-(--rust) text-white">
                                <Link href="/myProfile/update" className='flex'>
                                    <BiPencil className="!mr-1.5 h-4 w-4" /> Update
                                </Link>
                            </button>
                        </div>

                        <h1 className="!mt-4 font-serif text-4xl">{user.name}</h1>
                        <p className="!mt-1 text-sm text-(--rust) font-bold">Member of goodreads</p>

                        <div className="!mt-8 grid gap-3 text-sm">
                            <div className="flex items-center gap-3 rounded-lg border border-(--rust) bg-(--surface) !px-4 !py-3">
                                <BiMailSend className="h-4 w-4 text-(--gold)" />
                                <span className="text-(--gold) font-bold">Email</span>
                                <span className="!ml-auto text-(--gold)">{user.email}</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg border border-(--rust) bg-(--surface) !px-4 !py-3">
                                <BiCalendar className="h-4 w-4 text-(--gold)" />
                                <span className="text-(--gold) font-bold">Member since</span>
                                <span className="!ml-auto text-(--gold)">{formattedDate}</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg border border-(--rust) bg-(--surface) !px-4 !py-3">
                                <span className="text-(--gold) font-bold">User ID</span>
                                <span className="!ml-auto text-(--gold) truncate font-mono text-xs">{user.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyProfile;