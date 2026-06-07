import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Preview from "../components/Preview";
import { useNavigate, Navigate } from "react-router-dom";
import {
    startExtraction,
    clearDocument,
    setDocData,
    extractionFailed,
    stopsExtraction,
} from "../features/documentSlice";
import axios from "axios";

export default function DocumentReview() {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { document, docData, extracting, error } = useSelector(
        (state) => state.document,
    );

    const extractDocument = async () => {
        try {
            dispatch(startExtraction());

            const formData = new FormData();
            formData.append("file", document);

            const response = await axios.post(
                "http://127.0.0.1:8000/extract",
                formData,
            );

            const extractedData = response.data.data;

            console.log(extractedData);
            dispatch(setDocData(extractedData));
            setFormData(extractedData);
        } catch (error) {
            console.log(error.response?.data);
            dispatch(extractionFailed(error.message));
        } finally {
            dispatch(stopsExtraction());
        }
    };

    const handleChange = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSave = () => {
        console.log("Saved:", formData);
    };

    const handleCancel = () => {
        console.log("Operation Cancelled");
        // clean up upload and cancel and navigate to
        dispatch(clearDocument());
        navigate("/");
    };

    useEffect(() => {
        extractDocument();
    }, []);

    if (!document) {
        return <Navigate to="/upload" replace />;
    }

    if (extracting) {
        return <Loading message="Extracting information..." />;
    }

    if (!docData) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">
                        Document Verification
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Review AI extracted information and make corrections if
                        necessary.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Preview */}
                    <div className="bg-white rounded-2xl shadow-sm border p-4">
                        <h2 className="text-lg font-semibold mb-4">
                            Uploaded Document
                        </h2>

                        <Preview file={document} />
                    </div>

                    {/* Extracted Data */}
                    <div className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col">
                        <h2 className="text-lg font-semibold mb-6">
                            Extracted Information
                        </h2>

                        {/* hardcode 4 now but will make it dynamic later */}
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Consumer Name
                                </label>

                                <input
                                    type="text"
                                    value={formData.consumer_name}
                                    onChange={(e) =>
                                        handleChange(
                                            "consumer_name",
                                            e.target.value,
                                        )
                                    }
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Consumer No
                                </label>

                                <input
                                    type="text"
                                    value={formData.consumer_no}
                                    onChange={(e) =>
                                        handleChange(
                                            "consumer_no",
                                            e.target.value,
                                        )
                                    }
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Address
                                </label>

                                <textarea
                                    rows={3}
                                    value={formData.address}
                                    onChange={(e) =>
                                        handleChange("address", e.target.value)
                                    }
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Mobile
                                </label>

                                <input
                                    type="text"
                                    value={formData.mobile}
                                    onChange={(e) =>
                                        handleChange("mobile", e.target.value)
                                    }
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleSave}
                                className="flex-1 border border-black py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                            >
                                Save
                            </button>

                            <button
                                onClick={handleCancel}
                                className="flex-1 border border-red-500 text-red-500 py-3 rounded-lg font-medium hover:bg-red-50 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
