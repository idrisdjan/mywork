import project01 from './../img/projects/01.jpg'
import project02 from './../img/projects/02.jpg'
import project03 from './../img/projects/03.jpg'
import project04 from './../img/projects/04.jpg'
import project05 from './../img/projects/05.jpg'
import project06 from './../img/projects/06.jpg'

const Projects = () => {
    return (<main className="section">
        <div className="container">
            <h2 className="title-1">Проекты</h2>
            <ul className="projects">
                <li className="project">
                    <a href="./project-page.html">
                        <img src={project01} alt="Project img" className="project__img" />
                        <h3 className="project__title">Стриминговый геймерский портал</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src={project02} alt="Project img" className="project__img" />
                        <h3 className="project__title">Видео сервис</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src={project03} alt="Project img" className="project__img" />
                        <h3 className="project__title">Видео портал</h3>
                    </a>
                </li>

                <li className="project">
                    <img src={project04} alt="Project img" className="project__img" />
                    <h3 className="project__title">Приложение данных</h3>
                </li>
                <li className="project">
                    <img src={project05} alt="Project img" className="project__img" />
                    <h3 className="project__title">Площадка</h3>
                </li>
                <li className="project">
                    <img src={project06} alt="Project img" className="project__img" />
                    <h3 className="project__title">Геймерское сообщество</h3>
                </li>

            </ul>
        </div>
    </main>);
}

export default Projects;