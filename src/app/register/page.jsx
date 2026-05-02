'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const RegisterPage = () => {
    const router = useRouter(); 

    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            image: userData.imageUrl 
        })

        if (error) {
            console.error(error);
            alert(error.message || "Signup failed");
        } else {
            console.log("Signup successful", data);
            router.push("/login"); 
        }
    };

    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-sky-600">Please Signup</h2>
            <Form className="flex w-96 flex-col mt-10 gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label className="text-sky-600">Name</Label>
                    <Input placeholder="John Doe" />
                    <FieldError />
                </TextField>
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
                    minLength={8}
                    name="password"
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
                    }}
                >
                    <Label className="text-sky-600">Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="imageUrl"
                    type="text"
                >
                    <Label className="text-sky-600">Image URL</Label>
                    <Input placeholder="Image URL" />
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default RegisterPage;