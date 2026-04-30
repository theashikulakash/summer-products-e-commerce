"use client";
import Link from "next/link";
// import "./globals.css";

export default function Navbar() {
    const user = null; // replace with auth
    return (
        <nav className="bg-orange-500">
<div className="navbar  flex flex-row items-center justify-between rounded-3xl p-4 mx-auto w-10/12">
            <div className="flex-1">
                <a href="/" className="text-2xl text-white font-bold">PeakSummer</a>
            </div>
            <div className="flex  flex-row gap-2 mr-2">
                <Link href="/" className="text-white cursor-pointer hover:text-[var(--secondary)]">Home</Link>
                <Link href="/profile" className="text-white cursor-pointer">My Profile</Link>
            </div>
            <div className="flex items-center gap-2">
                {user ? (
                    <button className="btn btn-theme text-white">Logout</button>
                ) : (
                    <>
                        <Link href="/login" className="btn btn-theme cursor-pointer text-white">Login</Link>
                        <Link href="/register" className="btn btn-theme text-white cursor-pointer">Register</Link>
                    </>
                )}
            </div>
        </div>
        </nav>
        
    );
}



 