import { platforms } from '../data/mockData.js';

// @desc    Get all platforms
// @route   GET /api/platforms
// @access  Public
export const getPlatforms = async (req, res) => {
  try {
    res.json(platforms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single platform
// @route   GET /api/platforms/:id
// @access  Public
export const getPlatform = async (req, res) => {
  try {
    const platform = platforms.find(p => p.id === req.params.id);

    if (!platform) {
      return res.status(404).json({ message: 'Platform not found' });
    }

    res.json(platform);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
