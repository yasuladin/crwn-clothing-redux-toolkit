require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // または特定のオリジン
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });
    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
