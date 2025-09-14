import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ClothingItem } from "../data/mockData";

interface ItemCardProps {
  item: ClothingItem;
  onPress?: () => void;
  onRemoveFromSaved?: () => void;
  showSaveIcon?: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onPress,
  onRemoveFromSaved,
  showSaveIcon = false,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          {item.tags && item.tags.length > 0 && (
            <View style={styles.tagContainer}>
              {item.tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          )}
          {showSaveIcon && (
            <TouchableOpacity
              style={styles.saveIconContainer}
              onPress={(e) => {
                e.stopPropagation();
                onRemoveFromSaved?.();
              }}
            >
              <Ionicons name="bookmark" size={20} color="#000" />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.itemName} numberOfLines={2}>
            {item.name}
          </Text>
          <View style={styles.badgeContainer}>
            <View
              style={[
                styles.badge,
                { backgroundColor: getColorCode(item.color) },
              ]}
            >
              <Text
                style={{
                  ...styles.badgeText,
                  color: item.color === "white" ? "#000" : "#fff",
                }}
              >
                {item.color}
              </Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.style}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const getColorCode = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    black: "#000",
    blue: "#4A90E2",
    brown: "#8B4513",
    white: "#fff",
    gold: "#FFD700",
    green: "#7ED321",
    red: "#FF6B6B",
  };
  return colorMap[color.toLowerCase()] || "#ccc";
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 6,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 3,
  },
  touchable: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    aspectRatio: 0.75,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  tagContainer: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 4,
  },
  tagText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "600",
  },
  saveIconContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  infoContainer: {
    padding: 12,
  },
  itemName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
    lineHeight: 16,
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  badge: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 4,
    marginBottom: 2,
  },
  badgeText: {
    fontSize: 9,
    color: "#666",
    fontWeight: "500",
    textTransform: "capitalize",
  },
});

export default ItemCard;
