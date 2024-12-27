const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/getMonitors', async (req, res) => {
    const preferences = req.body;

    // Placeholder for querying the Amazon API
    const monitors = [
        {
            name: 'Example Monitor 1',
            link: 'https://www.amazon.com/dp/example1?tag=yourAmazonAssociateTag',
            size: '24',
            resolution: '1080p',
            type: 'IPS',
            refreshRate: '60',
            price: 150,
            rating: 4.5,
            adaptiveSync: 'freesync'
        },
        {
            name: 'Example Monitor 2',
            link: 'https://www.amazon.com/dp/example2?tag=yourAmazonAssociateTag',
            size: '27',
            resolution: '1440p',
            type: 'TN',
            refreshRate: '120',
            price: 300,
            rating: 3.8,
            adaptiveSync: 'gSync'
        }
    ];

    // Filter the monitors based on user preferences
    const filtered = monitors.filter(monitor =>
        monitor.size === preferences.size &&
        monitor.resolution === preferences.resolution &&
        monitor.type === preferences.type &&
        monitor.refreshRate === preferences.refreshRate &&
        monitor.price >= preferences.minPrice &&
        monitor.price <= preferences.maxPrice &&
        monitor.rating >= preferences.minRating &&
        (preferences.adaptiveSync === 'any' || monitor.adaptiveSync === preferences.adaptiveSync)
    );

    res.json({ monitors: filtered });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
