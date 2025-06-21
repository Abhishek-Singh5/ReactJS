import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://cdn.thenewstack.io/media/2022/05/600b72f9-react.png"
                            alt="image"
                            className=" h-auto rounded-lg"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-orange-700 leading-tight tracking-tight mb-6">
                            React Development is Driven by Passionate Developers
                            </h2>

                        <p className="mt-6 text-gray-600 texl-3xl">
                            React development is driven by a global community of passionate developers focused on 
                            building fast, modern, and dynamic user interfaces. Its component-based structure and 
                            strong ecosystem make it a top choice for scalable applications. Continuous contributions 
                            from the community ensure React stays powerful, efficient, and developer-friendly.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Whether you're just starting out or already experienced, React offers a 
                            consistent and evolving environment for learning and innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}