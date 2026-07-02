const axios = require('axios');
const crypto = require('crypto');

const merchantCode = process.env.DUITKU_MERCHANT_CODE || 'DS31489';
const apiKey = process.env.DUITKU_API_KEY || 'c6d3addc9380e7e4e9a394bdf54d8f98';

module.exports = async (req, res) => {

    // Hanya izinkan POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const total = req.body.total;

    const merchantOrderId = 'ORDER' + Date.now();

    const signature = crypto
        .createHash('md5')
        .update(
            merchantCode +
            merchantOrderId +
            total +
            apiKey
        )
        .digest('hex');

    try {

        const response = await axios.post(
            'https://sandbox.duitku.com/webapi/api/merchant/v2/inquiry',
            {
                merchantCode: merchantCode,
                paymentAmount: total,
                paymentMethod: 'SP',
                merchantOrderId: merchantOrderId,
                productDetails: 'Pembelian iPhone',
                email: 'test@test.com',
                customerVaName: 'Customer',
                callbackUrl: 'https://iphone-store-duitku.vercel.app/api/callback',
                returnUrl: 'https://iphone-store-duitku.vercel.app',
                signature: signature
            }
        );

        res.json(response.data);

    } catch (err) {

        console.error(err.response?.data || err.message);
        res.status(500).json({ error: true });

    }

};
