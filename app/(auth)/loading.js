import React from 'react';

export default function Loading() {
    return (
        // loading container
        <div className="w-full  h-screen flex justify-center items-center text-white bg-black z-50">

            {/* leading text */}
            <span className="font-semibold text-[20px] " >Loading...</span>
        </div>

    );
}
