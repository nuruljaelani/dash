import { useState } from 'react'
import { Sidebar, Sidebar2 } from '../components/sidebar'
import Topbar from '../components/topbar'
import { HeadSide } from '../components/head'


export default function Home() {

  const [side, setSide] = useState(true);

    const handleSidebar = () => {
        setSide(!side)
    }

    let sidebar;
    if (side) {
      sidebar = <Sidebar side={side} />
    } else {
      sidebar = <Sidebar2 />
    }

  return (
    <div>
      <HeadSide />
      {sidebar}
      <div className={side ? "flex-1 ml-36 md:ml-64 bg-white":"ml-16 flex-1 bg-white"}>
        <Topbar toggle={handleSidebar} />
        <div className="flex mt-2 border-b mx-6">
          <button type="button" className="w-1/3 font-semibold text-xl text-gray-500 pl-6 hover:text-cyan-500 border-b-4 py-3 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none">Profile</button>
          <button type="button" className="w-1/3 font-semibold text-xl text-gray-500 pl-6 hover:text-cyan-500 border-b-4 py-3 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none">Nilai</button>
          <button type="button" className="w-1/3 font-semibold text-xl text-gray-500 pl-6 hover:text-cyan-500 border-b-4 py-3 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none">Administrasi</button>
        </div>
        
        <div className="my-6 border shadow-lg mx-6">
          <div className="flex items-center px-8 py-6">
            <img src="/avatar1.png" className="w-32 h-auto rounded-full mr-4" />
            <div className="flex flex-col">
              <p className="text-xl font-semibold text-gray-700">Nama Lengkap</p>
              <p className="text-sm font-sans text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, quo.</p>
            </div>
          </div>
          <div className="w-full mt-6 mb-8 px-16">
            <form>
              <div className="flex items-center mb-6">
                <div className="flex w-1/2 items-center">
                  <label className="w-1/4 text-gray-600 text-sm">Nama Lengkap</label>
                  <input type="text" className="w-3/4 border border-transparent focus:border-cyan-500 bg-gray-100 rounded p-2 focus:outline-none" />
                </div>
                <div className="flex w-1/2 items-center ml-12">
                  <label className="w-1/4 text-gray-600 text-sm">NIS</label>
                  <input type="text" className="w-3/4 border border-transparent focus:border-cyan-500 bg-gray-100 rounded p-2 focus:outline-none" />
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex w-1/2 items-center">
                  <label className="w-1/4 text-gray-600 text-sm">Kelas</label>
                  <select name="kelas" className="bg-gray-100 border rounded py-2 px-4 border-transparent w-3/4">
                    <option>-- Pilih Kelas --</option>
                  </select>
                </div>
                <div className="flex w-1/2 items-center ml-12">
                  <label className="w-1/4 text-gray-600 text-sm">Tanggal Lahir</label>
                  <input type="text" className="w-3/4 border border-transparent focus:border-cyan-500 bg-gray-100 rounded p-2 focus:outline-none" />
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex w-1/2 items-center">
                  <label className="w-1/4 text-gray-600 text-sm">Jurusan</label>
                  <input type="text" className="w-3/4 border border-transparent focus:border-cyan-500 bg-gray-100 rounded p-2 focus:outline-none" />
                </div>
                <div className="flex w-1/2 items-center ml-12">
                  <label className="w-1/4 text-gray-600 text-sm">Tempat Lahir</label>
                  <input type="text" className="w-3/4 border border-transparent focus:border-cyan-500 bg-gray-100 rounded p-2 focus:outline-none" />
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex w-1/2 items-center">
                  <label className="w-1/4 text-gray-600 text-sm">Email</label>
                  <input type="text" className="w-3/4 border border-transparent focus:border-cyan-500 bg-gray-100 rounded p-2 focus:outline-none" />
                </div>
                <div className="flex w-1/2 items-center ml-12">
                  <label className="w-1/4 text-gray-600 text-sm">No Hp</label>
                  <input type="text" className="w-3/4 border border-transparent focus:border-cyan-500 bg-gray-100 rounded p-2 focus:outline-none" />
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex w-1/2 items-center">
                  <label className="w-1/4 text-gray-600 text-sm">Alamat</label>
                  <textarea className="w-3/4 border border-transparent focus:border-cyan-500 bg-gray-100 rounded p-2 focus:outline-none" rows="6"></textarea>
                </div>
              </div>
              <div className="flex items-center my-10">
                <div className="flex w-1/2">
                  <div className="w-1/4"></div>
                  <div className="flex w-3/4">
                    <button className="bg-cyan-500 rounded hover:bg-cyan-600 px-4 py-2 text-white text-sm">Submit</button>
                    <button className="bg-gray-200 rounded hover:bg-gray-300 px-4 py-2 text-sm ml-4">Cancel</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}