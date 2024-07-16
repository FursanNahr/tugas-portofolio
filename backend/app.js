const express = require('express');
const cors = require('cors');
const recentWorksRoutes = require('./routes/recentWorks');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/recent-works', recentWorksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});