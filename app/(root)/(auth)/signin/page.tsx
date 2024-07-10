"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { Button } from '@/components/ui/button'

export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

      const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/auth/signin", user);
            router.push("/");
            
        } catch (error:any) {
            console.log("Login failed", error.message);
            
        }finally {
            setLoading(false);
        }
    }


    return (
    <div className="min-h-screen flex justify-center py-2">
        <div className="container flex flex-col items-center justify-center ">
        <h1 className="text-4xl p-8">{loading ? "Processing" : "Login"}</h1>
        <hr />
        
        <label htmlFor="email">Email</label>
        <input 
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            className="text-black m-2"
            />
        <label htmlFor="password">Password</label>
        <input 
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            className="text-black m-2"

            />
            <Button
            onClick={onLogin}
            className="m-4"
            variant="outline">
                Sign in
            </Button>
            {/* <Link href="/signup">Visit signup page</Link> */}
        
        </div>
        </div>
    )

}