import React, { useState, useEffect } from 'react';

const App = () => {
    const appStoreUrl = 'https://apps.apple.com/in/app/amazon-india-shop-pay-minitv/id1478350915';
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping';
    
    const [showQRCode, setShowQRCode] = useState(false);

    // Updated universal URL to point to serverless redirection
    const universalUrl = 'https://qr-g-latest-pft9.vercel.app/api/redirect';

    const getQRCodeImageUrl = (url, size = 256) => {
        return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=${size}x${size}`;
    };

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = appStoreUrl;
        } else if (/android/i.test(userAgent)) {
            window.location.href = playStoreUrl;
        }
    }, [appStoreUrl, playStoreUrl]);

    const handleGenerate = () => {
        setShowQRCode(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full space-y-6">
                <h1 className="text-3xl font-bold text-gray-800" style={{color:"grey"}}>Germany App QR Generator</h1>
                {/* <p className="text-gray-600">
                    Click the button below to generate a single QR code that automatically redirects to the correct app store.
                </p> */}
                
                <button 
                    onClick={handleGenerate} 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-lg"
                >
                    Generate Germany QR Code
                </button>
                
                {showQRCode && (
                    <div className="mt-8 space-y-4">
                        <div className="flex justify-center items-center p-4 bg-gray-50 rounded-2xl shadow-inner">
                            <img 
                                src={getQRCodeImageUrl(universalUrl)} 
                                alt="Universal QR Code" 
                                className="w-64 h-auto rounded-xl shadow-md"
                            />
                        </div>
                        <p className="text-sm text-gray-500 break-words">Scan this single code for both iOS and Android devices!</p>
                        <p className="text-xs text-gray-400 break-words">QR Link: {universalUrl}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
