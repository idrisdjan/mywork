import './footer.css'
import vk from './../../img/icons/vk.svg'
import instagram from './../../img/icons/instagram.svg'
import gitHub from './../../img/icons/gitHub.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a href='#!'>
								<img src={vk} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#!'>
								<img src={instagram} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='#!'>
								<img src={gitHub} alt='Link' />
							</a>
						</li>
					</ul>
					<div className='copyright'>
						<p>
							© 2022 <a href='https://codeid.ru'>codeid.ru</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
