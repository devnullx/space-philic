import mongoose from 'mongoose';

const platformSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['COMMERCIAL', 'LABORATORY', 'DEFENCE'],
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Platform = mongoose.model('Platform', platformSchema);

export default Platform;
