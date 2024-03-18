'use client'
import { Typewriter } from 'nextjs-simple-typewriter'
import {useState} from "react";
export default function Greeting({onGreetingDone}){
    const [loopCount, setLoopCount] = useState(0)


    const handleType = (count) => {
        setLoopCount(count+loopCount)
        if (loopCount===63){
            setTimeout(onGreetingDone, 1000)
        }
    }


    return (
        <span className="h-5 mb-20 text-3xl text-yellow-400">
              <Typewriter
                  words={['_', ' ', '_', ' ', '_', ' ', 'hi rachel']}
                  loop={1}
                  cursor
                  cursorStyle=''
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={100}
                  onType={handleType}
              />
          </span>
    )
}