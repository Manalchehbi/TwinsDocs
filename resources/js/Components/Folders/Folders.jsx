import React from "react";
import "../../../css/folder.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import InfoIcon from '@mui/icons-material/Info';import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function Folder(){                                                                
    return(
          <div className="folder">
               <div className="folder_header">
                    <div className="folder_headerLeft">
                       <p>Mon Dspace</p>
                       <ArrowDropDownIcon/>
                    </div>
                    <div className="folder_headerRight">
                       
                       <FilterListIcon/>
                       <InfoIcon/>
                    </div>
               </div>
               <div className="data_content">
                  <div className="data_grid">
                     <div className="data_file">
                        <InsertDriveFileIcon/>
                        <p>Nom_fichier.txt</p>
                     </div>

                     <div className="data_file">
                        <InsertDriveFileIcon/>
                        <p>Nom_fichier.txt</p>
                     </div>
                     <div className="data_file">
                        <InsertDriveFileIcon/>
                        <p>Nom_fichier.txt</p>
                     </div>
                     <div className="data_file">
                        <InsertDriveFileIcon/>
                        <p>Nom_fichier.txt</p>
                     </div>
                  </div>
                  <div className="data_list">
                     <div className="detailsRow">
                        <p><b>Name<ArrowDownwardIcon/></b></p>
                        <p><b>Propriétaire</b></p>
                        <p><b>Dernière modification</b></p>
                        <p><b>Taille</b></p>
                     </div>
                     <div className="detailsRow">
                        <p>Name<InsertDriveFileIcon/></p>
                        <p>Moi</p>
                        <p> Hière</p>
                        <p>100 Mo</p>
                     </div>
                  </div>
               </div>
              
           </div>
              
          )
                                                                                                                    
                                                                                                                                                
}         
export default Folder                                                                                                                                                     
        