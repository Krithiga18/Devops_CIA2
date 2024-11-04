const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('This is my CI/CD Pipeline');
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`App running on port ${port}`);
    });
}

module.exports = app; // Add this line to export the app