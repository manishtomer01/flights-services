const express = require('express');

const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use((req, res, next) => {
    const { method, url, ip, headers, query, body } = req;

    Logger.info(`📢 Request Received:
    - Method: ${method}
    - URL: ${url}
    - IP: ${ip}
    - Headers: ${JSON.stringify(headers)}
    - Query Params: ${JSON.stringify(query)}
    - Request Body: ${JSON.stringify(body)}
    `);

    // Capture response status code after response is sent
    res.on('finish', () => {
        Logger.info(`✅ Response Sent:
        - Status Code: ${res.statusCode}
        - Method: ${method}
        - URL: ${url}
        `);
    });

    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
