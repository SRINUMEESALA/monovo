import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import SavedScreen from "../screens/SavedScreen";
import EmptyScreen from "../screens/EmptyScreen";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Bag") {
              iconName = focused ? "bag" : "bag-outline";
            } else if (route.name === "Saved") {
              iconName = focused ? "bookmark" : "bookmark-outline";
            } else {
              iconName = "help-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#999",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#eee",
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomWidth: 1,
            borderBottomColor: "#eee",
          },
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={EmptyScreen}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="Bag"
          component={EmptyScreen}
          options={{ title: "Bag" }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{ title: "Saved" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
