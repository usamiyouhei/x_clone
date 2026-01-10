import React from 'react'
import XIcon from '@mui/icons-material/X';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* X Icon */}
      <XIcon className='sidebar__XIcon'/>

      {/* sidebarOption */}
      <SidebarOption text="ホーム" Icon={HomeIcon}/>
      <SidebarOption text="話題の検索" Icon={SearchIcon}/>
      <SidebarOption text="通知" Icon={NotificationsNoneIcon}/>
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon}/>
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon}/>
      <SidebarOption text="リスト" Icon={ListAltIcon}/>
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>
      <SidebarOption text="もっと見る" Icon={MoreHorizIcon}/>
      {/* sidebarOption */}
      {/* sidebarOption */}
      {/* sidebarOption */}
      {/* sidebarOption */}

      {/* twitter Button */}
    </div>
  )
}

export default Sidebar
