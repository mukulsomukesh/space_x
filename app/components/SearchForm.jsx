"use client"

import { applyFilters } from "@/redux/action";
// import "./css/searchForm.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchForm() {
    const dispatch = useDispatch();
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [originalLaunch, setoriginalLaunch] = useState("");

    useEffect(() => {
        dispatch(applyFilters(status, type, originalLaunch));
    }, []);

    // handels filters
    function handelFilters() {
        dispatch(applyFilters(status, type, originalLaunch));
    }

    return (
        // BEGIN :: Container
        <div className="flex flex-wrap gap-[4] justify-center items-center text-white ">
            {/* select status */}
            <div className=" m-4 flex items-center ">
                <label className="mr-2" >Status:</label>
                <div className="bg-gradient-to-r from-[#488da9] to-[#e5f4df] p-[2px]" >
                    <select
                        className="form-control px-2 py-1  bg-black text-white text-base w-60 "
                        onChange={(e) => {
                            setStatus(e.target.value);
                        }}
                    >
                        <option value="">Status</option>
                        <option value="retired">Retired</option>
                        <option value="active">Active</option>
                        <option value="destroyed">Destroyed</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </div>

            {/* original launch input */}
            <div className="m-4 flex items-center ">
                <label className="mr-2">Original Launch:</label>
                <div className="bg-gradient-to-r from-[#488da9] to-[#e5f4df] p-[2px]" >
                    <input
                        type="datetime-local"
                        className="form-control px-2 py-1  bg-black text-white text-base w-60 "
                        placeholder="Original Launch"
                        onChange={(e) => {
                            setoriginalLaunch(e.target.value);
                        }}
                    />
                </div>
            </div>

            {/* type input */}
            <div className="m-4 flex items-center ">
                <label className="mr-2">Type:</label>
                <div className="bg-gradient-to-r from-[#488da9] to-[#e5f4df] p-[2px]" >
                <input
                    type="text"
                    className="form-control px-2 py-1  bg-black text-white text-base w-60 "
                    placeholder="Type"
                    onChange={(e) => {
                        setType(e.target.value.trim());
                    }}
                />
                </div>
            </div>

            {/* submit button */}
            <div className="bg-gradient-to-r from-[#488da9] to-[#e5f4df] p-[2px]" >
            <button
                className="btn btn-primary btn-block bg-black px-[8px] py-[5px] "
                onClick={(e) => {
                    handelFilters();
                }}
            >
                Apply Filters
            </button>
            </div>
        </div>
        // END :: Container
    );
}