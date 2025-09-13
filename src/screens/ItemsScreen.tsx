import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ItemCard from "../components/ItemCard";
import FilterChip from "../components/FilterChip";
import { mockClothingItems, filterOptions } from "../data/mockData";

const ItemsScreen: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    type: "All",
    style: "All",
    mood: "All",
    color: "All",
  });

  const filteredItems = useMemo(() => {
    return mockClothingItems.filter((item) => {
      const typeMatch =
        selectedFilters.type === "All" ||
        item.type.toLowerCase() === selectedFilters.type.toLowerCase();
      const styleMatch =
        selectedFilters.style === "All" ||
        item.style.toLowerCase() === selectedFilters.style.toLowerCase();
      const moodMatch =
        selectedFilters.mood === "All" ||
        item.mood.toLowerCase() === selectedFilters.mood.toLowerCase();
      const colorMatch =
        selectedFilters.color === "All" ||
        item.color.toLowerCase() === selectedFilters.color.toLowerCase();

      return typeMatch && styleMatch && moodMatch && colorMatch;
    });
  }, [selectedFilters]);

  const handleFilterChange = (
    filterType: keyof typeof selectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const renderFilterSection = (
    title: string,
    options: string[],
    filterType: keyof typeof selectedFilters
  ) => (
    <View style={styles.filterSection}>
      <Text style={styles.filterTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
      >
        {options.map((option) => (
          <FilterChip
            key={option}
            label={option}
            isActive={selectedFilters[filterType] === option}
            onPress={() => handleFilterChange(filterType, option)}
          />
        ))}
      </ScrollView>
    </View>
  );

  const renderItem = ({ item }: { item: any }) => <ItemCard item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Items</Text>
      </View>

      <ScrollView
        style={styles.filtersContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderFilterSection("Type", filterOptions.type, "type")}
        {renderFilterSection("Style", filterOptions.style, "style")}
        {renderFilterSection("Mood", filterOptions.mood, "mood")}
        {renderFilterSection("Color", filterOptions.color, "color")}
      </ScrollView>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.itemsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
  filtersContainer: {
    maxHeight: 200,
    paddingVertical: 12,
  },
  filterSection: {
    marginBottom: 16,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  filterScroll: {
    paddingHorizontal: 16,
  },
  itemsList: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
});

export default ItemsScreen;
