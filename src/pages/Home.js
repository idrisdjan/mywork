import Header from "../components/header/Header";

const Home = () => {
    return (
			<>
				<Header />

				<main className='section'>
					<div className='container'>
						<ul className='content-list'>
							<li className='content-list__item'>
								<h2 className='title-2'>Frontend</h2>
								<p>
									Javascript, TypeScript, ReactJS, Redux, HTML, CSS, NPM,
									BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
								</p>
							</li>
							<li className='content-list__item'>
								<h2 className='title-2'>Backend</h2>
								<p>NodeJS, PostgreSQL, Python, MongoDB</p>
							</li>
						</ul>
					</div>
				</main>
				<script src='./js/main.js'></script>
			</>
		)
}

export default Home;