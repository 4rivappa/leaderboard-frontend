import { Link } from "react-router-dom";

export default function Notfound() {
    return(
        <>
        <div className="flex h-screen items-center justify-center">
            <div className="text-xl text-text-color">Failed to load user's details</div>
            <br/>
            <Link to="/">
                <div className="pl-4">
                    <button type="submit" className="bg-sub-alt-color text-text-color h-10 px-2 sm:px-6 sm:h-12 rounded-lg">Go Back</button>
                </div>
            </Link>
        </div>
        </>
    )
}