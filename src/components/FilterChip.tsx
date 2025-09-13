import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({
  label,
  isActive,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.chip, isActive && styles.activeChip]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.chipText, isActive && styles.activeChipText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#f8f8f8",
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  activeChip: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  chipText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#666",
  },
  activeChipText: {
    color: "#fff",
  },
});

export default FilterChip;
