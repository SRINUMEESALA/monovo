# React Native Assignment: Monova

This project is a React Native application developed as part of the Monova - a fashion outfit management and styling app built with Expo.

## How to run

You can run this project directly on Expo Snack using the following link:
[https://snack.expo.dev/@srinumeesala8/github.com-srinumeesala-monovo](https://snack.expo.dev/@srinumeesala8/github.com-srinumeesala-monovo)

To run locally:

1. Clone this repository
2. Navigate to the project directory: `cd monovo`
3. Install dependencies: `npm install`
4. Start the Expo development server: `npm start`
5. Scan the QR code with your Expo Go app or choose to run on a web browser/emulator

## What replicated from the video

- **Navigation Structure**: Implemented bottom tab navigation with Home, Bag, and Saved screens
- **Saved Screen Layout**: Replicated the three-tab interface (Collections, Outfits, Items) with proper filtering
- **Outfit Card Design**: Created asymmetric layout with main image on left and stacked smaller images on right
- **Filter System**: Implemented filter chips for tabs and dropdown filters for item categorization
- **Item Cards**: Designed clothing item cards with save/unsave functionality
- **Color Scheme**: Used consistent color palette matching the design requirements
- **Typography**: Applied proper font weights and sizing for headers and content

## Component structure & state management

### Main Components:

- **AppNavigator**: Handles bottom tab navigation using React Navigation
- **HomeScreen**: Main dashboard with outfit recommendations
- **SavedScreen**: Three-tab interface for managing saved items
- **BagScreen**: Shopping cart functionality
- **OutfitCard**: Asymmetric layout component for displaying outfit combinations
- **ItemCard**: Standard card component for individual clothing items
- **FilterChip**: Reusable chip component for tab navigation
- **DropdownFilter**: Dropdown component for filtering options

### State Management:

- **Local Component State**: Using React hooks (useState) for:
  - Active tab selection
  - Filter selections (type, style, mood, color)
  - Saved items/outfits tracking
  - Collection selection
- **Mock Data**: Static data structure in `mockData.ts` for clothing items, outfits, and collections
- **Props Drilling**: Data passed down through component hierarchy for simplicity

### Navigation:

- **React Navigation**: Bottom tabs with stack navigation
- **Safe Area Context**: Proper handling of device safe areas

## Assumptions and limitations

### Assumptions:

- Users primarily use mobile devices (iOS/Android)
- Mock data is sufficient for demonstration purposes
- Users understand fashion terminology (casual, formal, etc.)
- Device has adequate storage for saving multiple items
- Network connectivity for image loading (in production)

### Limitations:

- **No Backend Integration**: All data is mock/static
- **No User Authentication**: No login/signup functionality
- **No Real Shopping**: Bag screen is for demonstration only
- **Limited Image Sources**: Using placeholder images
- **No Offline Support**: Requires internet for image loading
- **No Data Persistence**: Saved items reset on app restart
- **No Search Functionality**: Only filter-based browsing
- **Limited Customization**: Fixed color schemes and layouts

## List of animations/interactions implemented

### Animations:

- **Card Entrance Animation**: Fade-in effect for outfit and item cards using Animated.timing
- **Touch Feedback**: Scale animation on card press using Animated.spring
- **Smooth Transitions**: Tab switching with subtle animations
- **Press Interactions**: Visual feedback on all touchable elements

### Interactions:

- **Tab Navigation**: Smooth switching between Collections, Outfits, and Items
- **Filter Selection**: Interactive filter chips with active state styling
- **Dropdown Filters**: Expandable dropdown menus for item categorization
- **Save/Unsave Actions**: Toggle functionality with visual state changes
- **Card Press Handling**: Touch interactions with proper event handling
- **Scroll Interactions**: Smooth scrolling in lists and grids
- **Collection Selection**: Dynamic filtering based on selected collections

### Visual Feedback:

- **Active States**: Clear visual indication of selected tabs and filters
- **Loading States**: Smooth animations during data rendering
- **Touch States**: Proper press feedback on all interactive elements
- **Shadow Effects**: Subtle shadows on cards for depth perception

## Technical Stack

- **React Native** with **Expo SDK 52**
- **TypeScript** for type safety
- **React Navigation** for navigation
- **Expo Vector Icons** for iconography
- **React Native Gesture Handler** for touch interactions
- **React Native Safe Area Context** for device compatibility
