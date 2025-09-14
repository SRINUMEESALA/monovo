import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import SavedScreen from "../screens/SavedScreen";
import HomeScreen from "../screens/HomeScreen";
import BagScreen from "../screens/BagScreen";
import { NAVIGATION_TITLES, TAB_NAMES, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Saved"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === TAB_NAMES.HOME) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === TAB_NAMES.BAG) {
              iconName = focused ? "bag" : "bag-outline";
            } else if (route.name === TAB_NAMES.SAVED) {
              iconName = focused ? "bookmark" : "bookmark-outline";
            } else {
              iconName = "help-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.TAB_ACTIVE,
          tabBarInactiveTintColor: COLORS.TAB_INACTIVE,
          tabBarStyle: {
            backgroundColor: COLORS.BACKGROUND,
            borderTopWidth: 1,
            borderTopColor: COLORS.BORDER,
            paddingBottom: Math.max(insets.bottom, 5),
            paddingTop: 5,
            height: 60 + Math.max(insets.bottom - 5, 0),
          },
          headerStyle: {
            backgroundColor: COLORS.BACKGROUND,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.BORDER,
          },
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name={TAB_NAMES.HOME}
          component={HomeScreen}
          options={{ title: NAVIGATION_TITLES.HOME }}
        />
        <Tab.Screen
          name={TAB_NAMES.BAG}
          component={BagScreen}
          options={{ title: NAVIGATION_TITLES.BAG }}
        />
        <Tab.Screen
          name={TAB_NAMES.SAVED}
          component={SavedScreen}
          options={{ title: NAVIGATION_TITLES.SAVED }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
