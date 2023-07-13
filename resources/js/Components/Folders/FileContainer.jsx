
import { Folder } from "@mui/icons-material";

import styled from "@emotion/styled";

function FileContainer(title,id){     
 
                                                   
    return (
            <Container>
                <Folder/>
                <span>FileContainer</span>
            </Container>
    )
            
       
}
export default FileContainer;  
const Container = styled.div ` 
height : 48px;
width : 287.5px;
display: flex;
align-items:center;
border: 1px solid rgba(0,0,0,0.35);
border-radius: 4px;

svg{
    height : 24px;
    width : 24px;
    color: rgba(95,99,104);
    margin-left: 4px;
}
span{
    font-size: 13px;
    margin-left: 10px;

}
` ;                                                                                                                                                    
        