
import "../../../css/folder.css"
import styled from "@emotion/styled";

import React, { useEffect, useRef } from "react";
import FileContainer from './FileContainer';
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
                  <Margin>
                  <SemiTitle>
                           Dossiers
                        </SemiTitle>
                     <GridContainer>
                        <FileContainer />
                     </GridContainer>

                  </Margin>

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
export default Folder;
const SemiTitle = styled.div `
font-size: 14px;
font-weight:500;
text-transform: capitalize;
color: #5f6368;

`    
 
const GridContainer = styled.div `
padding-left: 20px;
   display: grid;
   grid-template-columns: repeat(3,minmax(0,1fr));
   margin: 20px 0;
   cursor:pointer;
`   
const Margin = styled.div  ``                                                                                                                                                 
        