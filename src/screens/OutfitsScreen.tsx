import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import OutfitCard from "../components/OutfitCard";
import { mockOutfits } from "../data/mockData";

const OutfitsScreen: React.FC = () => {
  const renderOutfit = ({ item }: { item: any }) => (
    <OutfitCard outfit={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Outfits</Text>
      </View>

      <FlatList
        data={mockOutfits}
        renderItem={renderOutfit}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.outfitsList}
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
  outfitsList: {
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 20,
  },
});

export default OutfitsScreen;
