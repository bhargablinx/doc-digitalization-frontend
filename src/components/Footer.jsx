import React from "react";

function Footer() {
    return (
        <footer id="contact" className="border-t border-gray-200 py-6 ">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 items-center">
                <div>
                    <h3 className="font-bold text-xl">VoltVerify</h3>
                    <p className="text-gray-500 mt-2">
                        AI-powered utility document processing.
                    </p>
                </div>

                <div className="text-gray-500">
                    © 2026 VoltVerify. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
