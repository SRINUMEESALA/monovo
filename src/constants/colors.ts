export const COLOR_MAP: { [key: string]: string } = {
  black: "#000",
  blue: "#4A90E2",
  brown: "#8B4513",
  white: "#fff",
  gold: "#FFD700",
  green: "#7ED321",
  red: "#FF6B6B",
  yellow: "#FFD700",
  pink: "#FF69B4",
  purple: "#8A2BE2",
  gray: "#808080",
  orange: "#FFA500",
  navy: "#000080",
  teal: "#008080",
  lime: "#00FF00",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  silver: "#C0C0C0",
  maroon: "#800000",
  olive: "#808000",
};

export const getColorCode = (color: string): string => {
  return COLOR_MAP[color.toLowerCase()] || "#ccc";
};
