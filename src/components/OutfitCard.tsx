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
  const renderItemImage = (item: any, style: any) => {
    if (!item) return null;
    return (
      <View style={style}>
        <Image source={{ uri: item.image }} style={styles.collageImage} />
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        {/* Asymmetric layout: Main card on left, two stacked cards on right */}
        <View style={styles.layoutContainer}>
          {/* Left side - Main card */}
          <View style={styles.leftCard}>
            <Image
              source={{ uri: outfit.items.top?.image || outfit.image }}
              style={styles.mainCardImage}
            />
          </View>

          {/* Right side - Two stacked cards */}
          <View style={styles.rightColumn}>
            <View style={styles.rightCardTop}>
              <Image
                source={{ uri: outfit.items.bottom?.image || outfit.image }}
                style={styles.rightCardImage}
              />
            </View>
            <View style={styles.rightCardBottom}>
              <Image
                source={{
                  uri:
                    outfit.items.shoes?.image ||
                    outfit.items.bag?.image ||
                    outfit.image,
                }}
                style={styles.rightCardImage}
              />
            </View>
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
            <Ionicons name="bookmark" size={18} color="#000" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.outfitName} numberOfLines={2}>
          {outfit.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    height: 280,
    backgroundColor: "#f8f8f8",
  },
  layoutContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    padding: 8,
  },
  leftCard: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mainCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  rightColumn: {
    flex: 1,
    gap: 8,
  },
  rightCardTop: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  rightCardBottom: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  rightCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  collageImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 16,
    paddingTop: 12,
  },
  outfitName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
    lineHeight: 20,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 6,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 11,
    color: "#666",
    fontWeight: "500",
  },
  saveIconContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default OutfitCard;
