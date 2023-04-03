import React from 'react'
import Image from "next/image";
import {
    BoltIcon,
    ExclamationTriangleIcon,
    SunIcon,
} from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const Opening = () => {
    return (
        <div className="flex text-#000000 sm:flex-col items-center justify-center h-[70%] ">
            <h1 className="text-5xl font-bold mb-20">VoiceGPT</h1>
            <div className="flex space-x-2 text-center">
                <div>
                    <div className="flex flex-col items-center justify-center">
                        {/* sun icon */}
                        <SunIcon className="h-6 w-6 " />
                        <h2>Capabilities</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="infoText">
                            "Explain Why Developers are not going to loose jobs to AI"
                        </p>
                        <p className="infoText">"Some Great AI startup Ideas"</p>

                        <p className="infoText">"Explain the James-Webb Telescope"</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center">
                        {/* sun icon */}
                        <BoltIcon className="h-6 w-6 " />
                        <h2>Limitation</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="infoText">
                            Remembers what user said earlier in the conversation
                        </p>
                        <p className="infoText">
                            Allows user to provide follow-up corrections
                        </p>

                        <p className="infoText">
                            Trained to decline inappropriate requests
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center">
                        {/* sun icon */}
                        <ExclamationTriangleIcon className="h-6 w-6 " />
                        <h2>Examples</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="infoText">
                            May occasionally generate incorrect information
                        </p>
                        <p className="infoText">
                            May occasionally produce harmful instructions or biased content
                        </p>

                        <p className="infoText">
                            Limited knowledge of world and events after 2021
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Opening
