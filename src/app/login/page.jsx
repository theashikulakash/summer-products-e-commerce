'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { toast } from 'react-toastify'; // 1. Import toast

const LoginPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
        });

        if (error) {
            toast.error("Invalid Email or Password");
        } else {
            toast.success("Login Successful!");
            router.push("/");
        }
    };

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-sky-600">Please Signin</h2>
                <Form className="flex w-96 flex-col mt-10 gap-4" onSubmit={onSubmit}>
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
                        <Label className="text-sky-600">Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Password too short";
                            return null;
                        }}
                    >
                        <Label className="text-sky-600">Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>8+ characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className="bg-sky-600 text-white px-6 py-2 rounded-lg font-bold">
                            Sign In
                        </Button>
                        <Button type="reset" variant="secondary" className="border border-gray-300 px-6 py-2 rounded-lg">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;