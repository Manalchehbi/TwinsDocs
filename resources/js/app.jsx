                                                         
import './bootstrap';
import ReactDOM from 'react-dom/client';      
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import "../css/index.css"
import Employes from './Components/Employes/Employes';
import Folder from './Components/Folders/Folders';
import Model from './Components/Folders/Model';
import Create from './Components/Employes/Create';
import Edit from './Components/Employes/Edit';
import Header from './Components/Header';
import Home from './Components/Home';
import Sidebare from './Components/sidebar';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <>
        <Header/>
       <div className="App">
            <Sidebare/>
             <Folder/>
             <Model/>
       </div>
       

      
    </>      
);
                                                            
                                                        