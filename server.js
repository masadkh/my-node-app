const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! This is a CI/CD pipeline demo.');
});

// Export app for testing
if (require.main === module) {
    app.listen(port, () => {
        console.log(`App running on port ${port}`);
    });
}

module.exports = app;

