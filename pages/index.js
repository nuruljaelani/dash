import { useState } from 'react'
import Dashboard from '../components/dashboard'
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
        <Dashboard />
      </div>
    </div>
  )
}