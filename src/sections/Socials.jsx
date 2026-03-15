import React from 'react'
import Container from "../layout/Container.jsx";

const Socials = () => {
    return (
        <section className="pt-0 pb-24">
            <Container>
                <h2 className="text-3xl font-semibold tracking-tight">
                    Socials
                </h2>
                <p className="font-medium text-gray-600 mt-4">
                    <a
                        href="github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >Github</a>
                    <span className="mx-2">·</span>

                    <a
                        href="linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors"
                    >LinkedIn</a>
                    <span className="mx-2">·</span>

                    <a
                        href="mailto:email@com"
                        className="hover:text-black transition-colors"
                    >Email</a>
                </p>
            </Container>
        </section>
    )
}
export default Socials
