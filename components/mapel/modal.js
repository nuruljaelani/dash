import React from 'react'

export const Modal = ({ modal, handleModal }) => {

    return (
        <>
            <div className={modal ? "flex justify-center items-center fixed w-full h-full inset-0" : "hidden"}>
                <div className="bg-gray-900 opacity-75 h-screen w-full absolute" onClick={handleModal}></div>
                <div className="flex flex-col w-full items-center">
                    <div className="bg-white shadow rounded-md text-sm overflow-hidden w-1/3 z-50">
                        <p className="text-gray-700 text-base font-semibold p-4">Tambah Mapel</p>
                        <form>
                            <div className="py-4 px-4">
                                <div className="flex items-center">
                                    <label className="text-sm text-gray-600 w-1/3">Nama Mapel</label>
                                    <input type="text" className="border border-cyan-300 rounded focus:outline-none focus:border-cyan-500 p-2 w-2/3" />
                                </div>
                            </div>
                            <div className="flex justify-end my-2 mx-6">
                                <button className="bg-cyan-500 p-2 text-sm rounded hover:bg-cyan-600 text-white shadow mr-2 focus:outline-none" type="button">Submit</button>
                                <button className="bg-gray-400 p-2 text-sm rounded hover:bg-gray-500 text-white shadow focus:outline-none" onClick={handleModal} type="button">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )   
}       
