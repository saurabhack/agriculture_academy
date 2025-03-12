import agriculter from "../assets/agry.jpg";

function Master() {
    return (
        <section className="flex flex-wrap md:flex-nowrap items-center gap-8 p-6 md:p-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2 rounded-lg md:rounded-br-full overflow-hidden shadow-lg">
                <img src={agriculter} alt="Agriculture" className="w-full h-full object-cover" />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                    For every student, every classroom. <br /> Real results.
                </h1>
                <p className="mt-4 text-gray-600 text-lg md:text-xl leading-relaxed">
                    We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
                </p>
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                    <button className="bg-blue-600 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-700 transition">
                        Get Started
                    </button>
                    <button className="border border-blue-600 text-blue-600 py-2 px-6 rounded-md text-lg hover:bg-blue-100 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Master;
