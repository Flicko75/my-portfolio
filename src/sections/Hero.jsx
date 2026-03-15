import Container from "../layout/Container.jsx";

const Hero = () => {
    return (
        <section className="py-24">
            <Container>
                <div className="space-y-3">
                    <h1 className="text-5xl font-bold tracking-tight text-textPrimary">Sayan Sarkar</h1>

                    <div className="max-w-2xl">
                        <p className="mt-3 text-lg text-textBody">
                            Backend-focused developer building scalable systems and developer tools.
                        </p>

                        <p className="mt-2 text-textBody">
                            Based in India.
                        </p>
                    </div>
                </div>

                <a
                    href="/resume.pdf"
                    download
                    className="inline-block px-6 py-2.5 bg-textPrimary text-white hover:bg-textBody transition-colors mt-10"
                >
                    Download Resume
                </a>
            </Container>
        </section>
    );
}
export default Hero;
