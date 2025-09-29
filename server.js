const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect("YOUR_MONGODB_ATLAS_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.error(err));

// Shipment schema
const shipmentSchema = new mongoose.Schema({
  trackingNumber: String,
  location: String,
  status: String,
  date: { type: Date, default: Date.now }
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

// Routes
app.post('/api/track', async (req, res) => {
  const { trackingNumber, location, status } = req.body;
  if(!trackingNumber || !location || !status) return res.status(400).json({ error: "All fields required" });

  const newShipment = new Shipment({ trackingNumber, location, status });
  await newShipment.save();
  const history = await Shipment.find({ trackingNumber }).sort({ date: 1 });
  res.json({ history });
});

app.get('/api/track/:trackingNumber', async (req,res) => {
  const history = await Shipment.find({ trackingNumber: req.params.trackingNumber }).sort({ date: 1 });
  res.json({ history });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));