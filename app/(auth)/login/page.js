import React from 'react'
import LoginForm from './components/LoginForm'

export default function page() {
    return (
        <div className='bg-black w-[100%] h-[100vh] flex-col  text-[white] flex items-center justify-center   ' >

            {/* login form */}
            <LoginForm />

        </div>
    )
}
