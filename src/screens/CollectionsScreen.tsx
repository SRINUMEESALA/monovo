import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../components/ItemCard";
import FilterChip from "../components/FilterChip";
import { mockCollections, mockClothingItems } from "../data/mockData";

const CollectionsScreen: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<string>("All");

  const collectionOptions = [
    "All",
    "Add new",
    ...mockCollections.map((c) => c.name),
  ];

  const filteredItems =
    selectedCollection === "All"
      ? mockClothingItems
      : mockCollections.find((c) => c.name === selectedCollection)?.items || [];

  const renderItem = ({ item }: { item: any }) => <ItemCard item={item} />;

  const renderCollectionChip = ({ item }: { item: string }) => (
    <FilterChip
      label={item}
      isActive={selectedCollection === item}
      onPress={() => setSelectedCollection(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Collections</Text>
      </View>

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
    </SafeAreaView>
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
  collectionsContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  collectionsList: {
    paddingHorizontal: 16,
  },
  itemsList: {
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 20,
  },
});

export default CollectionsScreen;
