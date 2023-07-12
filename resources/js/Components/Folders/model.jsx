import React from "react";
import "../../../css/folder.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import InfoIcon from '@mui/icons-material/Info';import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { AddPhotoAlternate, CreateNewFolder } from "@mui/icons-material";
import styled from "@emotion/styled";
function Model(){                                                                
    return <Container>
                 <Wrapper>
                    <Header>
                        <Wraps>
                            <CreateNewFolder/>
                            <span>Dossier</span>
                        </Wraps>
                    </Header>
                        <Wraps>
                            <AddPhotoAlternate/>
                            <span>Photo</span>
                        </Wraps>
                 </Wrapper>
           </Container>
}
export default Model;  
const Container = styled.div ` 
position: fixed;
top : 100px;
left: 20px;
background-color : white;
height : 200px;
width : 300px;
border-radius: 20px;
box-shadow : 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 /0.1);

` ; 
const Wrapper = styled.div `
display: flex;
flex-direction: column;
` ;  
const Header = styled.div `
padding-bottom: 10px;
border-bottom:1px solid rgba(0,0,0,0.2);
margin: 5px 0;
` ;  
const Wraps = styled.div ` 
display : flex;
align-items:center;
padding: 5px 0;
cursor: pointer;
padding-left: 20px;
margin-top: 10px;
transition: all 200ms ease-out;
&:hover{
    background-color: rgba(0,0,0,0.2);
}
svg{
    color: rgba(0,0,0,0.5);
}
span{
    margin-left: 10px;
}
` ;                                                                                                                                                    
        