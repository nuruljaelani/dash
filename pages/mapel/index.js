import React, {useState} from 'react'
import { HeadSide } from "../../components/head";
import Topbar from '../../components/topbar';
import { Sidebar, Sidebar2 } from "../../components/sidebar";
import { Table } from '../../components/mapel/table';
import { Modal} from '../../components/mapel/modal';

const Mapel = () => {

    const [side, setSide] = useState(true);
    const [modal, setModal] = useState(false);

    const handleModal = () => {
      setModal(!modal)
    }

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
      <div className={side ? "flex-1 ml-36 md:ml-64 bg-white h-screen":"h-screen ml-16 flex-1 bg-white"}>
        <Topbar toggle={handleSidebar} />
        <div className="text-gray-500 font-semibold text-xl md:text-2xl my-6 px-6">
            Mapel
        </div>
        <Table handleModal={handleModal} />
        <Modal modal={modal} handleModal={handleModal} />
      </div>
    </div>
  )
}

export default Mapel
