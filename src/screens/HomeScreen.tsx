import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../components/ItemCard";
import { mockClothingItems } from "../data/mockData";
import { COLORS } from "../constants";

const HomeScreen: React.FC = () => {
  const renderItem = ({ item }: { item: any }) => (
    <ItemCard item={item} showBorder={true} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Discover your style</Text>
      </View>

      <FlatList
        style={styles.scrollContainer}
        data={mockClothingItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.itemsList}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.TEXT_TERTIARY,
    fontWeight: "400",
  },
  scrollContainer: {
    flex: 1,
  },
  itemsList: {
    paddingTop: 8,
    paddingBottom: 20,
  },
});

export default HomeScreen;
