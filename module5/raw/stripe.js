// This is your test secret API key.
const stripe = require('stripe')('sk_test_51LcWn2SEf8DOL01H3jLd7zwUXoxRsuxAaMy981QQvv0NAiZyYQGcyvEdyzgaXmPXMGLQbzZzlkdwKFrbZGrcWiQp005gGVd2hT');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1LcWuMSEf8DOL01HQTY6yBZi',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.get('/',function(req,res){
    res.sendFile('C:\\Users\\saifi\\FJP6\\module5\\raw\\public\\checkout.html')
})

app.listen(4242, () => console.log('Running on port 4242'));
