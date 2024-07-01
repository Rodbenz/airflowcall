const axios = require('axios');

const webhook = async (req, res) => {
    const requestBody = req.body;
    console.log("Received POST data:", JSON.stringify(requestBody, null, 2));

    try {
        if (requestBody.events) {
            for (const eventElement of requestBody.events) {
                if (eventElement.type === 'postback' && eventElement.postback && eventElement.postback.data) {
                    const data = eventElement.postback.data;
                    const userId = eventElement.source.userId;

                    // Construct the redirect URL with userId and action from postback data
                    const redirectUrl = `https://dev-web.trrgroup.com/linleasing-reg/home/access/verify-identity?userId=${userId}&${data}`;

                    // Log the payload to console
                    console.log(`Payload sent to final URL: userId=${userId}, data=${data}`);

                    // Prepare reply message with a button
                    const replyToken = eventElement.replyToken;
                    const replyMessage = {
                        replyToken: replyToken,
                        messages: [
                            {
                                type: 'template',
                                altText: 'Link Your Account',
                                template: {
                                    type: 'buttons',
                                    title: 'Link Your Account',
                                    text: 'Please link your account by clicking the button below.',
                                    actions: [
                                        {
                                            type: 'uri',
                                            label: 'Link Your Account',
                                            uri: redirectUrl
                                        }
                                    ]
                                }
                            }
                        ]
                    };

                    // Replace "<YOUR_ACCESS_TOKEN>" with your actual LINE Messaging API access token
                    const accessToken = 'vsJxSs/y9h9xtfNNh51emZQVYWncs2hTJv1scQT8ACgWYLt7JThpCGn/bnuMmjJdnZhRD1brf4dofHXTAg/86ljTlN65VzwCsMa4dO2TRgIT7BjeMMm0uFmlurLfT5lNUNHfhoTHS/AokUasbPiaPwdB04t89/1O/w1cDnyilFU=';

                    try {
                        // Post reply message to LINE Messaging API
                        const response = await axios.post('https://api.line.me/v2/bot/message/reply', replyMessage, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${accessToken}`
                            }
                        });

                        // Log the response from LINE
                        console.log("Response from LINE:", response.data);
                    } catch (error) {
                        console.error("Error posting to LINE Messaging API:", error);
                    }
                }
            }
        } else {
            console.log("JSON does not contain 'events' or is empty.");
        }
    } catch (error) {
        console.error("Failed to process request:", error);
    }

    res.contentType('text/plain');
    res.send("Webhook received and processed");
};

const richmenu = (req, res) => {
    const eventId = req.body;
    console.log(eventId,'5555555555555555555');
    const databody = JSON.stringify({});
    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://api.line.me/v2/bot/user/${eventId.user_id}/richmenu/richmenu-eb0567bcda0a0da8d960e4df6e405e9c`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer vsJxSs/y9h9xtfNNh51emZQVYWncs2hTJv1scQT8ACgWYLt7JThpCGn/bnuMmjJdnZhRD1brf4dofHXTAg/86ljTlN65VzwCsMa4dO2TRgIT7BjeMMm0uFmlurLfT5lNUNHfhoTHS/AokUasbPiaPwdB04t89/1O/w1cDnyilFU='
        },
        data: databody
    };

    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data));
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(403).send(error);
        });
};

module.exports = {
    webhook,
    richmenu
};
