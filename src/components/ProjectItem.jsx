const ProjectItem = ({ project, isOpen, onToggle }) => {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-6 flex flex-col items-center mt-6 self-stretch">
                <div className={isOpen
                    ? "w-3 h-3 rounded-full bg-textPrimary"
                    : "w-3 h-3 rounded-full border-2 border-borderSubtle"}
                />

                <div className="border-l border-dashed border-borderSubtle flex-1 mt-2">
                </div>

            </div>
            <div onClick={onToggle} className="cursor-pointer select-none flex-1 hover:bg-surfaceHover transition-colors px-4 py-4 rounded-2xl">
                <div className="flex justify-between text-textPrimary">
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                    <span>{isOpen ? "-" : "+"}</span>
                </div>

                <p className="text-textBody mt-3 text-lg">{project.summary}</p>

                <p className="text-base text-textBody mt-2 font-mono">{project.stack.join(" · ")}</p>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-textBody underline mt-2 inline-block font-mono"
                    onClick={(e) => e.stopPropagation()}
                >
                    Github
                </a>

                {isOpen && (
                    <div className="mt-6 space-y-6 text-lg">
                        {project.details.map((section, index) => (
                            <div key={index}>
                                <p className="font-medium mb-2 text-textPrimary">{section.title}</p>

                                <ul className="list-disc pl-5 space-y-2">
                                    {section.items.map((item, index) => (
                                        <li key={index} className="text-textBody">{item}</li>
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