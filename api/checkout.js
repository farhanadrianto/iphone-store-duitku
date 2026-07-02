const axios = require('axios');
const crypto = require('crypto');

const merchantCode = 'DS31489';
const apiKey = 'c6d3addc9380e7e4e9a394bdf54d8f98';

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
                callbackUrl: 'https://YOUR_VERCEL_URL/api/callback',
                returnUrl: 'https://YOUR_VERCEL_URL',
                signature: signature
            }
        );

        res.json(response.data);

    } catch (err) {

        console.error(err.response?.data || err.message);
        res.status(500).json({ error: true });

    }

};
