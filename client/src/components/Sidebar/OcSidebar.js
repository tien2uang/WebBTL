import React, { useContext, useState, useRef, useEffect } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import $ from "jquery";
// import { history } from "../_helpers";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faUserGraduate, faChalkboardTeacher, faBuilding, faBook, faFile, faHockeyPuck, faDollarSign, faClipboard, faCalendar, faTable, faShieldAlt, faBaseballBall, faBus, faColumns, faCode,  } from '@fortawesome/fontawesome-free-solid'
import { faSquarespace } from '@fortawesome/free-brands-svg-icons';


export function OcSidebar(){
    let [pathnames,setPathnames] = useState(window.location.pathname);
	const subDrop = useRef(false);

    useEffect(()=>{
        
		var Sidemenu = function() {
			this.$menuItem = $('#sidebar-menu a');
		};
        
		function init() {
			var $this = Sidemenu;
			$('#sidebar-menu a').on('click', function(e) {
				
				if($(this).parent().hasClass('submenu')) {
					e.preventDefault();
				}
				if(!$(this).hasClass('subdrop') ) {
					$('ul', $(this).parents('ul:first')).slideUp(350);
					$('a', $(this).parents('ul:first')).removeClass('subdrop');
					$(this).next('ul').slideDown(350);
					$(this).addClass('subdrop');
				} 
				else if($(this).hasClass('subdrop') ) {
					$(this).removeClass('subdrop');
					$(this).next('ul').slideUp(350);
				}
			});
			$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
		}

		$(document).on('mouseover', function(e) {
			e.stopPropagation();
			if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
				var targ = $(e.target).closest('.sidebar').length;
				if(targ) {
					$('body').addClass('expand-menu');
					$('.subdrop + ul').slideDown();
				} else {
					$('body').removeClass('expand-menu');
					$('.subdrop + ul').slideUp();
				}
				return false;
			}
		});
		// Sidebar Initiate
		init();
		
    },[]);

    return (
        <>
       
        <div className="sidebar" id="sidebar">
            
            <Scrollbars style={{ height: "100vh" }}>
                <div className="sidebar-inner">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="menu-title"> 
                                <span>Main Menu</span>
                            </li>
                            
                            <li className = {pathnames.includes('/home/opc/dashboard')||pathnames.includes('/home/opc/store-list')||pathnames.includes('/home/opc/factory-list') ||pathnames.includes('/home/opc/sc-list') ? 'active' : ''}> 
                                <a href="#">
                                    <FontAwesomeIcon icon={faThLarge} /> <span>Management</span> <span className="menu-arrow"></span>
                                </a>
                                <ul>
                                    <li className = {pathnames.includes('/home/opc/dashboard') ? 'active' : ''} onClick={()=> setPathnames("/home/opc/dashboard")}>
                                        <Link to ="/home/opc/dashboard">Productline List</Link>
                                    </li>
									<li className = {pathnames.includes('/home/opc/store-list') ? 'active' : ''} onClick={()=> setPathnames("/home/opc/store-list")}>
                                        <Link to ="/home/opc/store-list">Store List</Link>
                                    </li>
									<li className = {pathnames.includes('/home/opc/factory-list') ? 'active' : ''} onClick={()=> setPathnames("/home/opc/factory-list")}>
                                        <Link to ="/home/opc/factory-list">Factory List</Link>
                                    </li>
									<li className = {pathnames.includes('/home/opc/sc-list') ? 'active' : ''} onClick={()=> setPathnames("/home/opc/sc-list")}>
                                        <Link to ="/home/opc/sc-list">Service Center List</Link>
                                    </li>
                                    {/* <li className = {pathnames.includes('/react/teacher-dashboard') ? 'active' : ''}>
                                        <Link to ="/">Teacher Dashboard</Link>
                                    </li>
                                    <li className = {pathnames.includes('/react/student-dashboard') ? 'active' : ''}>
                                        <Link to ="/">Student Dashboard</Link>
                                    </li> */}
                                </ul>
                            </li>
                            
                            <li className = {`submenu ${pathnames.includes('/home/opc/account-list') ? 'active' : pathnames.includes('/home/opc/account-request') ? 'active' : pathnames.includes('/home/opc/add-account') ? 'active' :  ''}`}>								
									<a href="#">
										<FontAwesomeIcon icon={faUserGraduate} /> <span> Accounts</span> <span className="menu-arrow"></span>
									</a>
									<ul>
										<li className = {pathnames.includes('/home/opc/account-list') ? 'active' : ''} onClick={()=>setPathnames("/home/opc/account-list")}>
											<Link to = "/home/opc/account-list">Accounts List</Link>
										</li>
										<li className = {pathnames.includes('/home/opc/account-request') ? 'active' : ''} onClick={()=>setPathnames("/home/opc/account-request")}>
											<Link to = "/home/opc/account-request">Accounts Request</Link>
										</li>
										<li className = {pathnames.includes('/home/opc/add-account') ? 'active' : ''} onClick={()=>setPathnames("/home/opc/add-account")}>
											<Link to = "/home/opc/add-account">Add account</Link>
										</li>
										
									</ul>
							</li>
                            <li className = {`submenu ${pathnames.includes('/home/opc/factory-statistics') ? 'active' : pathnames.includes('/home/opc/status-statistics') ? 'active' : pathnames.includes('/home/opc/store-statistics') ? 'active' : pathnames.includes('/home/opc/service-statistics') ? 'active' :  ''}`}> 
                                <a href="#">
                                    <FontAwesomeIcon icon={faThLarge} /> <span>Statistics</span> <span className="menu-arrow"></span>
                                </a>
                                <ul>
                                    <li className = {pathnames.includes('/home/opc/factory-statistics') ? 'active' : ''}  onClick={()=>setPathnames("/home/opc/factory-statistics")}>
                                        <Link to ="/home/opc/factory-statistics">Factory Statistics</Link>
                                    </li>
									<li className = {pathnames.includes('/home/opc/status-statistics') ? 'active' : ''}  onClick={()=>setPathnames("/home/opc/status-statistics")}>
                                        <Link to ="/home/opc/status-statistics">Status Statistics</Link>
                                    </li>
									<li className = {pathnames.includes('/home/opc/store-statistics') ? 'active' : ''}  onClick={()=>setPathnames("/home/opc/store-statistics")}>
                                        <Link to ="/home/opc/store-statistics">Store Statistics</Link>
                                    </li>
									<li className = {pathnames.includes('/home/opc/service-statistics') ? 'active' : ''}  onClick={()=>setPathnames("/home/opc/service-statistics")}>
                                        <Link to ="/home/opc/service-statistics">Service Statistics</Link>
                                    </li>
                                    
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </Scrollbars>
        </div>
        </>
        
    )
}