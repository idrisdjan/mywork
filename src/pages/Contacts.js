const Contacts = () => {
    return (
			<main className='section'>
				<div className='container'>
					<h1 className='title-1'>Контакты</h1>

					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>Локация</h2>
							<p>Евпатория, Россия</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Telegram</h2>
							<p>
								<a href='tel:+79111111111'>+7 (911) 111-11-11</a>
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2'>Email</h2>
							<p>
								<a href='mailto:avanar.bz@gmail.com'>avanar.bz@gmail.com</a>
							</p>
						</li>
					</ul>
				</div>
			</main>
		)
}

export default Contacts;