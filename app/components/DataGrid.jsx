"use client"
// import "./css/dataGrid.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function DataGrid() {
    // get data from reducer
    const data = useSelector((store) => store.reducer.data);
    const isProcessing = useSelector((store) => store.reducer.isProcessing);

    // define states from pagination
    const [dataForMapping, setDataForMapping] = useState(data.slice(0, 10));
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / 10);

    // useEffect
    useEffect(() => {
        const startIndex = (currentPage - 1) * 10;
        const endIndex = startIndex + 10;

        // slice data array
        setDataForMapping(data.slice(startIndex, endIndex));
    }, [currentPage, data]);

    return (
        <div>
            {/* /* display total number of result if get request success  else  display please wait text */}
            {!isProcessing ? (
                <h3 className="text-center py-4 " > Total {data.length} Result Found! </h3>
            ) : (
                <h3 className="h-[500px] mt-[100px]  " > Please Wait... </h3>
            )}
            {/* BEGIN :: grid container */}
            <div className="flex flex-wrap gap-4 mx-auto justify-center  ">
                {/* nap data to display */}
                {dataForMapping?.map((el) => (
                    // BEGIN :: Grid Item
                    <div className="bg-gradient-to-r  from-[#488da9] w-[270px] h-[380px] to-[#e5f4df] p-[2px]" >
                        <div key={el.capsule_serial} className=" bg-black h-full items-center p-4 flex flex-col">
                            <h2 className="text-[#488da9] text-[20px] font-semibold mb-4 " >{el.capsule_id[0].toUpperCase() + el.capsule_id.slice(1)}</h2>

                            <p>
                                <strong className="text-[#488da9]" >Capsule Serial: </strong>
                                {el.capsule_serial}
                            </p>
                            <p>
                                <strong className="text-[#488da9]" >Details: </strong>
                                {el.details == null
                                    ? "No Detail Available For This!"
                                    : el.details}
                            </p>
                            <p>
                                <strong className="text-[#488da9]" >Landings: </strong>
                                {el.landings}
                            </p>
                            <p>
                                <strong className="text-[#488da9]" >Original Launch: </strong>
                                {new Date(el.original_launch_unix * 1000).toLocaleDateString()}
                            </p>
                            <p>
                                <strong className="text-[#488da9]" >Reuse Count: </strong>
                                {el.reuse_count}
                            </p>
                            <p>
                                <strong className="text-[#488da9]" >Status: </strong>
                                {el.status}
                            </p>
                            <p>
                                <strong className="text-[#488da9]" >Type: </strong>
                                {el.type}
                            </p>
                            <p>
                                <strong className="text-[#488da9]" >Missions: </strong>{" "}
                                {el.missions.length == 0 ? "No Mission Yet!" : ""}
                                {/* Mapping total number of missions */}
                                {el.missions.map((mission) => (
                                    <p key={mission.flight}>
                                        {mission.name} (Flight {mission.flight})
                                    </p>
                                ))}
                            </p>
                        </div>
                    </div>
                    // END :: Grid Item
                ))}
            </div>
            {/* /* END :: Grid Container */}

            {/* BEGIN :: pagination */}
            <div className="flex justify-center items-center gap-4 py-[50px] ">
                <div className="bg-gradient-to-r from-[#488da9] to-[#e5f4df] p-[2px] " >
                    <button
                        className="p-2  bg-black text-white cursor-pointer "
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Previous
                    </button>
                </div>
                <div className="bg-gradient-to-r from-[#488da9] to-[#e5f4df] p-[2px] " >
                    <button
                        className="p-2  bg-black text-white cursor-pointer "
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
            {/* END :: Pagination */}
        </div>
    );
}