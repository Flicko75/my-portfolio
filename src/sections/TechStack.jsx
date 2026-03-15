import Container from "../layout/Container.jsx";
import { techstack } from "../data/techstack.js";

const TechStack = () => {
    return (
        <section className="pt-0 pb-24">
            <Container>
            <h2 className="text-3xl font-semibold tracking-tight text-textPrimary">
                Tech Stack
            </h2>

            <div className="space-y-5 mt-8 text-textBody ml-2">
                {
                    techstack.map(item => (
                        <div key={item.category}>
                            <div className="font-semibold text-xl mb-1">{item.category}</div>
                            <div className="text-lg font-mono">{item.technologies.join(" · ")}</div>
                        </div>
                    ))
                }
            </div>
            </Container>
        </section>
    );
}

export default TechStack;