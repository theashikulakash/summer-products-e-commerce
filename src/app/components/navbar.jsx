"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; 
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    

    
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user; 


    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); 
                },
            },
        });
    };

    return (
        <nav className="bg-sky-400 shadow-lg">
            <div className="navbar flex flex-row items-center justify-between rounded-3xl p-4 mx-auto w-10/12">
                
                <div className="flex items-center gap-3">
                    <Link href="/" className="text-2xl font-bold text-white">PeakSummer</Link>
                </div>


                <div className="flex items-center gap-6 text-white font-medium">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/allproducts" className="hover:underline">Products</Link>
                   
                   
                    {user && <Link href="/userprofile" className="hover:underline">My Profile</Link>}
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    {isPending ? (
                        <div className="animate-pulse text-white text-sm">Checking...</div>
                    ) : user ? (
                        <>
                           
                            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white px-3 py-1 shadow-sm">
                                {/* <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-sky-200 text-sm font-bold text-black">
                                    {user.image ? (
                                        // <img src={user.image} alt="avatar" className="h-full w-full object-cover" />
                                    ) : (
                                        user.name?.slice(0, 1) || "U"
                                    )}
                                </div> */}
                                {/* <span className="text-black font-semibold text-sm">{user.name}</span> */}

                                <span className="bg-white rounded-full px-4 py-1 text-black font-bold text-sm hover:bg-red-50 cursor-pointer transition-colors">
                                    <a href="/userprofile">User Profile</a></span>
                            </div>


                            <button 
                                onClick={handleLogout}
                                className="bg-white cursor-pointer rounded-full px-4 py-2 text-black font-bold text-sm hover:bg-red-50 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="bg-white rounded-full px-4 py-2 text-black font-bold text-sm hover:underline">
                                Login
                            </Link>
                            <Link href="/register" className="bg-white rounded-full px-4 py-2 text-black font-bold text-sm hover:underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}