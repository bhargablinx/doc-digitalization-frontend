export default function Loading({ message = "Loading..." }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="text-center">
                <div className="relative mx-auto h-14 w-14">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
                    <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin" />
                </div>

                <h2 className="mt-6 text-lg md:text-xl font-semibold text-black">
                    {message}
                </h2>

                <div className="mt-2 flex justify-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-black animate-bounce" />
                    <span
                        className="h-2 w-2 rounded-full bg-black animate-bounce"
                        style={{ animationDelay: "150ms" }}
                    />
                    <span
                        className="h-2 w-2 rounded-full bg-black animate-bounce"
                        style={{ animationDelay: "300ms" }}
                    />
                </div>
            </div>
        </div>
    );
}
