import React from 'react'
import SignupForm from './components/SignupForm'

export default function page() {
    return (

        // container
        <div className='bg-black w-[100%] h-[100vh] flex-col  text-[white] flex items-center justify-center   ' >

            {/* signup form */}
            <SignupForm />
        </div>
    )
}
