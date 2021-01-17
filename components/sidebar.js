import React, { useState } from 'react'
import Link from 'next/link'


const Sidebar = ({side}) => {

    const [dropdown, setDropdown] = useState(false)

    const dropdownHandle = () => {
        setDropdown(!dropdown)
        console.log("dropdown")
    }

    return (
        <>
            <div className={side ? "w-36 md:w-64 bg-white fixed inset-0" : "w-16 bg-white fixed"} style={{zIndex:1000}} id="sidebar">
                <div className="py-3 flex items-center my-2 px-6">
                    <img src="/logo.png" className="w-6 md:w-8 mr-2" />
                    <p className="text-cyan-700 text-2xl font-semibold">SIAKAD</p>
                </div>
                <div className={side ? "px-4 h-screen overflow-y-auto pb-20 pt-4 bg-cyan-600 rounded-tr-3xl" : "px-2 h-screen overflow-y-auto pb-20 pt-4 bg-cyan-500"}>
                    <Link href="/">
                        <button type="button" className="text-sm text-white hover:text-cyan-700 rounded-3xl hover:bg-white p-2 mt-2 flex w-full items-center focus:outline-none">
                            <span className="material-icons">
                                dashboard
                            </span>
                            <a className={side ? "ml-4": "hidden"}>Dashboard</a>
                        </button>
                    </Link>
                    <button className={dropdown ? "flex justify-between text-sm rounded-3xl hover:bg-white p-2 mt-2 items-center text-white hover:text-cyan-700 w-full focus:outline-none" : "text-sm text-white hover:text-cyan-700 rounded-3xl hover:bg-white p-2 mt-2 flex items-center w-full justify-between focus:outline-none"} onClick={dropdownHandle}>
                        <div className="flex">
                            <span className="material-icons">
                                table_rows
                            </span>
                            <p className="ml-4">Data</p>
                        </div>
                        <span className="material-icons">arrow_drop_down</span>
                    </button>
                    <div className={dropdown ? "text-sm" : "hidden"}>
                        <div className="pl-10 py-2 flex flex-col">
                            <Link href="/siswa">
                                <button className="hover:bg-cyan-800 mb-2 py-1 px-2 focus:outline-none text-white text-left">
                                    <a>Siswa</a>
                                </button>
                            </Link>
                            <Link href="/guru">
                                <button className="hover:bg-cyan-800 mb-2 py-1 px-2 focus:outline-none text-white text-left">
                                    <a>Guru</a>
                                </button>
                            </Link>
                            <Link href="/karyawan">
                                <button className="hover:bg-cyan-800 mb-2 py-1 px-2 focus:outline-none text-white text-left">
                                    <a>Karyawan</a>
                                </button>
                            </Link>
                            <Link href="/mapel">
                                <button className="hover:bg-cyan-800 mb-2 py-1 px-2 focus:outline-none text-white text-left">
                                    <a>Mapel</a>
                                </button>
                            </Link>
                            <Link href="/jurusan">
                                <button className="hover:bg-cyan-800 mb-2 py-1 px-2 focus:outline-none text-white text-left">
                                    <a>Jurusan</a>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <Link href="/">
                        <button type="button" className="text-sm text-white hover:text-cyan-700 rounded-3xl hover:bg-white p-2 mt-2 flex w-full items-center focus:outline-none">
                            <span className="material-icons">
                                notifications
                            </span>
                            <a className={side ? "ml-4": "hidden"}>Pengumuman</a>
                        </button>
                    </Link>
                    <Link href="/jadwal">
                        <button type="button" className="text-sm text-white hover:text-cyan-700 rounded-3xl hover:bg-white p-2 mt-2 flex w-full items-center focus:outline-none">
                            <span className="material-icons">
                                view_list
                            </span>
                            <a className={side ? "ml-4": "hidden"}>Jadwal Pelajaran</a>
                        </button>
                    </Link>
                    <Link href="/">
                        <button type="button" className="text-sm text-white hover:text-cyan-700 rounded-3xl hover:bg-white p-2 mt-2 flex w-full items-center focus:outline-none">
                            <span className="material-icons">
                                chat
                            </span>
                            <a className={side ? "ml-4": "hidden"}>Konsultasi</a>
                        </button>
                    </Link>
                    <Link href="/">
                        <button type="button" className="text-sm text-white hover:text-cyan-700 rounded-3xl hover:bg-white p-2 mt-2 flex w-full items-center focus:outline-none">
                            <span className="material-icons">
                                settings
                            </span>
                            <a className={side ? "ml-4": "hidden"}>Pengaturan</a>
                        </button>
                    </Link>
                </div>
            </div>   
        </>
    )
}


const Sidebar2 = () => {

    const [dropdown, setDropdown] = useState(false)

    return (

        <>
            <div className="w-16 fixed inset-0" style={{zIndex:1000}} id="sidebar">
                <div className="py-3 my-2 bg-white">
                    <p className="text-cyan-700 font-semibold text-2xl text-center">SI</p>
                </div>
                <div className="px-4 h-screen overflow-y-auto pb-20 transition duration-500 pt-4 bg-cyan-600 rounded-r-3xl">
                    <Link href="/">
                        <button className="text-white text-sm rounded hover:bg-cyan-700 py-2 mt-2 flex justify-center focus:outline-none w-full" type="button">
                            <a>
                                <span className="material-icons">
                                    dashboard
                                </span>
                            </a>
                        </button>
                    </Link>
                    <button className={dropdown ? "flex justify-center text-sm rounded hover:bg-cyan-700 p-2 mt-2 text-gray-100 w-full focus:outline-none" : "text-sm text-gray-100 rounded hover:bg-cyan-700 p-2 mt-2 flex w-full justify-center focus:outline-none"} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                        <span className="material-icons">
                            table_rows
                        </span>
                    </button>
                </div>
            </div>
            <div className={dropdown ? "text-sm absolute bg-white ml-12 top-32 border shadow" : "hidden"} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} style={{zIndex:1000}}>
                <div className="py-2 w-36 flex flex-col">
                    <Link href="/siswa">
                        <button className="hover:bg-gray-200 mb-2 py-1 px-4 focus:outline-none text-left hover:text-cyan-500" type="button">
                            <a>Siswa</a>
                        </button>
                    </Link>
                    <Link href="/guru">
                        <button className="hover:bg-gray-200 mb-2 py-1 px-4 focus:outline-none text-left hover:text-cyan-500" type="button">
                            <a>Guru</a>
                        </button>
                    </Link>
                    <Link href="/karyawan" >
                        <button className="hover:bg-gray-200 py-1 px-4 focus:outline-none text-left hover:text-cyan-500" type="button">
                            <a>Karyawan</a>
                        </button>
                    </Link>
                    <Link href="/mapel" >
                        <button className="hover:bg-gray-200 py-1 px-4 focus:outline-none text-left hover:text-cyan-500" type="button">
                            <a>Mata Pelajaran</a>
                        </button>
                    </Link>
                    <Link href="/jurusan" >
                        <button className="hover:bg-gray-200 py-1 px-4 focus:outline-none text-left hover:text-cyan-500" type="button">
                            <a>Jurusan</a>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )

}

export {Sidebar, Sidebar2}