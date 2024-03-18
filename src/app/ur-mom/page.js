'use client'
import {useRouter} from "next/navigation";

export default function GetMommed(){
    const router = useRouter()
    return(
        <main className="flex min-h-screen flex-col items-center p-14">
            <div className="text-2xl">
                ur mom 😹😹😹
            </div>
        </main>
    )
}