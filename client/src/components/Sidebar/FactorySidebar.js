import React, { useContext, useState, useRef, useEffect } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import $ from "jquery";
// import { history } from "../_helpers";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faUserGraduate, faChalkboardTeacher, faBuilding, faBook, faFile, faHockeyPuck, faDollarSign, faClipboard, faCalendar, faTable, faShieldAlt, faBaseballBall, faBus, faColumns, faCode,  } from '@fortawesome/fontawesome-free-solid'
import { faSquarespace } from '@fortawesome/free-brands-svg-icons';


export function FactorySidebar(){
    let [pathnames,setPathnames] = useState(window.location.pathname);
	const subDrop = useRef(false);

    useEffect(()=>{
        
        var Sidemenu = function() {
			this.$menuItem = $('#sidebar-menu a');
		};
        
		function init() {
			var $this = Sidemenu;
			$('#sidebar-menu a').on('click', function(e) {
                console.log("render")
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
                            
                            <li className = {pathnames.includes('/home/fac/import-product') || pathnames.includes('/home/fac/export-product')   ? 'active' : ''}> 
                                <a href="#">
                                    <FontAwesomeIcon icon={faThLarge} /> <span>Product Management</span> <span className="menu-arrow"></span>
                                </a>
                                <ul>
                                    <li className = {pathnames.includes('/home/fac/import-product') ? 'active' : ''} onClick={()=>setPathnames("/home/fac/import-product") }>
                                        <Link to ="/home/fac/import-product">Import</Link>
                                    </li>
                                    <li className = {pathnames.includes('/home/fac/export-product') ? 'active' : '' } onClick={()=>setPathnames("/home/fac/export-product") }>
                                        <Link to ="/home/fac/export-product">Export</Link>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li className = {`submenu ${pathnames.includes('/home/fac/transaction-list') ? 'active' : ''}`} > 
                                <a href="#">
                                    <FontAwesomeIcon icon={faThLarge} /> <span>Transaction history</span> <span className="menu-arrow"></span>
                                </a>
                                <ul>
                                    <li className = {pathnames.includes('/home/fac/transaction-list') ? 'active' : ''} onClick= {()=> setPathnames("/home/fac/transaction-list")}>
                                        <Link to ="/home/fac/transaction-list">Transaction List</Link>
                                    </li>
                                    
                                    
                                </ul>
                            </li>
                            
                            <li className = {`submenu ${pathnames.includes('/home/fac/statistics-list') ? 'active' : ''}`}>								
									<a href="#">
										<FontAwesomeIcon icon={faUserGraduate} /> <span> Statistics</span> <span className="menu-arrow"></span>
									</a>
									<ul>
										<li className = {pathnames.includes('/home/fac/statistics-list') ? 'active' : ''} onClick= {()=> setPathnames("/home/fac/statistics-list")}>
											<Link to = "/home/fac/statistics-list"> List</Link>
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