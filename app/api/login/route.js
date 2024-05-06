
import { NextResponse } from "next/server";
import axios from "axios";

// login post request
export async function POST(request) {
    try {

        // get request body
        const reqBody = await request.json()

        // destructure request body
        const { email, password } = reqBody

         // Check if all fields are provided
         if (!email || !password) {
            return NextResponse.json({ err: "All fields are required" }, { status: 400 });
        }

        // post request for login
        let apiResponse = await axios.post("https://wild-plum-woodpecker-tux.cyclic.cloud/user/login", { email, password });

        console.log("apiResponse", apiResponse)
        

        // if api return an error
        if (apiResponse.data.error) {
            return NextResponse.json({ err: apiResponse.data.error }, { status: 500 });
        }
        else {
            // if login success
            const response = NextResponse.json({
                message: "Login Successful",
                success: true,
            });

            // set cookiese 
            response.cookies.set("token", apiResponse.data.token, { httpOnly: true });
            return response;
        }

    } catch (err) {

        // handel error success
        return NextResponse.json({ err: err.response.data.error || "Signup Failed" }, { status: 500 });
    }
}
