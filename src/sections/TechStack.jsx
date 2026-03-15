import Container from "../layout/Container.jsx";
import { techstack } from "../data/techstack.js";

const TechStack = () => {
    return (
        <section className="pt-0 pb-24">
            <Container>
            <h2 className="text-3xl font-semibold tracking-tight">
                Tech Stack
            </h2>

            <div className="space-y-5 mt-8">
                {
                    techstack.map(item => (
                        <div key={item.category}>
                            <div className="font-semibold text-sm text-gray-700 mb-1">{item.category}</div>
                            <div className="text-sm text-gray-600 font-mono">{item.technologies.join(" · ")}</div>
                        </div>
                    ))
                }
            </div>
            </Container>
        </section>
    );
}

export default TechStack;