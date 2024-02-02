import './App.css';

function App() {
  return (
		<div className='App'>
			<header className='header'>
				<div className='container'>
					<div className='header__inner'>
						<a href='#' className='logo'>
							<img src='images/logo.svg' alt='TealuxE' />
						</a>
						<nav className='menu'>
							<ul className='menu__list'>
								<li className='menu__item'>
									<a href='#' className='menu__link'>
										Black
									</a>
								</li>
								<li className='menu__item'>
									<a href='#' className='menu__link'>
										Green
									</a>
								</li>
								<li className='menu__item'>
									<a href='#' className='menu__link'>
										White
									</a>
								</li>
								<li className='menu__item'>
									<a href='#' className='menu__link'>
										Oolong
									</a>
								</li>
								<li className='menu__item'>
									<a href='#' className='menu__link'>
										Pu-erh
									</a>
								</li>
							</ul>
						</nav>
						<ul className='user-actions'>
							<li className='user-actions__item'>
								<a href='#' className='user-actions__link'>
									<img src='images/cart.svg' alt='' />
								</a>
							</li>
							<li className='user-actions__item'>
								<a href='#' className='user-actions__link'>
									<img src='images/user.svg' alt='' />
								</a>
							</li>
							{/* <li className="user-actions__item"><search><form action=""><input type="search" /><button type='submit'></button></form></search></li> */}
							<li className='user-actions__item user-actions__item-search'>
								<a href='#' className='user-actions__link'>
									<img src='images/search.svg' alt='' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</div>
	)
}

export default App;
