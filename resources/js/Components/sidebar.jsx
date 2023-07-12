
import React, { useState } from "react";
import "../../css/sidebare.css"
import Folder from './../Components/Folders/MenuChoix';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
function Sidebare(){   
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleAjouterClick = () => {
      setDialogOpen(true);
    };
  
    const handleDialogClose = () => {
      setDialogOpen(false);
    };                                                 
    return(
          <div class="sidebare">
                 <div className="sidebare_btn">
                 <button onClick={handleAjouterClick}>
          <img src="https://cdn.icon-icons.com/icons2/834/PNG/512/plus_icon-icons.com_66718.png" width={30} alt="" />
          <span>Ajouter</span>
        </button>
                  
                </div>
                <div class="header_icons-left">
                <div className="sidebare_options">
                    <div className="sidebare_option sidebare_option-Active">
                        <MobileScreenShareIcon/>
                        <span>Mon espace</span>
                    </div>
                    <div className="sidebare_option">
                        <DevicesIcon/>
                        <span>Ordinateur</span>
                    </div>
                    <div className="sidebare_option">
                        <PeopleAltIcon/>
                        <span>Partagés avec moi</span>
                    </div>
                    <div className="sidebare_option">
                        <QueryBuilderIcon/>
                        <span>Récents</span>
                    </div>
                    <div className="sidebare_option">
                        <StarBorderIcon/>
                        <span>Suivi</span>
                    </div>
                    <div className="sidebare_option">
                        <DeleteOutlineIcon/>
                        <span>Corbeille</span>
                    </div>
                </div>
                    <hr/>
                <div className="sidebare_options">
                    <div className="sidebare_option">
                        <CloudQueueIcon/>
                        <span>Espace de stockage</span>
                    </div>
                    <div className="progress_bar">
                        <progress size="tiny" value="50" max="100" />
                        <span>6.45 GB de 15 GB utilisé</span>
                    </div>
                 </div>
                 </div>
                 {isDialogOpen && (
        <div className="dialog-box menu-choix">
          <ul>
            <li>Télécharger un fichier</li>
            <li>Créer un dossier</li>
            <li>Ajouter un fichier existant</li>
          </ul>
          <button onClick={handleDialogClose}>Fermer</button>
        </div>
      )}

            </div>
              
          )
                                                                                                                    
                                                                                                                                                
}         
export default Sidebare                                                                                                                                                     
        