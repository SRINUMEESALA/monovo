import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Outfit } from "../data/mockData";

interface OutfitCardProps {
  outfit: Outfit;
  onPress?: () => void;
  onRemoveFromSaved?: () => void;
  showSaveIcon?: boolean;
}

const OutfitCard: React.FC<OutfitCardProps> = ({
  outfit,
  onPress,
  onRemoveFromSaved,
  showSaveIcon = false,
}) => {
  const renderItemImage = (item: any, size: "small" | "medium" = "small") => {
    if (!item) return null;

    return (
      <View style={[styles.itemImage, size === "medium" && styles.mediumItem]}>
        <Image source={{ uri: item.image }} style={styles.itemImageSource} />
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: outfit.image }} style={styles.mainImage} />
        <View style={styles.itemsOverlay}>
          {renderItemImage(outfit.items.top, "medium")}
          <View style={styles.bottomRow}>
            {renderItemImage(outfit.items.bottom)}
            {renderItemImage(outfit.items.shoes)}
            {renderItemImage(outfit.items.bag)}
          </View>
        </View>
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
        <Text style={styles.outfitName} numberOfLines={1}>
          {outfit.name}
        </Text>
        <View style={styles.tagContainer}>
          {outfit.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
    aspectRatio: 0.75,
  },
  mainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  itemsOverlay: {
    position: "absolute",
    bottom: 8,
    right: 8,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  itemImage: {
    width: 30,
    height: 30,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 4,
    borderWidth: 1,
    borderColor: "#fff",
  },
  mediumItem: {
    width: 40,
    height: 40,
  },
  itemImageSource: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bottomRow: {
    flexDirection: "row",
  },
  infoContainer: {
    padding: 12,
  },
  outfitName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 10,
    color: "#666",
    fontWeight: "500",
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
});

export default OutfitCard;
