'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
    const router = useRouter();
    const session = authClient.useSession();
    
    
    const user = session?.data?.user;

    const onUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { name, image } = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.updateUser({
            name: name,
            image: image,
        });

        if (error) {
            toast.error(error.message || "Failed to update profile");
        } else {
            toast.success("Profile updated successfully!");
            router.push('/userprofile');
        }
    };

    // if (!user) return <div className="text-center mt-20">Loading...</div>;

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-sky-600">Update Profile</h2>
                    <p className="text-gray-500 text-sm">Change your public information</p>
                </div>

                <Form className="flex flex-col gap-5" onSubmit={onUpdate}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        defaultValue={user.name}
                    >
                        <Label className="text-sky-700 font-medium">New Name</Label>
                        <Input 
                            placeholder="Enter your name" 
                            variant="bordered"
                            className="mt-1"
                        />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="text"
                        defaultValue={user.image}
                    >
                        <Label className="text-sky-700 font-medium">New Image URL</Label>
                        <Input 
                            placeholder="https://example.com/photo.jpg" 
                            variant="bordered"
                            className="mt-1"
                        />
                    </TextField>

                    <div className="flex gap-3 mt-4">
                        <Button 
                            type="submit"
                            className="flex-1 bg-sky-600 text-white font-bold h-12 rounded-xl hover:bg-sky-700"
                        >
                            Save Changes
                        </Button>
                        <Button 
                            type="reset" 
                            variant="flat" 
                            className="px-6 border border-gray-200 text-gray-500 h-12 rounded-xl"
                        >
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default UpdateProfile;