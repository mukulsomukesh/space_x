import React from 'react';

export default function Banner() {
    return (

        // container
        <div className="flex flex-wrap justify-center items-center h-screen">

            <div className="text-container w-full md:w-1/2 p-8">

                {/* heading */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-[#488da9] font-bold mb-4">Making Life Multiplanetary</h1>

                {/* description */}
                <p className="text-white">
                    SpaceX has gained worldwide attention for a series of historic
                    milestones. It is the only private company capable of returning a
                    spacecraft from low-Earth orbit, and in 2012 our Dragon spacecraft
                    became the first commercial spacecraft to deliver cargo to and from
                    the International Space Station. And in 2020, SpaceX became the first
                    private company to take humans there as well. Click through the
                    timeline above to see some of our milestone accomplishments.
                </p>
            </div>

            {/* image container */}
            <div className="image-container w-full md:w-1/2">
                <img src="https://studentwork.prattsi.org/infovis/wp-content/uploads/sites/3/2021/02/spacex-tesmanian_1600x.jpg" alt="img not available" className="mx-auto" />
            </div>

        </div>
    );
}
