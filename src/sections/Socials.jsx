import React from 'react'
import Container from "../layout/Container.jsx";

const Socials = () => {
    return (
        <section className="pt-0 pb-24">
            <Container>
                <h2 className="text-3xl font-semibold tracking-tight text-textPrimary">
                    Socials
                </h2>
                <p className="font-medium text-textBody mt-4 ml-2 font-mono">
                    <a
                        href="https://github.com/Flicko75"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >Github</a>
                    <span className="mx-2">·</span>

                    <a
                        href="https://www.linkedin.com/in/sayan90"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >LinkedIn</a>
                    <span className="mx-2">·</span>

                    <a
                        href="mailto:sarkarsayan749@gmail.com"
                        className="hover:text-black transition-colors"
                    >Email</a>
                </p>
            </Container>
        </section>
    )
}
export default Socials
