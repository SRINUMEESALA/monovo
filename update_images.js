const fs = require('fs');

// Different clothing images from Unsplash - each one is unique
const images = [
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 1 - Crop top
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 2 - Silk blouse
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 3 - Striped shirt
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 4 - Sweater
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 5 - Tank top
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 6 - Band tee
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 7 - Denim shorts
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 8 - Trousers
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 9 - Wide leg pants
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 10 - Midi skirt
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 11 - Cargo pants
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 12 - Wrap dress
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 13 - Slip dress
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 14 - Floral dress
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 15 - Sneakers
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 16 - Ankle boots
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 17 - Heels
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 18 - Slip-ons
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 19 - Crossbody bag
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 20 - Tote bag
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 21 - Chain bag
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 22 - Hoop earrings
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 23 - Silk scarf
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop', // 24 - Statement necklace
];

let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Replace each image URL with a different one
images.forEach((newImage, index) => {
  const oldImage = 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop';
  content = content.replace(oldImage, newImage);
});

fs.writeFileSync('src/data/mockData.ts', content);
console.log('Images updated successfully!');
