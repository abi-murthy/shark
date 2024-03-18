'use client'

import {useState} from "react";
import Greeting from "@/app/Greeting";
import { useRouter } from 'next/navigation'
export default function Home() {
    const [loopDone, setIsLoopDone] = useState(false)
    const router = useRouter()

    return (
      <main className="flex min-h-screen flex-col items-center p-14">
          <Greeting onGreetingDone={()=>{setIsLoopDone(true)}}></Greeting>
          {loopDone && (

              <div className="flex flex-col p-4 mb-5 w-full items-center">
                  <span className="flex mb-4">
                    piick a color
                  </span>
                  <div className="flex w-full justify-center flex-wrap flex-row">
                      <div className="aspect-square bg-green-800 w-full sm:w-1/4 m-3 cursor-pointer" onClick={()=>router.push('/ur-mom/green')}>
                      </div>
                      <div className="aspect-square bg-orange-500 w-full sm:w-1/4 m-3 cursor-pointer" onClick={()=>router.push('/ur-mom/orange')}>
                      </div>
                  </div>
              </div>
          )}
      </main>
    );
}
