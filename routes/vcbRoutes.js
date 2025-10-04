const express = require('express');
const router = express.Router();
const path = require('path');
const VcbCheckSheet = require('../models/VcbSchCheckSheet');

// View page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'VCB_SCH_CONVENTIONAL_LOCO_CHECKSHEET.html'));
});

// Edit page
router.get('/edit/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'VCB_SCH_CONVENTIONAL_LOCO_CHECKSHEET.html'));
});

// Add new checksheet
router.post('/add', async (req, res) => {
  try {
    const checkSheet = new VcbCheckSheet(req.body);
    await checkSheet.save();
    res.json({ success: true, message: 'Check sheet saved successfully!', id: checkSheet._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error saving check sheet.' });
  }
});

// Update checksheet
router.post('/edit/:id', async (req, res) => {
  try {
    const checkSheet = await VcbCheckSheet.findByIdAndUpdate(
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

// Get checksheet by ID
router.get('/:id', async (req, res) => {
  try {
    const checkSheet = await VcbCheckSheet.findById(req.params.id);
    
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