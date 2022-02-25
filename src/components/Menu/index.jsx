import React from "react";

const Menu = () => {
	return (
		<aside className='main-sidebar sidebar-dark-primary elevation-4'>
			<a href='#/' className='brand-link'>
				<img
					src='dist/img/AdminLTELogo.png'
					alt='AdminLTE Logo'
					className='brand-image img-circle elevation-3'
					style={{ opacity: ".8" }}
				/>
				<span className='brand-text font-weight-light'>
					AdminLTE 3 in react js
				</span>
			</a>
			<div className='sidebar'>
				<div className='user-panel mt-3 pb-3 mb-3 d-flex'>
					<div className='image'></div>
					<div className='info'>
						<a href='#/' className='d-block'>
							shubham prasad
						</a>
					</div>
				</div>
				<div className='form-inline'>
					<div className='input-group' data-widget='sidebar-search'>
						<input
							className='form-control form-control-sidebar'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<div className='input-group-append'>
							<button className='btn btn-sidebar'>
								<i className='fas fa-search fa-fw' />
							</button>
						</div>
					</div>
				</div>
				<nav className='mt-2'>
					<ul
						className='nav nav-pills nav-sidebar flex-column'
						data-widget='treeview'
						role='menu'
						data-accordion='false'>
						<li className='nav-item menu-open'>
							<a href='#/' className='nav-link active'>
								<i className='nav-icon fas fa-tachometer-alt' />
								<p>Dashboard</p>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-th' />
								<p>
									Widgets
									<span className='right badge badge-danger'>New</span>
								</p>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-copy' />
								<p>
									Layout Options
									<i className='fas fa-angle-left right' />
									<span className='badge badge-info right'>6</span>
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Top Navigation</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Top Navigation + Sidebar</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Boxed</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Fixed Sidebar</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>
											Fixed Sidebar <small>+ Custom Area</small>
										</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Fixed Navbar</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Fixed Footer</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Collapsed Sidebar</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-chart-pie' />
								<p>
									Charts
									<i className='right fas fa-angle-left' />
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>ChartJS</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-tree' />
								<p>
									UI Elements
									<i className='fas fa-angle-left right' />
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>General</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Icons</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Buttons</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Sliders</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Modals &amp; Alerts</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Navbar &amp; Tabs</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Timeline</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Ribbons</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-edit' />
								<p>
									Forms
									<i className='fas fa-angle-left right' />
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>General Elements</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Advanced Elements</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Editors</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Validation</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-table' />
								<p>
									Tables
									<i className='fas fa-angle-left right' />
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Simple Tables</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>DataTables</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='# ' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>jsGrid</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-header'>EXAMPLES</li>
						<li className='nav-item'>
							<a href='# ' className='nav-link'>
								<i className='nav-icon far fa-calendar-alt' />
								<p>
									Calendar
									<span className='badge badge-info right'>2</span>
								</p>
							</a>
						</li>
						<li className='nav-item'>
							<a href='# ' className='nav-link'>
								<i className='nav-icon far fa-image' />
								<p>Gallery</p>
							</a>
						</li>
						<li className='nav-item'>
							<a href='# ' className='nav-link'>
								<i className='nav-icon fas fa-columns' />
								<p>Kanban Board</p>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon far fa-envelope' />
								<p>
									Mailbox
									<i className='fas fa-angle-left right' />
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Inbox</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Compose</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Read</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-book' />
								<p>
									Pages
									<i className='fas fa-angle-left right' />
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Invoice</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon far fa-plus-square' />
								<p>
									Extras
									<i className='fas fa-angle-left right' />
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>
											Login &amp; Register v1
											<i className='fas fa-angle-left right' />
										</p>
									</a>
									<ul className='nav nav-treeview'>
										<li className='nav-item'>
											<a href='#/' className='nav-link'>
												<i className='far fa-circle nav-icon' />
												<p>Login v1</p>
											</a>
										</li>
									</ul>
								</li>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>
											Login &amp; Register v2
											<i className='fas fa-angle-left right' />
										</p>
									</a>
									<ul className='nav nav-treeview'>
										<li className='nav-item'>
											<a href='#/' className='nav-link'>
												<i className='far fa-circle nav-icon' />
												<p>Login v2</p>
											</a>
										</li>
									</ul>
								</li>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Lockscreen</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Legacy User Menu</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Language Menu</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-search' />
								<p>
									Search
									<i className='fas fa-angle-left right' />
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Simple Search</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-header'>MISCELLANEOUS</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-ellipsis-h' />
								<p>Tabbed IFrame Plugin</p>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-file' />
								<p>Documentation</p>
							</a>
						</li>
						<li className='nav-header'>MULTI LEVEL EXAMPLE</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='fas fa-circle nav-icon' />
								<p>Level 1</p>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon fas fa-circle' />
								<p>
									Level 1
									<i className='right fas fa-angle-left' />
								</p>
							</a>
							<ul className='nav nav-treeview'>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Level 2</p>
									</a>
								</li>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>
											Level 2
											<i className='right fas fa-angle-left' />
										</p>
									</a>
									<ul className='nav nav-treeview'>
										<li className='nav-item'>
											<a href='#/' className='nav-link'>
												<i className='far fa-dot-circle nav-icon' />
												<p>Level 3</p>
											</a>
										</li>
										<li className='nav-item'>
											<a href='#/' className='nav-link'>
												<i className='far fa-dot-circle nav-icon' />
												<p>Level 3</p>
											</a>
										</li>
										<li className='nav-item'>
											<a href='#/' className='nav-link'>
												<i className='far fa-dot-circle nav-icon' />
												<p>Level 3</p>
											</a>
										</li>
									</ul>
								</li>
								<li className='nav-item'>
									<a href='#/' className='nav-link'>
										<i className='far fa-circle nav-icon' />
										<p>Level 2</p>
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='fas fa-circle nav-icon' />
								<p>Level 1</p>
							</a>
						</li>
						<li className='nav-header'>LABELS</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon far fa-circle text-danger' />
								<p className='text'>Important</p>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon far fa-circle text-warning' />
								<p>Warning</p>
							</a>
						</li>
						<li className='nav-item'>
							<a href='#/' className='nav-link'>
								<i className='nav-icon far fa-circle text-info' />
								<p>Informational</p>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Menu;
