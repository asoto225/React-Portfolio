import Footer from "../components/footer";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import PortfolioNav from "../components/portfolioNav";

export default function Home() {
    return (
        <main>
            <PortfolioNav />
            <section id="home">
            <h1 className="nameTitle">Hi, my name is</h1>
            <h1 className="homeTitle">Abel Soto</h1>
            <h3 className="subTitle">Full Stack Developer</h3>
            {/* <p> I am passionate and dedicated full-stack developer who recently completed an 
                intensive coding bootcamp. My journey into the world of coding began with a 
                thirst for knowledge and a drive to turn ideas into functional, user-friendly 
                applications. </p>
                <p>During the bootcamp, I immersed myself in a wide array of technologies, gaining
                proficiency in both front-end and back-end development. From crafting engaging 
                user interfaces using HTML, CSS, and JavaScript to building robust server-side 
                applications with technologies like Node.js and Express, I continue to hone my skills 
                to create seamless and efficient digital experiences. </p>
                <p>I have a keen eye for detail and a commitment to writing clean, maintainable 
                code. I thrive in collaborative environments where creative problem-solving and 
                teamwork are valued. Throughout the bootcamp, I tackled real-world projects that
                provided me with hands-on experience in solving complex problems and delivering 
                solutions that meet both user needs and business goals. </p>
                <p>My toolbox includes a range of technologies, such as React for building dynamic 
                front-end interfaces, MongoDB for database management, and a host of other tools 
                that empower me to bring ideas to life. I'm always eager to stay on the cutting 
                edge of technology, keeping pace with industry trends and incorporating the latest 
                advancements into my work. </p>
                <p>Beyond coding, I bring effective communication skills and a proactive approach to 
                project management. I understand the importance of collaboration in achieving 
                successful outcomes,and I'm ready to contribute my skills to a dynamic and innovative 
                team.</p> */}
            <p>

                I'm a dedicated full-stack developer with a passion for turning ideas into user-friendly 
                applications. I recently completed an intensive coding bootcamp, gaining proficiency in 
                front-end (HTML, CSS, JavaScript) and back-end (Node.js, Express) development. I excel in 
                writing clean, maintainable code and thrive in collaborative, problem-solving environments. 
                My toolbox includes React, MongoDB, and other cutting-edge technologies. I bring effective 
                communication and project management skills, ready to contribute to a dynamic team.
            </p>
            </section>
            <br />
            <section id="projects">
                <h1>Projects</h1>
                <Projects />
            </section>
            <br />
            <section id="contact">
                <h1>Contact Me!</h1>
                <Contact />
            </section>
            <br />
            <section id="resume">
                <h1>Resume</h1>
                <Resume />
            </section>
            <Footer />
        </main>
    );
};