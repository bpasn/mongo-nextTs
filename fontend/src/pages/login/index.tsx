'use client'
import { signOut } from "next-auth/react";
import LoginScreen from "../screens/LoginScreen";

export default function LoginPage() {
    return (
        <div>
            <LoginScreen />
        </div>
    )
}


