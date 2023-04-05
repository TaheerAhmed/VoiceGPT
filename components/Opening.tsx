
import {
    BoltIcon,
    ExclamationTriangleIcon,
    SunIcon,
} from "@heroicons/react/24/outline";
import '../styles/Home.module.css'

const Opening = () => {
    return (
        <div className="flex text-#000000 flex-row sm:flex-col sm:items-center justify-center sm:h-[70%]  ">
            <h1 className="text-5xl font-bold p-10 lg:mb-20 hidden sm:flex sm:mt-[5%]   top-[10%] left-0 right-0 ">Voice GPT</h1>
            <div className="flex flex-col max-[640px]:mt-[10%] sm:mt-0 sm:flex-row space-x-2 text-center items-center justify-center pb-30">
                <div className='mt-4 sm:mt-0 h-[100%]'>
                    <div className="flex flex-col items-center justify-center">
                        {/* sun icon */}
                        <ExclamationTriangleIcon className="h-6 w-6 " />
                        <h2>How to use</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="infoText">
                            Click on New Chat to begin chatting with the AI
                        </p>
                        <p className="infoText">
                            Try using the Microphone Feature in the text Input
                        </p>

                        <p className="infoText">
                            Try out Different Models for different Model Answering Capabilities
                        </p>
                    </div>
                </div>
                <div className=' mt-4 sm:mt-0 h-[100%]'>
                    <div className="flex flex-col items-center justify-center ">
                        {/* sun icon */}
                        <SunIcon className="h-6 w-6 " />
                        <h2>Capabilities</h2>
                    </div>
                    <div className="space-y-2">
                        <p className="infoText">
                            &#34;Explain Why Developers are not going to loose jobs to AI&#34;
                        </p>
                        <p className="infoText">&#34;Some Great AI startup Ideas&#34;</p>

                        <p className="infoText">&#34;Explain the James-Webb Telescope&#34;;</p>
                    </div>
                </div>
                <div className=' mt-4 sm:mt-0 h-[100%]'>
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
                
            </div>
        </div>
    );
}

export default Opening
