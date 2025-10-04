const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/sheet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

// Dashboard Route
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Import Routes
const vcbRoutes = require('./routes/vcbRoutes');
const vcbAalRoutes = require('./routes/vcbAalRoutes');
const tmRoutes = require('./routes/tmRoutes');
const panelShopRoutes = require('./routes/panelShopRoutes');
const rsiRoutes = require('./routes/rsiRoutes');
const drivingDeskRoutes = require('./routes/drivingDeskRoutes');
const miscRoutes = require('./routes/miscRoutes');
const compressor1000Routes = require('./routes/compressor1000Routes');
const compressor1750Routes = require('./routes/compressor1750Routes');
const pantoRoutes = require('./routes/pantoRoutes');
const relayRoutes = require('./routes/relayRoutes');
const valveRoutes = require('./routes/valveRoutes');

// Use Routes
app.use('/vcb-sch-conventional-loco', vcbRoutes);
app.use('/vcb-aal-conventional-loco', vcbAalRoutes);
app.use('/tm', tmRoutes);
app.use('/panel-shop', panelShopRoutes);
app.use('/rsi', rsiRoutes);
app.use('/driving-desk', drivingDeskRoutes);
app.use('/misc', miscRoutes);
app.use('/compressor-1000-lpm', compressor1000Routes);
app.use('/compressor-1750-lpm', compressor1750Routes);
app.use('/panto', pantoRoutes);
app.use('/relay', relayRoutes);
app.use('/valve', valveRoutes);

// API Route - Get all checksheets
app.get('/api/checksheets', async (req, res) => {
  try {
    // Import all models
    const VcbSchCheckSheet = require('./models/VcbSchCheckSheet');
    const VcbAalCheckSheet = require('./models/VcbAalCheckSheet');
    const TmCheckSheet = require('./models/TmCheckSheet');
    const PanelShopCheckSheet = require('./models/PanelShopCheckSheet');
    const RsiCheckSheet = require('./models/RsiCheckSheet');
    const DrivingDeskCheckSheet = require('./models/DrivingDeskCheckSheet');
    const MiscCheckSheet = require('./models/MiscCheckSheet');
    const Compressor1000LpmCheckSheet = require('./models/Compressor1000LpmCheckSheet');
    const Compressor1750LpmCheckSheet = require('./models/Compressor1750LpmCheckSheet');
    const PantoCheckSheet = require('./models/PantoCheckSheet');
    const RelayCheckSheet = require('./models/RelayCheckSheet');
    const ValveCheckSheet = require('./models/ValveCheckSheet');

    // Fetch data from all models
    const [
      vcbSchCheckSheets,
      vcbAalCheckSheets,
      tmCheckSheets,
      panelShopCheckSheets,
      rsiCheckSheets,
      drivingDeskCheckSheets,
      miscCheckSheets,
      compressor1000LpmCheckSheets,
      compressor1750LpmCheckSheets,
      pantoCheckSheets,
      relayCheckSheets,
      valveCheckSheets
    ] = await Promise.all([
      VcbSchCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      VcbAalCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      TmCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      PanelShopCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      RsiCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      DrivingDeskCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      MiscCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      Compressor1000LpmCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      Compressor1750LpmCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      PantoCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      RelayCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean(),
      ValveCheckSheet.find({}, 'loco_no shed vcb_sl_no make createdAt').lean()
    ]);

    // Combine all data and add type information
    const allCheckSheets = [
      ...vcbSchCheckSheets.map(item => ({ ...item, type: 'VCB SCH' })),
      ...vcbAalCheckSheets.map(item => ({ ...item, type: 'VCB AAL' })),
      ...tmCheckSheets.map(item => ({ ...item, type: 'TM' })),
      ...panelShopCheckSheets.map(item => ({ ...item, type: 'Panel Shop' })),
      ...rsiCheckSheets.map(item => ({ ...item, type: 'RSI' })),
      ...drivingDeskCheckSheets.map(item => ({ ...item, type: 'Driving Desk' })),
      ...miscCheckSheets.map(item => ({ ...item, type: 'Misc' })),
      ...compressor1000LpmCheckSheets.map(item => ({ ...item, type: 'Compressor 1000 LPM' })),
      ...compressor1750LpmCheckSheets.map(item => ({ ...item, type: 'Compressor 1750 LPM' })),
      ...pantoCheckSheets.map(item => ({ ...item, type: 'Panto' })),
      ...relayCheckSheets.map(item => ({ ...item, type: 'Relay' })),
      ...valveCheckSheets.map(item => ({ ...item, type: 'Valve' }))
    ];

    // Sort by createdAt in descending order (newest first)
    allCheckSheets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({ success: true, data: allCheckSheets });
  } catch (error) {
    console.error('Error fetching check sheets:', error);
    res.status(500).json({ success: false, message: 'Error fetching check sheets.' });
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});