import './header.css'

const Header = () => {
    return (
			<header className='header'>
				<div className='header__wrapper'>
					<h1 className='header__title'>
						<strong>
							Привет, меня зовут <em>Идрис</em>
						</strong>
						<br />я fullstack программист
					</h1>
					<div className='header__text'>
						<p>со страстью к обучению и творчеству.</p>
					</div>
					<a href='#!' className='btn'>
						Download CV
					</a>
				</div>
			</header>
		)
};

export default Header;