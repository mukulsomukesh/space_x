"use client"

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {

    // define states
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const router = useRouter()


    // handel submit form 
    const handelSubmit = async () => {
        try {

            setLoading(true); // Set loading to true when starting the request

            const response = await axios.post("/api/login", formData);

            // if loggin success
            router.push("/");
        } catch (error) {

            // if login failed
            console.error(error);
            toast.error("Error: " + error.response.data.err);
        }
        finally {
            // Reset loading state after request completion (success or failure)
            setLoading(false);
        }
    };


    // handel cpassword hide and show
    const handleCheckboxChange = () => {

        // toggle password value
        setShowPassword(!showPassword);
    }

    return (
        // container
        <div>

            {/* heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-gradient-to-r from-[#488da9] to-[#e5f4df] text-[#488da9] font-bold mb-4">
                Login to Continue
            </h1>

            {/* email input */}
            <div className=' mt-10 bg-gradient-to-r from-[#488da9] to-[#e5f4df] p-[2px]' >
                <input className='bg-black w-full text-white px-2 py-2 ' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} name='email' placeholder='@example' />
            </div>

            {/* password input */}
            <div className='mt-6 bg-gradient-to-r from-[#488da9] to-[#e5f4df] p-[2px]' >
                <input className='bg-black w-full text-white px-2 py-2 ' type={showPassword ? "text" : "password"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} name='password' placeholder='password' />
            </div>

            {/* show password checkbox */}
            <div className='mt-2'>
                <input
                    type="checkbox"
                    className="mr-2"
                    checked={showPassword}
                    onChange={handleCheckboxChange}
                />
                <label className="text-white">Show Password</label>
            </div>

            {/* submit button */}
            <div className=' mt-6 bg-gradient-to-r from-[#488da9] to-[#e5f4df] p-[2px]' >
            <button className={`bg-black w-full hover:font-extrabold font-bold  text-[#488da9] px-2 py-2 ${loading? "cursor-not-allowed": "cursor-pointer"} `} onClick={handelSubmit} disabled={loading}>
                    {loading ? "Please Wait" : 'Login'}
                </button>
            </div>


            {/* redirect to signup text */}
            <div className="mt-8">
                <span> Don't have an account,  </span>
                <Link href={"/signup"} className="font-bold text-[#488da9] " > Signup </Link>
            </div>

            {/* toastify container */}
            <ToastContainer />
        </div>
    )
}
