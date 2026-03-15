import Container from "../layout/Container.jsx";
import {projects} from "../data/projects.js";
import {useState} from "react";
import ProjectItem from "../components/ProjectItem.jsx";

const Projects = () => {
    const [activeProjectId, setActiveProjectId] = useState(null);

    const toggleProject = (projectId) => {
        if (activeProjectId === projectId)
            setActiveProjectId(null);
        else
            setActiveProjectId(projectId);
    }

    return (
        <section className="pt-0 pb-24">
            <Container>
                <h2 className="text-3xl font-semibold tracking-tight">
                    Projects
                </h2>

                <div className="space-y-5 mt-8">
                    {
                        projects.map((project, index) => {
                            const isOpen = activeProjectId === project.id;

                            return (
                                <div key={project.id}>
                                    <ProjectItem
                                        key={project.id}
                                        project = {project}
                                        isOpen = {isOpen}
                                        onToggle = {() => toggleProject(project.id)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    );
}
export default Projects;