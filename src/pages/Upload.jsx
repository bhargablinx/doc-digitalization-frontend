import { useState } from "react";
import { UploadCloud, FileText, Image, X, BookText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Upload() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const removeFile = () => {
        setFile(null);
    };

    const handleUpload = () => {
        if (!file) return;

        // handling the upload and sending the id to the /upload/review/id
        console.log(file);

        navigate("/upload/review/1");
    };

    return (
        <div className="min-h-screen bg-white px-4 py-10">
            <div className="max-w-4xl mx-auto">
                {/* heading */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-black">
                        Upload Document
                    </h1>

                    <p className="mt-3 text-gray-600 text-sm md:text-base">
                        Upload PDFs, scanned documents, or images for data
                        extraction.
                    </p>
                </div>

                {/* Upload Card */}
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 md:p-10">
                    {!file ? (
                        <label
                            htmlFor="file-upload"
                            className="flex flex-col items-center justify-center cursor-pointer"
                        >
                            <UploadCloud size={60} className="text-gray-400" />

                            <h2 className="mt-4 text-xl font-semibold">
                                Drag & Drop Files
                            </h2>

                            <p className="mt-2 text-gray-500 text-center">
                                or click to browse your device
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                                PDF, JPG, JPEG, PNG
                            </p>

                            <input
                                id="file-upload"
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                    ) : (
                        <div className="space-y-4">
                            {/* File Preview */}
                            <div className="flex items-center justify-between border rounded-xl p-4">
                                <div className="flex items-center gap-4">
                                    {file.type.includes("pdf") ? (
                                        <FileText
                                            size={40}
                                            className="text-black"
                                        />
                                    ) : (
                                        <Image
                                            size={40}
                                            className="text-black"
                                        />
                                    )}

                                    <div>
                                        <h3 className="font-medium break-all">
                                            {file.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            {(
                                                file.size /
                                                (1024 * 1024)
                                            ).toFixed(2)}{" "}
                                            MB
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={removeFile}
                                    className="p-2 rounded-lg hover:bg-gray-100"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Image Preview */}
                            {file.type.startsWith("image/") && (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="preview"
                                    className="w-full max-h-96 object-contain border rounded-xl"
                                />
                            )}
                        </div>
                    )}
                </div>

                {/* Upload Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        disabled={!file}
                        onClick={handleUpload}
                        className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-xl font-medium hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                    >
                        Upload Document
                    </button>
                </div>

                {/* Supported Formats */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="border rounded-xl p-4 text-center">
                        <FileText className="mx-auto mb-2" />
                        <h3 className="font-medium">PDF Files</h3>
                    </div>

                    <div className="border rounded-xl p-4 text-center">
                        <Image className="mx-auto mb-2" />
                        <h3 className="font-medium">Scanned Images</h3>
                    </div>

                    <div className="border rounded-xl p-4 text-center">
                        <BookText className="mx-auto mb-2" />
                        <h3 className="font-medium">Handwritten Docs</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
