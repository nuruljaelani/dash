import React from 'react'

export const Table = ({handleModal}) => {
    return (
        <>
            <div className="bg-white shadow-lg mx-6 border">
                <div className="flex justify-between items-center p-4">
                    <p className="text-gray-500">Data Siswa</p>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-2xl h-8 flex text-xs items-center focus:outline-none" type="button" onClick={handleModal}>
                        <span className="material-icons">add</span>
                        <p>Tambah Data</p>
                    </button>
                </div>
                <hr />
                <table className="w-full text-left px-6">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Nama</th>
                            <th className="px-4 py-2">Jurusan</th>
                            <th className="px-4 py-2">Kelas</th>
                            <th className="px-4 py-2">Alamat</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-500">
                        <tr className="hover:bg-gray-100">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Jay Weinberg</td>
                            <td className="px-4 py-2">Rekayasa Perangkat Lunak</td>
                            <td className="px-4 py-2">12</td>
                            <td className="px-4 py-2">Cirebon</td>
                            <td className="px-4 py-2">
                                <button type="button" className="border rounded border-cyan-500 py-1 px-2 text-white hover:text-gray-700 mr-2 bg-cyan-500 hover:bg-opacity-0">
                                    <i className="material-icons md-18">edit</i>
                                </button>
                                <button type="button" className="border rounded border-red-500 py-1 px-2 text-white hover:text-gray-700 bg-red-500 hover:bg-opacity-0">
                                    <i className="material-icons md-18">remove</i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>  
        </>
    )
}
