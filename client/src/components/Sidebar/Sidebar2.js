import React, { useContext, useState, useRef, useEffect } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import $ from "jquery";
// import { history } from "../_helpers";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faUserGraduate, faChalkboardTeacher, faBuilding, faBook, faFile, faHockeyPuck, faDollarSign, faClipboard, faCalendar, faTable, faShieldAlt, faBaseballBall, faBus, faColumns, faCode,  } from '@fortawesome/fontawesome-free-solid'
import { faSquarespace } from '@fortawesome/free-brands-svg-icons';
import {FactorySidebar} from './FactorySidebar';
import { ScSidebar } from "./ScSidebar";
import { OcSidebar } from "./OcSidebar";
import { StoreSidebar } from "./StoreSidebar";

export function Sidebar({r}){
    

    
    

    return (
        <>
       
        {console.log("role "+ r)}
		{r=="SeC" && <ScSidebar/>}
        {r=="Sto" && <StoreSidebar/>}
        {r=="OpC" && <OcSidebar/>}
        {r=="Fac" && <FactorySidebar/>}
        {/* <OcSidebar/> */}
        
        </>
        
    )
}