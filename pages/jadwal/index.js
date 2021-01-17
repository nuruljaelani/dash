import React, {useState} from 'react'
import {Sidebar, Sidebar2} from '../../components/sidebar'
import {HeadSide} from '../../components/head'
import Topbar from '../../components/topbar'


const Jadwal = () => {

    const [side, setSide] = useState(true);
    const [modal, setModal] = useState(false);

    const handleSidebar = () => {
        setSide(!side)
    }
    
    const handleModal = () => {
      setModal(!modal)
    }

    let sidebar;
    if (side) {
      sidebar = <Sidebar side={side} />
    } else {
      sidebar = <Sidebar2 />
    }

    return (
        <>
            <HeadSide />
            {sidebar}
            <div className={side ? "flex-1 ml-36 md:ml-64 bg-white h-screen":"h-screen ml-16 flex-1 bg-white"}>
                <Topbar toggle={handleSidebar} />
                <div className="flex my-10 bg-white shadow-lg mx-6">
                    <form className="w-full">
                        <div className="flex bg-orange-100 px-4 py-6 items-center">
                            <label className="text-gray-700 font-semibold w-1/6">Cari Kelas</label>
                            <select className="kelas" className="bg-white w-2/6 p-2 rounded border border-cyan-200 focus-within:outline-none">
                                <option disabled>-- Pilih Tingkat --</option>
                            </select>
                            <select className="kelas" className="bg-white w-2/6 p-2 rounded border border-cyan-200 focus-within:outline-none mx-4">
                                <option disabled>-- Pilih Kelas --</option>
                            </select>
                            <button type="button" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded px-4 py-2 focus:outline-none">Submit</button>
                        </div>
                    </form>
                </div>

                <button className="text-white hover:text-gray-600 rounded border border-white hover:border-cyan-500 bg-cyan-500 py-2 px-4 flex ml-6 hover:bg-white">
                    <i className="material-icons md-18">add</i>
                    <p className="font-semibold ml-2 text-sm">Tambah Jadwal</p>
                </button>

                <div className="flex bg-white shadow-md mx-6 my-12">
                    <table className="w-full border">
                        <thead>
                            <tr>
                                <th colSpan="5" className="text-gray-800 font-semibold text-2xl py-4">Jadwal Pelajaran</th>
                            </tr>
                            <tr className="text-gray-500 border text-left">
                                <th className="pl-4 py-2 border">No</th>
                                <th className="pl-4 py-2 border">Hari</th>
                                <th className="pl-4 py-2 border">Mata Pelajaran</th>
                                <th className="pl-4 py-2 border">Jam</th>
                                <th className="pl-4 py-2 border">Guru</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>  
        </>
    )
}

export default Jadwal
