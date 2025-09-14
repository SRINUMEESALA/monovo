export interface ClothingItem {
  id: string;
  name: string;
  type: "top" | "bottom" | "dress" | "shoes" | "bag" | "accessory";
  style: string;
  mood: string;
  color: string;
  image: string;
  category?: string;
  tags?: string[];
}

export interface Outfit {
  id: string;
  name: string;
  items: {
    top?: ClothingItem;
    bottom?: ClothingItem;
    shoes?: ClothingItem;
    bag?: ClothingItem;
    accessory?: ClothingItem;
  };
  image: string;
  tags: string[];
}

export interface Collection {
  id: string;
  name: string;
  items: ClothingItem[];
  color: string;
}

export const mockClothingItems: ClothingItem[] = [
  // TOPS
  {
    id: "1",
    name: "Crop Knot Detail Knit Top",
    type: "top",
    style: "casual",
    mood: "relaxed",
    color: "black",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300&h=400&fit=crop",
    tags: ["Crop"],
  },
  {
    id: "2",
    name: "Motif Printed frock",
    type: "top",
    style: "elegant",
    mood: "sophisticated",
    color: "white",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
    tags: ["Crop"],
  },
  {
    id: "3",
    name: "Striped Cotton Poplin Pant",
    type: "top",
    style: "casual",
    mood: "fresh",
    color: "black",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop",
    tags: ["Striped"],
  },
  {
    id: "4",
    name: "White Linen Button-Up",
    type: "top",
    style: "elegant",
    mood: "fresh",
    color: "pink",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&h=400&fit=crop",
    tags: ["Linen"],
  },
  {
    id: "5",
    name: "Red Track Pant",
    type: "top",
    style: "elegant",
    mood: "sophisticated",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop",
    tags: ["Silk"],
  },
  {
    id: "6",
    name: "Green Vintage Sweater",
    type: "top",
    style: "vintage",
    mood: "relaxed",
    color: "green",
    image:
      "https://images.unsplash.com/photo-1571513720908-b3b1b6b5e8f0?w=300&h=400&fit=crop",
    tags: ["Vintage"],
  },
  {
    id: "7",
    name: "Sporty Tshirt",
    type: "top",
    style: "sporty",
    mood: "bold",
    color: "white",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
    tags: ["Sporty"],
  },

  // BOTTOMS
  {
    id: "8",
    name: "Denim Blue Denim Shorts",
    type: "bottom",
    style: "casual",
    mood: "relaxed",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop",
    tags: ["Denim"],
  },
  {
    id: "9",
    name: "Wide Seamless TShirt",
    type: "bottom",
    style: "elegant",
    mood: "sophisticated",
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&h=400&fit=crop",
    tags: ["Wide Leg"],
  },
  {
    id: "10",
    name: "Black Wide Leg Pants",
    type: "bottom",
    style: "casual",
    mood: "relaxed",
    color: "black",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop",
    tags: ["Wide Leg"],
  },
  {
    id: "11",
    name: "White flowered frock",
    type: "bottom",
    style: "casual",
    mood: "fresh",
    color: "white",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&h=400&fit=crop",
    tags: ["High-Waist"],
  },
  {
    id: "12",
    name: "Skating Jacket",
    type: "bottom",
    style: "elegant",
    mood: "sophisticated",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop",
    tags: ["Midi"],
  },
  {
    id: "13",
    name: "Green Cargo Pants",
    type: "bottom",
    style: "sporty",
    mood: "bold",
    color: "green",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Cargo"],
  },

  // DRESSES
  {
    id: "14",
    name: "Black Mini Dress",
    type: "dress",
    style: "elegant",
    mood: "sophisticated",
    color: "black",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Mini"],
  },
  {
    id: "15",
    name: "Blue Floral Maxi Dress",
    type: "dress",
    style: "casual",
    mood: "fresh",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Maxi", "Floral"],
  },
  {
    id: "16",
    name: "White Summer Dress",
    type: "dress",
    style: "casual",
    mood: "fresh",
    color: "white",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Summer"],
  },
  {
    id: "17",
    name: "Red Cocktail Dress",
    type: "dress",
    style: "elegant",
    mood: "sophisticated",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Cocktail"],
  },

  // SHOES
  {
    id: "18",
    name: "Light Brown Sandals",
    type: "shoes",
    style: "casual",
    mood: "relaxed",
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Sandals"],
  },
  {
    id: "19",
    name: "Black Heeled Boots",
    type: "shoes",
    style: "elegant",
    mood: "sophisticated",
    color: "black",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Heeled", "Boots"],
  },
  {
    id: "20",
    name: "White Sneakers",
    type: "shoes",
    style: "sporty",
    mood: "fresh",
    color: "white",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Sneakers"],
  },
  {
    id: "21",
    name: "Red Stiletto Heels",
    type: "shoes",
    style: "elegant",
    mood: "sophisticated",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Stiletto"],
  },

  // BAGS
  {
    id: "22",
    name: "Dark Brown Handbag",
    type: "bag",
    style: "elegant",
    mood: "sophisticated",
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Handbag"],
  },
  {
    id: "23",
    name: "Black Leather Tote",
    type: "bag",
    style: "elegant",
    mood: "sophisticated",
    color: "black",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Leather", "Tote"],
  },
  {
    id: "24",
    name: "White Canvas Tote",
    type: "bag",
    style: "casual",
    mood: "fresh",
    color: "white",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Canvas", "Tote"],
  },
  {
    id: "25",
    name: "Red Crossbody Bag",
    type: "bag",
    style: "casual",
    mood: "bold",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Crossbody"],
  },

  // ACCESSORIES
  {
    id: "26",
    name: "Golden Dangle Earrings",
    type: "accessory",
    style: "elegant",
    mood: "sophisticated",
    color: "gold",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Dangle"],
  },
  {
    id: "27",
    name: "Silver Statement Necklace",
    type: "accessory",
    style: "elegant",
    mood: "sophisticated",
    color: "silver",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Statement"],
  },
  {
    id: "28",
    name: "Black Leather Belt",
    type: "accessory",
    style: "casual",
    mood: "relaxed",
    color: "black",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Leather", "Belt"],
  },
  {
    id: "29",
    name: "White Pearl Earrings",
    type: "accessory",
    style: "elegant",
    mood: "sophisticated",
    color: "white",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Pearl"],
  },
  {
    id: "30",
    name: "Green Scarf",
    type: "accessory",
    style: "casual",
    mood: "fresh",
    color: "green",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Scarf"],
  },
];

export const mockOutfits: Outfit[] = [
  {
    id: "1",
    name: "Summer Casual",
    items: {
      top: mockClothingItems[2], // Striped Cotton Poplin Shirt
      bottom: mockClothingItems[7], // Denim Blue Denim Shorts
      bag: mockClothingItems[23], // White Canvas Tote
      shoes: mockClothingItems[17], // Light Brown Sandals
    },
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Casual", "Summer"],
  },
  {
    id: "2",
    name: "Elegant Evening",
    items: {
      top: mockClothingItems[1], // Motif Printed Blouse
      bottom: mockClothingItems[8], // Wide Leg Seamless Trousers
      shoes: mockClothingItems[20], // Red Stiletto Heels
      accessory: mockClothingItems[25], // Golden Dangle Earrings
    },
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Elegant", "Evening"],
  },
  {
    id: "3",
    name: "Work Ready",
    items: {
      top: mockClothingItems[3], // White Linen Button-Up
      bottom: mockClothingItems[9], // Black Wide Leg Pants
      bag: mockClothingItems[22], // Black Leather Tote
      shoes: mockClothingItems[18], // Black Heeled Boots
    },
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Work", "Professional"],
  },
  {
    id: "4",
    name: "Sporty Chic",
    items: {
      top: mockClothingItems[6], // Yellow Sporty Tank
      bottom: mockClothingItems[12], // Green Cargo Pants
      shoes: mockClothingItems[19], // White Sneakers
      accessory: mockClothingItems[29], // Green Scarf
    },
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Sporty", "Bold"],
  },
  {
    id: "5",
    name: "Vintage Vibes",
    items: {
      top: mockClothingItems[5], // Green Vintage Sweater
      bottom: mockClothingItems[10], // White High-Waist Jeans
      bag: mockClothingItems[24], // Red Crossbody Bag
      shoes: mockClothingItems[17], // Light Brown Sandals
    },
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Vintage", "Relaxed"],
  },
  {
    id: "6",
    name: "Cocktail Party",
    items: {
      top: mockClothingItems[4], // Red Silk Blouse
      bottom: mockClothingItems[11], // Red Midi Skirt
      shoes: mockClothingItems[20], // Red Stiletto Heels
      accessory: mockClothingItems[26], // Silver Statement Necklace
    },
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
    tags: ["Elegant", "Party"],
  },
];

export const mockCollections: Collection[] = [
  {
    id: "1",
    name: "Work",
    items: [
      mockClothingItems[3], // White Linen Button-Up
      mockClothingItems[4], // Red Silk Blouse
      mockClothingItems[8], // Wide Leg Seamless Trousers
      mockClothingItems[10], // Black Wide Leg Pants
      mockClothingItems[18], // Black Heeled Boots
      mockClothingItems[22], // Black Leather Tote
    ],
    color: "#4A90E2",
  },
  {
    id: "2",
    name: "Leisure",
    items: [
      mockClothingItems[0], // Crop Knot Detail Knit Top
      mockClothingItems[2], // Striped Cotton Poplin Shirt
      mockClothingItems[6], // Green Vintage Sweater
      mockClothingItems[7], // Denim Blue Denim Shorts
      mockClothingItems[11], // White High-Waist Jeans
      mockClothingItems[17], // Light Brown Sandals
      mockClothingItems[19], // White Sneakers
      mockClothingItems[23], // White Canvas Tote
    ],
    color: "#7ED321",
  },
  {
    id: "3",
    name: "Designer",
    items: [
      mockClothingItems[1], // Motif Printed Blouse
      mockClothingItems[13], // Black Mini Dress
      mockClothingItems[16], // Red Cocktail Dress
      mockClothingItems[20], // Red Stiletto Heels
      mockClothingItems[21], // Black Heeled Boots
      mockClothingItems[25], // Golden Dangle Earrings
      mockClothingItems[26], // Silver Statement Necklace
      mockClothingItems[28], // White Pearl Earrings
    ],
    color: "#F5A623",
  },
];

export const filterOptions = {
  type: ["All", "Top", "Bottom", "Dress", "Shoes", "Bag", "Accessory"],
  style: ["All", "Casual", "Elegant", "Sporty", "Vintage"],
  mood: ["All", "Relaxed", "Sophisticated", "Fresh", "Bold"],
  color: [
    "All",
    "Black",
    "Blue",
    "Brown",
    "White",
    "Gold",
    "Green",
    "Red",
    "Yellow",
    "Silver",
  ],
};
