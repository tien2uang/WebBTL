import React from 'react';
import {Dropdown} from 'react-bootstrap';
import $ from "jquery";

// Import Images
import Logo from '../assets/img/logo.png';
import LogoSmall from '../assets/img/logo-small.png';
import avatar1 from '../assets/img/img-01.jpg';
import avatar2 from '../assets/img/img-01.jpg';
import avatar3 from '../assets/img/img-01.jpg';
import avatar4 from '../assets/img/img-01.jpg';
import avatar5 from '../assets/img/img-01.jpg';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faBell, faSearch } from '@fortawesome/fontawesome-free-solid'


class Header extends React.Component {

    handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }

	componentDidMount() {
		// Mobile menu sidebar overlay
	
		var $wrapper = $('.main-wrapper');
		
		$('body').append('<div class="sidebar-overlay"></div>');
		$(document).on('click', '#mobile_btn', function() {
			$wrapper.toggleClass('slide-nav');
			$('.sidebar-overlay').toggleClass('opened');
			$('html').addClass('menu-opened');
			return false;
		});
		
		// Sidebar overlay
		
		$(".sidebar-overlay").on("click", function () {
			$wrapper.removeClass('slide-nav');
			$(".sidebar-overlay").removeClass("opened");
			$('html').removeClass('menu-opened');
		});
	}
    
    render() {
		const exclusionArray = [
			'/',
			'/register',
			'/forgot-password',
			'/error'
		]
		// if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
		// 	return '';
		// }
        return (
            <div className="header">

                {/* Logo */}
                <div className="header-left">
                    <a href="" to="index.html" className="logo">
                        <img src={Logo} alt="Logo" />
					</a>
					<a href="" className="logo logo-small">
                        <img src={LogoSmall} alt="Logo" />
					</a>
                </div>
                {/* /Logo */}

                <a id="toggle_btn" onClick={this.handlesidebar}>
					<FontAwesomeIcon icon={faAlignLeft} />
				</a>

                {/* Search Bar */}
                <div className="top-nav-search">
                    <form>
                        <input type="text" className="form-control" placeholder="Search here" />
                        <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                </div>
                {/* /Search Bar */}

				<a className="mobile_btn" id="mobile_btn">
					<i className="fas fa-bars"></i>
				</a>

                <ul className="nav user-menu">

					{/* Notifications */}
					<li>
						<Dropdown>
							<Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle nav-link">
								<FontAwesomeIcon icon={faBell} /> <span className="badge badge-pill">3</span>
							</Dropdown.Toggle>

							<Dropdown.Menu className="notifications">
								<div className="topnav-dropdown-header">
									<span className="notification-title">Notifications</span>
									<a href="javascript:void(0)" className="clear-noti"> Clear All </a>
								</div>

								<div className="noti-content">
									<ul className="notification-list">
										<li className="notification-message">
											<a href="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img className="avatar-img rounded-circle" alt="User Image" src={avatar1} />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">Carlson Tech</span> has approved <span className="noti-title">your estimate</span></p>
														<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img className="avatar-img rounded-circle" alt="User Image" src={avatar2} />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">International Software Inc</span> has sent you a invoice in the amount of <span className="noti-title">$218</span></p>
														<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img className="avatar-img rounded-circle" alt="User Image" src={avatar3} />
													</span>
													<div className="media-body">
													<p className="noti-details"><span className="noti-title">John Hendry</span> sent a cancellation request <span className="noti-title">Apple iPhone XR</span></p>
													<p className="noti-time"><span className="notification-time">8 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
										<li className="notification-message">
											<a href="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img className="avatar-img rounded-circle" alt="User Image" src={avatar4} />
													</span>
													<div className="media-body">
														<p className="noti-details"><span className="noti-title">Mercury Software Inc</span> added a new product <span className="noti-title">Apple MacBook Pro</span></p>
														<p className="noti-time"><span className="notification-time">12 mins ago</span></p>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
								<div className="topnav-dropdown-footer">
									<a href="#">View all Notifications</a>
								</div>
							</Dropdown.Menu>
						</Dropdown>
					</li>
					{/* /Notifications */}

					{/* User Menu */}
					<li className="nav-item dropdown has-arrow">
						<Dropdown>
							<Dropdown.Toggle id="dropdown-basic" className="dropdown-toggle nav-link">
							<span className="user-img"><img className="rounded-circle" src={avatar5} width="31" alt="Ryan Taylor" /></span>
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<div className="user-header">
									<div className="avatar avatar-sm">
										<img src={avatar5} alt="User Image" className="avatar-img rounded-circle" />
									</div>
									<div className="user-text">
										<h6>Ryan Taylor</h6>
										<p className="text-muted mb-0">Administrator</p>
									</div>
								</div>
								<Dropdown.Item href="/react/profile">My Profile</Dropdown.Item>
								<Dropdown.Item href="/react/inbox">Inbox</Dropdown.Item>
								<Dropdown.Item href="/react/">Logout</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
					{/* /User Menu */}
                </ul>
            </div>
        )
    }
}

export { Header };