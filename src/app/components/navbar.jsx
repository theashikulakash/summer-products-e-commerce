"use client";
import Link from "next/link";
export default function Navbar() {
    const user = null; // replace with auth
    return (
        <div className="navbar flex flex-row bg-base-200 mx-auto w-10/12">
            <div className="flex-1">
                <a href="/" className="text-xl font-bold">SummerShop</a>
            </div>
            <div className="flex flex-row mx-1">
                <Link href="/" className="mx-1">Home</Link>
                <Link href="/profile">My Profile</Link>
            </div>
            <div>
                {user ? (
                    <button className="btn">Logout</button>
                ) : (
                    <>
                        <Link href="/login" className="btn mx-1">Login</Link>
                        <Link href="/register" className="btn mx-1">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
}