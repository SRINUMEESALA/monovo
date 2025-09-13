# Monova Shopping App

A React Native app built with Expo that replicates the Monova shopping interface as shown in the reference screenshots.

## Features Implemented

### Screens

- **Collections Screen**: Displays clothing items organized by collections (Work, Leisure, Designer)
- **Outfits Screen**: Shows curated outfit combinations with multiple clothing items
- **Items Screen**: Grid view of individual clothing items with advanced filtering

### Components

- **ItemCard**: Displays individual clothing items with tags, color badges, and style information
- **OutfitCard**: Shows outfit combinations with overlay of individual items
- **FilterChip**: Animated filter chips for Type, Style, Mood, and Color filtering

### Functionality

- **Tab Navigation**: Bottom tab navigation between Collections, Outfits, and Items
- **Filtering System**: Real-time filtering by Type, Style, Mood, and Color
- **Collection Management**: Filter items by collections (Work, Leisure, Designer)
- **Responsive Design**: Optimized for mobile screens with proper spacing and layout

### Animations & Interactions

- **Smooth Transitions**: Animated filter chip state changes
- **Entrance Animations**: Fade-in and scale animations for item cards
- **Micro-interactions**: Press animations on filter chips and cards
- **Spring Animations**: Natural feeling animations using React Native's Animated API

## How to Run

### Using Expo Snack

1. Copy the code to [Expo Snack](https://snack.expo.dev/)
2. The app will run directly in the web browser
3. All dependencies are included in the package.json

### Local Development

```bash
cd MonovoApp
npm install
npm run web    # For web development
npm run ios    # For iOS simulator
npm run android # For Android emulator
```

## Component Structure & State Management

### Navigation

- `AppNavigator.tsx`: Main navigation container with bottom tabs
- Uses React Navigation v6 with TypeScript

### Screens

- `CollectionsScreen.tsx`: Manages collection filtering and displays items
- `OutfitsScreen.tsx`: Displays outfit combinations
- `ItemsScreen.tsx`: Handles complex filtering logic and item display

### Components

- `ItemCard.tsx`: Reusable item display component with animations
- `OutfitCard.tsx`: Specialized component for outfit combinations
- `FilterChip.tsx`: Animated filter component with state management

### Data Management

- `mockData.ts`: Centralized data store with TypeScript interfaces
- Client-side filtering using React hooks (useState, useMemo)
- No external state management library needed for this scope

## Assumptions and Limitations

### Assumptions

- All images use placeholder URLs from Unsplash
- Filter combinations work with AND logic (all selected filters must match)
- Collections are predefined and static
- No backend integration required (as per assignment)

### Limitations

- Images are placeholder URLs (would need real image URLs in production)
- No search functionality implemented
- No user authentication or personal collections
- Limited to the three main screens shown in reference
- No add/edit functionality for items or outfits

## Animations/Interactions Implemented

1. **Filter Chip Animations**

   - Smooth background color transitions (200ms)
   - Scale animation on press (spring animation)
   - Text color interpolation

2. **Item Card Animations**

   - Fade-in entrance animation (300ms)
   - Scale entrance animation (spring with tension/friction)
   - Staggered appearance for grid items

3. **Navigation Transitions**

   - Default React Navigation transitions
   - Tab bar icon state changes

4. **Micro-interactions**
   - Touch feedback on all interactive elements
   - Smooth state transitions
   - Visual feedback for active/inactive states

## Technical Implementation

- **TypeScript**: Full type safety throughout the application
- **React Hooks**: useState, useEffect, useMemo for state management
- **React Native Animated**: For smooth animations and transitions
- **Expo Vector Icons**: For tab bar icons
- **React Navigation**: For navigation structure
- **Responsive Design**: Flexible layouts that work on different screen sizes

The app successfully replicates the visual design and interaction patterns shown in the reference screenshots while maintaining clean, maintainable code structure.
