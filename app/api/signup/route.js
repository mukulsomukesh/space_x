
import axios from "axios";
import { NextResponse } from "next/server";

// login post request
export async function POST(request) {
    try {

        // get request body
        const reqBody = await request.json()

        // destructure request body
        const { email, password, name } = reqBody

        // Check if all fields are provided
        if (!email || !password || !name) {
            return NextResponse.json({ err: "All fields are required" }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ err: "Invalid email format" }, { status: 400 });
        }

        // Validate password length
        if (password.length < 8) {
            return NextResponse.json({ err: "minimum password length 8" }, { status: 400 });
        }

        // post request for login
        let apiResponse = await axios.post("https://wild-plum-woodpecker-tux.cyclic.cloud/user", { email, password, name });

        // if signup failed
        if (apiResponse.data.msg == "User already exists!") {
            return NextResponse.json({ err: apiResponse.data.msg }, { status: 500 });
        }
        else {
            // if login success
            const response = NextResponse.json({
                message: "Signup Successful",
                success: true,
            });
            return response;
        }

    } catch (err) {

        console.log("error = ", err)
        // handel error success
        return NextResponse.json({ err: err.message || "Signup Failedyy" }, { status: 500 });
    }
}
