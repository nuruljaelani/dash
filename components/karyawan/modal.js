import React from 'react'

export const Modal = ({ modal, handleModal }) => {

    return (
        <>
            <div className={modal ? "flex justify-center items-center fixed w-full h-full inset-0" : "hidden"}>
                <div className="bg-gray-900 opacity-75 h-screen w-full absolute" onClick={handleModal}></div>
                <div className="flex flex-col w-full items-center">
                    <div className="bg-white shadow rounded-md text-sm overflow-hidden w-1/2 z-50">
                        <p className="text-gray-700 text-lg font-semibold p-6">Tambah Karyawan</p>
                        <form>
                            <div className="py-4 mb-4 px-6 h-96 overflow-y-auto">
                                <div className="flex items-center mb-4">
                                    <label className="text-sm text-gray-600 w-1/3">Nama Lengkap</label>
                                    <input type="text" className="border border-cyan-300 rounded focus:outline-none focus:border-cyan-500 p-2 w-2/3" />
                                </div>
                                <div className="flex items-center mb-4">
                                    <label className="text-sm text-gray-600 w-1/3">Posisi Pekerjaan</label>
                                    <select className="text-sm text-gray-600 w-2/3 border border-cyan-300 focus:outline-none bg-white rounded p-2">
                                        <option>-- Pilih Pekerjaan --</option>
                                    </select>
                                </div>
                                <div className="flex items-center mb-4">
                                    <label className="text-sm text-gray-600 w-1/3">Tanggal Lahir</label>
                                    <input type="date" className="border border-cyan-300 rounded focus:outline-none focus:border-cyan-500 p-2 w-2/3" />
                                </div>
                                <div className="flex items-center mb-4">
                                    <label className="text-sm text-gray-600 w-1/3">Tempat Lahir</label>
                                    <input type="text" className="border border-cyan-300 rounded focus:outline-none focus:border-cyan-500 p-2 w-2/3" />
                                </div>
                                <div className="flex items-center mb-4">
                                    <label className="text-sm text-gray-600 w-1/3">Email</label>
                                    <input type="text" className="border border-cyan-300 rounded focus:outline-none focus:border-cyan-500 p-2 w-2/3" />
                                </div>
                                <div className="flex items-center mb-4">
                                    <label className="text-sm text-gray-600 w-1/3">No HP</label>
                                    <input type="number" className="border border-cyan-300 rounded focus:outline-none focus:border-cyan-500 p-2 w-2/3" />
                                </div>
                                <div className="flex items-center mb-4">
                                    <label className="text-sm text-gray-600 w-1/3">Alamat</label>
                                   <textarea className="text-sm bg-white w-2/3 border border-cyan-300 focus:outline-none rounded p-2" rows="6"></textarea>
                                </div>
                            </div>
                            <div className="flex justify-end my-4 mx-6">
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
