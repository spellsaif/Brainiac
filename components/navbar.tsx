"use client";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";

const Navbar = () => {
    const {data:session} = useSession();
    return (
        <div className={cn("bg-white flex justify-between items-center px-[110px] py-2 border-b-[1px] border-gray-200")}>
            <h1 className="text-4xl font-bold border-black p-1 border-2">Brainiac</h1>
            <div>
                {session?.user ? (
                    <p>{session.user.name}</p>
                ) : (
                    <Button variant="secondary">Login</Button>
                )}
            </div>
        </div>
    )
}

export default Navbar;