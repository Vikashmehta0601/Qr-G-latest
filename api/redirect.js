// api/redirect.js
export default function handler(req, res) {
    const userAgent = req.headers['user-agent'].toLowerCase();

    // Check for iOS or Android and redirect accordingly
    if (userAgent.includes('iphone') || userAgent.includes('ipod') || userAgent.includes('ipad')) {
        return res.redirect('https://apps.apple.com/in/app/amazon-india-shop-pay-minitv/id1478350915'); // iOS App Store link
    } else if (userAgent.includes('android')) {
        return res.redirect('https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping'); // Android Play Store link
    } else {
        // If not iOS or Android, redirect to a fallback page or show a message
        return res.redirect('https://www.amazon.in'); // Fallback page
    }
}