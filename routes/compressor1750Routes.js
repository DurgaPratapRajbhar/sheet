const express = require('express');
const router = express.Router();
const path = require('path');
const Compressor1750LpmCheckSheet = require('../models/Compressor1750LpmCheckSheet');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'COMPRESSOR-CHECK SHEET-1750-LPM-DT.html'));
});

router.get('/edit/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'COMPRESSOR-CHECK SHEET-1750-LPM-DT.html'));
});

router.post('/add', async (req, res) => {
  try {
    const checkSheet = new Compressor1750LpmCheckSheet(req.body);
    await checkSheet.save();
    res.json({ success: true, message: 'Check sheet saved successfully!', id: checkSheet._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error saving check sheet.' });
  }
});

router.post('/edit/:id', async (req, res) => {
  try {
    const checkSheet = await Compressor1750LpmCheckSheet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!checkSheet) {
      return res.status(404).json({ success: false, message: 'Check sheet not found.' });
    }
    
    res.json({ success: true, message: 'Check sheet updated successfully!', id: checkSheet._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating check sheet.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const checkSheet = await Compressor1750LpmCheckSheet.findById(req.params.id);
    
    if (!checkSheet) {
      return res.status(404).json({ success: false, message: 'Check sheet not found.' });
    }
    
    res.json({ success: true, data: checkSheet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching check sheet.' });
  }
});

module.exports = router;