import { Link } from "react-router";

export function Home() {
    return (
        <section>
            <h1>Sean Kee | Pursuing a Career in Software Development</h1>
            <p>
                I am a 4th year student at Saint Louis University pursuing a
                Bachelor of Science in Computer Science with a minor in Mathematics,
                with an expected graduation of May 2027. My interests include
                software engineering, accessible applications, and exploring the limits of AI.
            </p>
            <p>
                My experience at Ameren, The CHROME Lab, and The Saint Louis Lambert
                International Airport has involved building business applications,
                automating tasks with Python, and contributing to accessible
                touchscreen research. Project work includes modeling landslide
                trends with machine learning, developing Android tools for blind
                and low-vision learners, and improving the Where's Religion?
                website through open-source contributions. These projects bring
                together an interest in problem-solving with opportunities to
                build useful software and learn from working with others.
            </p>
            <Link to="/projects">Explore my projects</Link>
        </section>
    );
}
export function Experience() {
    return (
        <section>
            <h1>Experience</h1>
            <h2>Education</h2>
            <p>Currently a senior at Saint Louis University with an expected graduation of May 2027.</p>
            <p>
                Pursuing a Bachelor of Science in Computer Science with a minor in Mathematics.
            </p>

            <h2>Technical Skills</h2>
            <ul>
                <li>Python and data analysis with Pandas, NumPy, and Matplotlib</li>
                <li>Java and Android development with Android Studio</li>
                <li>Full Stack development with C# and .NET</li>
                <li>SQL and MySQL</li>
            </ul>

            <h2>Work Experience</h2>
            <article>
                <h3>Software Engineering Co-op — Ameren</h3>
                <p>January 2026 – August 2026</p>
                <p>
                    Developed a full-stack .NET application with a Blazor frontend
                    and an Entity Framework Core backend to centralize a business
                    workflow. Also wrote Python scripts to update nearly 3,000
                    ArcGIS Online records and created server diagrams to support
                    developer onboarding.
                </p>
            </article>

            <article>
                <h3>Undergraduate Researcher — CHROME Lab</h3>
                <p>January 2025 – December 2025</p>
                <p>
                    Contributed to research on haptic feedback and touchscreen
                    accessibility for blind and low-vision users. Developed data
                    collection pipelines to study interaction patterns and helped
                    build Android applications with haptic and text-to-speech
                    feedback for accessible STEM learning.
                </p>
            </article>

            <article>
                <h3>Information Technology Intern — Saint Louis Lambert International Airport</h3>
                <p>June 2024 – August 2024</p>
                <p>
                    Wrote a Python utility to automate file date updates across a
                    shared network drive. Also worked with routing hardware and
                    used PowerShell to monitor network switches across the airport.
                </p>
            </article>
        </section>
    );
}
export function Contact() {
    return (
        <section>
            <h1>Contact</h1>
            <ul>
                <li>Email: <a href="mailto:seankee8@gmail.com">seankee8@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/sean-kee-05032a177/">LinkedIn</a></li>
                <li><a href="https://github.com/keeini">GitHub</a></li>
                <li>
                    <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Sean-Kee-Resume.pdf">
                        Download resume (PDF)
                    </a>
                </li>
            </ul>
        </section>
    );
}
export function NotFound() {
    return <section><h1>Page not found</h1>
        <Link to="/">Return home</Link></section>;
}
