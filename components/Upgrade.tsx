"use client";

import { UserPlusIcon } from "@heroicons/react/24/solid";

const Upgrade= () => {
    

    return (
        <div
            className="border chatRow text-white hover:border-2 rounded-lg"
            onClick={() => { window.open('https://openai.com/pricing', '_blank'); }}
        >
            <UserPlusIcon className="h-4 w-4" />
            <p>Upgrade to Plus</p>
        </div>
    );
};

export default Upgrade;
