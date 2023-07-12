import React from "react";
import "../../css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import { Avatar } from "@mui/material";
export default function Header(){
    return(
          <div class="header">
             <div class="header_logo">
                <img src="https://logo-marque.com/wp-content/uploads/2020/12/Google-Drive-Logo.png" alt="logo drive" />
                <span>TwinDocs</span>
             </div>
             <div class="header_search">
                <SearchIcon/>
                <input type="text " placeholder="Chercher dans votre espace"></input>
                <FormatAlignCenterIcon/>
             </div>
             <div class="header_icons">
                <span>
                  <HelpOutlineIcon/>
                  <SettingsIcon/>
                </span>
                <span>
                  <AppsIcon/>
                  <Avatar/>
                </span>
              
              
             </div>
          </div>
          )

}
