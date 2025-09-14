import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Outfit } from "../data/mockData";
import { COLORS } from "../constants";

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
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Card entrance animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
      tension: 300,
      friction: 10,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      tension: 300,
      friction: 10,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale: scaleAnim }],
          opacity: fadeAnim,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.touchable}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.8}
      >
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
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.outfitName} numberOfLines={2}>
            {outfit.name}
          </Text>
          {showSaveIcon && (
            <TouchableOpacity
              style={styles.saveIconContainer}
              onPress={(e) => {
                e.stopPropagation();
                onRemoveFromSaved?.();
              }}
            >
              <Ionicons name="bookmark" size={18} color={COLORS.ICON_PRIMARY} />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginHorizontal: 0,
    marginVertical: 8,
    backgroundColor: COLORS.CARD_BACKGROUND,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  touchable: {
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    height: 280,
    backgroundColor: COLORS.COLLAGE_BACKGROUND,
  },
  layoutContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    padding: 12,
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
    gap: 12,
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
  infoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "relative",
  },
  outfitName: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 4,
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
    bottom: 8,
    right: 8,
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
