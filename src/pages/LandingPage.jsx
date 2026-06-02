import { NavLink } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="bg-white text-black min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="py-16 md:py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block border border-gray-300 rounded-full px-4 py-2 text-sm mb-6">
                            AI Powered Document Processing
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                            Process Utility
                            <br />
                            Documents
                            <br />
                            In Seconds
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
                            Upload any customer document, let AI extract the
                            required information, verify it instantly, and
                            submit with confidence.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <NavLink
                                to={"/register"}
                                className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition"
                            >
                                Get Started
                            </NavLink>

                            <button className="w-full sm:w-auto border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Product Preview */}
                    <div className="border border-gray-200 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm">
                        <div className="border rounded-2xl p-4 sm:p-5">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-sm sm:text-base">
                                    Upload Document
                                </h3>

                                <span className="text-xs sm:text-sm bg-gray-100 px-3 py-1 rounded-full">
                                    Processed
                                </span>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div className="border rounded-xl p-3">
                                    Aadhaar.pdf
                                </div>

                                <div className="border rounded-xl p-4">
                                    <p className="text-gray-500 text-sm">
                                        Consumer Name
                                    </p>
                                    <p className="font-medium">Rahul Sharma</p>
                                </div>

                                <div className="border rounded-xl p-4">
                                    <p className="text-gray-500 text-sm">
                                        Mobile Number
                                    </p>
                                    <p className="font-medium">9876543210</p>
                                </div>

                                <div className="border rounded-xl p-4">
                                    <p className="text-gray-500 text-sm">
                                        Address
                                    </p>
                                    <p className="font-medium">
                                        Guwahati, Assam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section
                id="process"
                className="py-16 md:py-24 border-t border-gray-200"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
                        From Upload To Approval
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        <div className="border rounded-3xl p-6 md:p-8">
                            <span className="text-gray-500">01</span>

                            <h3 className="text-xl md:text-2xl font-semibold mt-4">
                                Upload
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Upload any PDF, image, or scanned document.
                            </p>
                        </div>

                        <div className="border rounded-3xl p-6 md:p-8">
                            <span className="text-gray-500">02</span>

                            <h3 className="text-xl md:text-2xl font-semibold mt-4">
                                AI Extraction
                            </h3>

                            <p className="text-gray-600 mt-3">
                                AI automatically extracts important fields.
                            </p>
                        </div>

                        <div className="border rounded-3xl p-6 md:p-8">
                            <span className="text-gray-500">03</span>

                            <h3 className="text-xl md:text-2xl font-semibold mt-4">
                                Review & Submit
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Verify extracted data before submission.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section
                id="features"
                className="py-16 md:py-24 border-t border-gray-200"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">
                        Built For Accuracy
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <FeatureCard
                            title="AI Data Extraction"
                            description="Extract names, addresses, IDs, and utility information automatically."
                        />

                        <FeatureCard
                            title="Human Verification"
                            description="Review every field before submission."
                        />

                        <FeatureCard
                            title="Secure Storage"
                            description="Store uploaded documents safely with complete traceability."
                        />

                        <FeatureCard
                            title="Admin Dashboard"
                            description="Track document status, approvals, and processing metrics."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-32 bg-black text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Automate
                        <br />
                        Document Processing
                    </h2>

                    <p className="mt-6 text-gray-300 text-sm sm:text-base">
                        Reduce manual work and improve efficiency with AI.
                    </p>
                    <NavLink to={"/register"}>
                        <button className="mt-8 w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition">
                            Get Started
                        </button>
                    </NavLink>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ title, description }) {
    return (
        <div className="border border-gray-200 rounded-3xl p-6 md:p-8 hover:shadow-sm transition">
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>

            <p className="text-gray-600 mt-4">{description}</p>
        </div>
    );
}
