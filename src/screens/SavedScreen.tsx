import React, { useState, useMemo } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import ItemCard from "../components/ItemCard";
import OutfitCard from "../components/OutfitCard";
import FilterChip from "../components/FilterChip";
import DropdownFilter from "../components/DropdownFilter";
import {
  mockClothingItems,
  mockOutfits,
  mockCollections,
  filterOptions,
} from "../data/mockData";

type TabType = "Collections" | "Outfits" | "Items";

const SavedScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Collections");
  const [selectedFilters, setSelectedFilters] = useState({
    type: "All",
    style: "All",
    mood: "All",
    color: "All",
  });
  const [selectedCollection, setSelectedCollection] = useState<string>("All");
  const [savedItems, setSavedItems] = useState<Set<string>>(
    new Set(mockClothingItems.map((item) => item.id))
  );
  const [savedOutfits, setSavedOutfits] = useState<Set<string>>(
    new Set(mockOutfits.map((outfit) => outfit.id))
  );

  const tabs: TabType[] = ["Collections", "Outfits", "Items"];

  const filteredItems = useMemo(() => {
    if (activeTab === "Collections") {
      const items =
        selectedCollection === "All"
          ? mockClothingItems
          : mockCollections.find((c) => c.name === selectedCollection)?.items ||
            [];
      return items.filter((item) => savedItems.has(item.id));
    } else if (activeTab === "Items") {
      return mockClothingItems.filter((item) => {
        if (!savedItems.has(item.id)) return false;

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
    }
    return [];
  }, [activeTab, selectedFilters, selectedCollection, savedItems]);

  const handleFilterChange = (
    filterType: keyof typeof selectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleRemoveFromSaved = (itemId: string) => {
    setSavedItems((prev) => {
      const newSet = new Set(prev);
      newSet.delete(itemId);
      return newSet;
    });
  };

  const handleRemoveOutfitFromSaved = (outfitId: string) => {
    setSavedOutfits((prev) => {
      const newSet = new Set(prev);
      newSet.delete(outfitId);
      return newSet;
    });
  };

  const renderTabChip = ({ item }: { item: TabType }) => (
    <FilterChip
      label={item}
      isActive={activeTab === item}
      onPress={() => setActiveTab(item)}
    />
  );

  const renderCollectionChip = ({ item }: { item: string }) => (
    <FilterChip
      label={item}
      isActive={selectedCollection === item}
      onPress={() => setSelectedCollection(item)}
    />
  );

  const renderDropdownFilters = () => (
    <View style={styles.dropdownFiltersContainer}>
      <DropdownFilter
        label="Type"
        options={filterOptions.type}
        selectedValue={selectedFilters.type}
        onSelect={(value) => handleFilterChange("type", value)}
        isActive={selectedFilters.type !== "All"}
      />
      <DropdownFilter
        label="Style"
        options={filterOptions.style}
        selectedValue={selectedFilters.style}
        onSelect={(value) => handleFilterChange("style", value)}
        isActive={selectedFilters.style !== "All"}
      />
      <DropdownFilter
        label="Mood"
        options={filterOptions.mood}
        selectedValue={selectedFilters.mood}
        onSelect={(value) => handleFilterChange("mood", value)}
        isActive={selectedFilters.mood !== "All"}
      />
      <DropdownFilter
        label="Color"
        options={filterOptions.color}
        selectedValue={selectedFilters.color}
        onSelect={(value) => handleFilterChange("color", value)}
        isActive={selectedFilters.color !== "All"}
      />
    </View>
  );

  const renderItem = ({ item }: { item: any }) => (
    <ItemCard
      item={item}
      showSaveIcon={true}
      onRemoveFromSaved={() => handleRemoveFromSaved(item.id)}
    />
  );

  const renderOutfit = ({ item }: { item: any }) => (
    <OutfitCard
      outfit={item}
      showSaveIcon={true}
      onRemoveFromSaved={() => handleRemoveOutfitFromSaved(item.id)}
    />
  );

  const collectionOptions = [
    "All",
    "Add new",
    ...mockCollections.map((c) => c.name),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={tabs}
          renderItem={renderTabChip}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsList}
        />
      </View>

      {/* Collections Tab Content */}
      {activeTab === "Collections" && (
        <>
          <View style={styles.collectionsContainer}>
            <FlatList
              data={collectionOptions}
              renderItem={renderCollectionChip}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.collectionsList}
            />
          </View>
          <FlatList
            data={filteredItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.itemsList}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}

      {/* Outfits Tab Content */}
      {activeTab === "Outfits" && (
        <FlatList
          data={mockOutfits.filter((outfit) => savedOutfits.has(outfit.id))}
          renderItem={renderOutfit}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.outfitsList}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Items Tab Content */}
      {activeTab === "Items" && (
        <ScrollView
          style={styles.itemsTabContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.filtersContainer}>{renderDropdownFilters()}</View>
          <View style={styles.itemsGridContainer}>
            {filteredItems.map((item, index) => (
              <View key={item.id} style={styles.itemWrapper}>
                <ItemCard item={item} />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
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
  tabsContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tabsList: {
    paddingHorizontal: 16,
  },
  collectionsContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  collectionsList: {
    paddingHorizontal: 16,
  },
  itemsTabContainer: {
    flex: 1,
  },
  filtersContainer: {
    paddingVertical: 12,
  },
  dropdownFiltersContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    flexWrap: "wrap",
  },
  itemsGridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 4,
    paddingTop: 8,
    paddingBottom: 20,
  },
  itemWrapper: {
    width: "50%",
    paddingHorizontal: 2,
  },
  itemsList: {
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 20,
  },
  outfitsList: {
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 20,
  },
});

export default SavedScreen;
