"use client"
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { authClient } from "@/lib/auth-client";
const RegisterPage = () => {

    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("Form submitted with:", userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.photoURL,
            callbackURL: '/login',
        })
        console.log("sign up response", { data, error })
        if (error) {
            console.error("Register error details:", {
                message: error.message,
                status: error.status,
                statusText: error.statusText,
                code: error.code,
                error: error.error,
                keys: Object.getOwnPropertyNames(error),
            });
            toast.error(
                error.error?.message ||
                error?.message ||
                "Unable to create account"
            );
        }

        if (data) {
            window.location.href = '/login';
            toast.success("Register successful");
        }
    };

     const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <>
            <ToastContainer placement="top-center" />
            <div className="w-11/12 !mx-auto  min-h-[84vh] flex items-center justify-center gap-3">



                <div className=" !pb-3 flex flex-col items-center justify-center !px-4">

                    <div className="bg-white backdrop-blur-2xl  shadow-xl !px-8 !py-9 rounded-2xl ">

                        <div>
                            <div className="flex flex-col items-center gap-1 !pb-4">
                                <h1 className="text-3xl font-bold text-(--rust) font1">Register your account</h1>
                            </div>
                            <div className="divider text-gray-400"></div>
                        </div>

                        <Form className="flex md:w-96 flex-col gap-4" onSubmit={onSubmit}>

                            {/* name  */}
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-(--rust) font-bold !mb-1">Your Name</Label>
                                <Input name="name" placeholder="Enter your name" className="w-full !px-3 !py-3 border border-(--rust) ring-1 ring-(--rust) focus:outline-(--rust) placeholder:text-md" />
                                <FieldError />
                            </TextField>

                            {/* Photo Url */}
                            <TextField
                                name="photoURL"

                            >
                                <Label className="text-(--rust) font-bold !mb-1">Photo URL</Label>
                                <Input name="photoURL" placeholder="Enter your photo URL" className="w-full !px-3 !py-3 border border-(--rust) ring-1 ring-(--rust) focus:outline-(--rust) placeholder:text-md" />
                                <FieldError />
                            </TextField>

                            {/* Email field */}
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Please enter a valid email address";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-(--rust) font-bold !mb-1">Email</Label>
                                <Input name="email" placeholder="Enter your email" className="w-full !px-3 !py-3 border border-(--rust) ring-1 ring-(--rust) focus:outline-(--rust) placeholder:text-md" />
                                <FieldError />
                            </TextField>

                            {/* Password field */}
                            <TextField className="w-full " name="password"
                                isRequired
                                minLength={8}
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }
                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain at least one uppercase letter";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }
                                    return null;
                                }}>
                                <Label className="text-(--rust) font-bold !mb-1">Password</Label>
                                <InputGroup className="w-full !px-3 !py-1 border border-(--rust) ring-1 ring-(--rust) focus:outline-(--rust) placeholder:text-md">
                                    <InputGroup.Input
                                        name="password"


                                        placeholder="Enter your password"
                                        type={isVisible ? "text" : "password"}

                                    />
                                    <InputGroup.Suffix className="pr-0">
                                        <Button
                                            isIconOnly
                                            aria-label={isVisible ? "Hide password" : "Show password"}
                                            size="sm"
                                            variant="ghost"
                                            onPress={() => setIsVisible(!isVisible)}
                                        >
                                            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                        </Button>
                                    </InputGroup.Suffix>
                                </InputGroup>
                                <Description className="!mt-1">Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                <FieldError />
                            </TextField>

                            {/* Submit  */}
                            <div className="flex flex-col items-center gap-2">
                                <Button type="submit" className="w-full btn bg-(--rust) text-white">
                                    Signup
                                </Button>

                                <div className="divider text-gray-400 !my-3">or</div>

                                {/* Google */}
                                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] !px-3 w-full roboto font-bold">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Signup with Google
                                </button>

                                <p className="text-sm text-center text-gray-400">
                                    Already have an account? {" "}
                                    <Link href="/login" className="text-red-500 hover:text-red-400 font-medium transition-colors">
                                        Login
                                    </Link>
                                </p>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;