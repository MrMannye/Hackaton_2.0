import React from 'react'

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';  
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useRouter } from 'next/router';
import Link from 'next/link';


function NavBar() {
    
    const router = useRouter().pathname;
    
    return (
    <div className='h-[80px] w-[412px] absolute bottom-0 flex items-center justify-around bg-black'>
        <Link href={"/mytasks"}>
            <PlaylistAddIcon className={`${router === '/mytasks' ? "text-[#42BEA5]" : "text-white"}`}/>
        </Link>
        <Link href={"/completed"}>
            <AccessAlarmIcon className={`${router === '/completed' ? "text-[#42BEA5]" : "text-white"}`} />
        </Link>
        <Link href={"/myprofile"}>
            <PersonOutlineOutlinedIcon className={`${router === '/myprofile' ? "text-[#42BEA5]" : "text-white"}`}/>
        </Link>
    </div>
  )
}

export default NavBar