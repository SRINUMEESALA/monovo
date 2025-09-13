import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmptyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#999",
    fontWeight: "500",
  },
});

export default EmptyScreen;
