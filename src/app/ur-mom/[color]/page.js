'use client'
import React, {useState} from "react"
import {Typewriter} from "nextjs-simple-typewriter"

import Image from "next/image"
import Link from "next/link";

const ProductDetails = ({ params }) => {
    const { color } = params;
    const message = color === 'green' ? 'even this ' + color + ' dino isn\'t as big as ur mom 😹😹😹' : `ur mom wishes she were only as big as this ${color} dino 😹😹😹`
    const end = (message.length - 1)*6 +15
    const [loopDone, setIsLoopDone] = useState(false)
    const [loopCount, setLoopCount] = useState(0)


    const handleType = (count) => {
        setLoopCount(count+loopCount)
        if (loopCount===end){
            setTimeout(() => setIsLoopDone(true), 10)
        }
    }




    return (
        <div className="flex flex-col items-center w-full p-14">
            <div className="h-5 w-full flex justify-center mb-8 text-center">
                <Typewriter
                    words={['_', ' ', '_', ' ', '_', ' ', message]}
                    loop={1}
                    cursor
                    cursorStyle=''
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={100}
                    onType={handleType}
                />
            </div>
            {loopDone && (
                <div className="flex justify-center w-full mt-8 flex-col">
                    <div className="flex justify-center">
                        <Image className="" src={`/${color}.jpg`} alt={`Picture of ${color} dino`} width={500} height={500}/>
                    </div>
                    <div className="flex justify-center">
                        <Link className="text-center mt-10 cursor-pointer sparkle text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out" href={'/'}>Try again 😹😹😹</Link>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductDetails;