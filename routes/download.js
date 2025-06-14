const express = require('express');
const router = express.Router();
const Download = require('../models/downloads');

// Endpoint untuk mencatat download
router.post('/', async (req, res) => {
  console.log('POST /api/downloads', req.body); // Tambahkan log ini
  const { fileName, userName, size } = req.body;
  try {
    const data = await Download.create({ fileName, userName, size });
    res.json({ message: 'Download tercatat', data });
  } catch (error) {
    res.status(500).json({ error: 'Gagal mencatat download' });
  }
});

// Endpoint untuk melihat semua data download (opsional)
router.get('/', async (req, res) => {
  try {
    const data = await Download.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data download' });
  }
});

module.exports = router;