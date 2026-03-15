const ProjectItem = ({ project, isOpen, onToggle }) => {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-6 flex flex-col items-center mt-6 self-stretch">
                <div className={isOpen
                    ? "w-3 h-3 rounded-full bg-black"
                    : "w-3 h-3 rounded-full border-2 border-gray-400"}
                />

                <div className="border-l border-dashed border-gray-400 flex-1 mt-2">
                </div>

            </div>
            <div onClick={onToggle} className="cursor-pointer select-none flex-1 hover:bg-gray-50 transition-colors px-4 py-4 rounded-2xl">
                <div className="flex justify-between">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <span>{isOpen ? "-" : "+"}</span>
                </div>

                <p className="text-gray-700 mt-3">{project.summary}</p>

                <p className="text-sm text-gray-600 mt-2">{project.stack.join(" · ")}</p>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 underline mt-2 inline-block"
                    onClick={(e) => e.stopPropagation()}
                >
                    Github
                </a>

                {isOpen && (
                    <div className="mt-6 space-y-6">
                        {project.details.map((section, index) => (
                            <div key={index}>
                                <p className="font-medium">{section.title}</p>

                                <ul>
                                    {section.items.map((item, index) => (
                                        <li key={index} className="text-gray-700">• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectItem;