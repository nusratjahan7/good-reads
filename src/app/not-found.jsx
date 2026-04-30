import Link from "next/link";

const NotFoundPage = () => {
    return (
        <section className="!mx-auto min-w-lg bg-(--rust)/20 !px-6 !my-32  !py-10 text-center rounded-2xl">
            <h1 className=" text-5xl font-bold !mb-6">404</h1>
            <h1 className=" text-2xl  text-gray-600 !mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-500 !mb-6">
          Oops! The page you are looking for does not exist.
        </p>
            < button className="btn outline-none border-none !px-3 bg-(--rust) text-white">
                <Link href="/">Go Home</Link>
            </button>
        </section>
    );
};

export default NotFoundPage;