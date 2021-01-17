import Link from 'next/link';
import React, { useState } from 'react'

const Topbar = ({toggle}) => {

    const [userDropdown, setUserDropdown] = useState(false);

    const handleUserDropdown = () => {
        setUserDropdown(!userDropdown)
    }

    return (
        <>
            <div className="flex bg-white justify-between py-1 px-4 md:px-6">
                <button className="text-gray-800 items-center focus:outline-none" onClick={toggle}>
                    <span className="material-icons">
                        reorder
                    </span>
                </button>
                <button className="py-4 flex items-center focus:outline-none" type="button" onClick={handleUserDropdown}>
                    <img src="/logo.png" className="h-4 md:h-8" />
                    <p className="text-sm text-gray-600 ml-2">User</p>
                    <i className="material-icons">arrow_drop_down</i>
                </button>
                <div className={userDropdown ? "absolute bg-white shadow right-8 top-16 text-gray-500 w-28 rounded-b" : "hidden"}>
                    <button className="text-sm py-2 w-full hover:bg-gray-300 text-center focus:outline-none" type="button">
                        <Link href="/profile">
                            <a>Profile</a>
                        </Link>
                    </button>
                    <button className="text-sm py-2 w-full hover:bg-gray-300 text-center focus:outline-none" type="button">
                        <Link href="/profile">
                            <a>Logout</a>
                        </Link>
                    </button>
                </div>
            </div>   
        </>
    )
}

export default Topbar