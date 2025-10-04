const express = require('express');
const router = express.Router();
const path = require('path');
const VcbAalCheckSheet = require('../models/VcbAalCheckSheet');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'VCB_AAL_CONVENTIONAL_LOCO_CHECKSHEET.html'));
});

router.get('/edit/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'VCB_AAL_CONVENTIONAL_LOCO_CHECKSHEET.html'));
});

router.post('/add', async (req, res) => {
  try {
    // Handle remarks field from textarea
    const formData = { ...req.body };
    if (req.body.remarks_textarea) {
      formData.remarks = req.body.remarks_textarea;
      delete formData.remarks_textarea;
    }
    
    const checkSheet = new VcbAalCheckSheet(formData);
    await checkSheet.save();
    res.json({ success: true, message: 'Check sheet saved successfully!', id: checkSheet._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error saving check sheet.' });
  }
});

router.post('/edit/:id', async (req, res) => {
  try {
    // Handle remarks field from textarea
    const formData = { ...req.body };
    if (req.body.remarks_textarea) {
      formData.remarks = req.body.remarks_textarea;
      delete formData.remarks_textarea;
    }
    
    const checkSheet = await VcbAalCheckSheet.findByIdAndUpdate(
      req.params.id,
      formData,
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
    const checkSheet = await VcbAalCheckSheet.findById(req.params.id);
    
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