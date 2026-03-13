import Container from "../layout/Container.jsx";

const Hero = () => {
    return (
        <section className="py-24">
            <Container>
                <div className="space-y-3">
                    <h1 className="text-5xl font-bold tracking-tight">Sayan Sarkar</h1>

                    <div className="max-w-xl">
                        <p className="mt-3 text-lg text-gray-700">
                            Backend-focused developer building scalable systems and developer tools.
                        </p>

                        <p className="mt-2 text-gray-600">
                            Based in India.
                        </p>
                    </div>
                </div>

                <button className="mt-6 border px-4 py-2 text-sm hover:bg-gray-100 transition-colors">
                    Download Resume
                </button>
            </Container>
        </section>
    );
}
export default Hero;
