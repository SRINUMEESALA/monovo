# Monova Shopping App - React Native Assignment

A modern React Native shopping application built with Expo, featuring a clean UI for browsing clothing items and outfits with filtering capabilities.

## 🚀 How to Run

### Option 1: Expo Snack (Recommended for Web)
1. Visit the [Expo Snack URL](https://snack.expo.dev) (to be provided)
2. The app will run directly in your browser
3. No local setup required

### Option 2: Local Development
1. **Prerequisites:**
   - Node.js (v16 or higher)
   - Expo CLI: `npm install -g @expo/cli`

2. **Installation:**
   ```bash
   cd MonovoApp
   npm install
   ```

3. **Run the app:**
   ```bash
   npx expo start
   ```
   - Press `w` to open in web browser
   - Press `a` to open in Android emulator
   - Press `i` to open in iOS simulator

## 📱 What Was Replicated from the Video

### Core Features Implemented:
- ✅ **Safe Area Rendering** - Proper handling of notches and navigation areas
- ✅ **Bottom Tab Navigation** - Home, Bag, and Saved tabs with proper icons
- ✅ **Item Grid Display** - Clothing items displayed in clean grid layout
- ✅ **Outfit Cards** - Asymmetric collage layout showing outfit combinations
- ✅ **Filter System** - Dropdown filters for Type, Style, Mood, and Color
- ✅ **Filter Chips** - Interactive filter chips with active states
- ✅ **Save Functionality** - Bookmark icons for saving/removing items and outfits
- ✅ **Responsive Design** - Works on mobile resolutions with proper spacing

### Visual Fidelity:
- ✅ **Pixel-accurate layouts** - Matching spacing, typography, and card shapes
- ✅ **Consistent styling** - Unified color scheme and component design
- ✅ **Proper shadows and borders** - Card elevation and visual hierarchy
- ✅ **Icon consistency** - Ionicons used throughout for navigation and actions

## 🏗️ Component Structure & State Management

### Component Architecture:
```
src/
├── components/
│   ├── ItemCard.tsx          # Individual clothing item display
│   ├── OutfitCard.tsx        # Outfit collage with asymmetric layout
│   ├── FilterChip.tsx        # Interactive filter selection chips
│   └── DropdownFilter.tsx    # Advanced dropdown filtering
├── screens/
│   ├── HomeScreen.tsx        # Main home tab with item grid
│   ├── BagScreen.tsx         # Shopping bag tab
│   └── SavedScreen.tsx       # Saved items with filtering
├── navigation/
│   └── AppNavigator.tsx      # Bottom tab navigation setup
├── data/
│   └── mockData.ts           # Mock clothing items and outfits
└── constants/
    ├── colors.ts             # Color mapping utilities
    ├── navigation.ts         # Navigation constants
    ├── theme.ts              # Global theme colors
    └── index.ts              # Barrel exports
```

### State Management:
- **Local Component State** - Using React hooks (`useState`, `useMemo`)
- **No External State Library** - Simple client-side state management
- **Filter State** - Managed in SavedScreen with real-time updates
- **Tab State** - Collections/Outfits/Items tabs with proper switching

### Key Components:

#### ItemCard
- Displays individual clothing items with image, name, and style badges
- Conditional border styling (HomeScreen vs SavedScreen)
- Touch animations with spring physics
- Save icon functionality

#### OutfitCard
- Asymmetric collage layout (main card + two stacked cards)
- Displays outfit combinations with proper image handling
- Save icon positioned at bottom right
- Smooth entrance animations

#### FilterChip
- Interactive filter selection with active states
- Spring animations for touch feedback
- Consistent styling with theme colors

#### DropdownFilter
- Advanced filtering with dropdown interface
- Type, Style, Mood, and Color filters
- Real-time filter updates

## 🎨 Animations & Interactions Implemented

### Micro-Interactions:
- **Touch Feedback** - Gentle scale animations on card press (0.95-0.96 scale)
- **Filter Chips** - Quick scale-down (0.92) with snappy spring animation
- **Save Icons** - Immediate visual feedback on interaction

### Card Entrance Animations:
- **Staggered Animations** - Cards appear with 100ms delays for natural flow
- **Fade-in Effects** - Smooth 300-400ms opacity transitions
- **Performance Optimized** - Hardware-accelerated animations using native driver

### Springy Transitions:
- **Spring Physics** - Tension: 300, Friction: 8-10 for natural feel
- **Consistent Timing** - 300-400ms duration for responsive interactions
- **Native Driver** - All animations use hardware acceleration

### FlatList Optimizations:
- **removeClippedSubviews** - Better memory management
- **maxToRenderPerBatch: 5** - Smooth rendering performance
- **updateCellsBatchingPeriod: 50ms** - Responsive updates
- **getItemLayout** - Optimized scrolling performance

## 🔧 Technical Implementation

### Technology Stack:
- **React Native** with Expo SDK 54
- **TypeScript** for type safety
- **React Navigation** for bottom tab navigation
- **Expo Vector Icons** for consistent iconography
- **React Native Safe Area Context** for proper safe area handling

### Key Features:
- **Global Theme System** - Centralized color constants in `theme.ts`
- **Conditional Styling** - Dynamic borders and layouts based on context
- **Performance Optimizations** - Efficient FlatList rendering and memory management
- **Accessibility** - Proper touch targets (≥44px) and logical tab order
- **Responsive Design** - Works on typical mobile resolutions

### Code Quality:
- **Clean Architecture** - Modular components with clear separation of concerns
- **TypeScript** - Full type safety throughout the application
- **Constants Management** - Centralized configuration and theme values
- **No Unused Code** - Removed unused files and components

## 📋 Assumptions and Limitations

### Assumptions Made:
1. **Mock Data** - Used hardcoded JSON data for items and outfits (as per assignment requirements)
2. **Client-Side Only** - No backend integration, all filtering and state management is client-side
3. **Single User** - No user authentication or personalization features
4. **Static Content** - Item images are from Unsplash, not dynamic content
5. **Mobile First** - Optimized for mobile devices, web compatibility through React Native Web

### Limitations:
1. **No Backend** - All data is static mock data
2. **No Persistence** - Saved items are not persisted between app sessions
3. **Limited Filtering** - Basic client-side filtering without advanced search
4. **No Shopping Cart** - Bag screen is placeholder (as per original requirements)
5. **No Item Details** - No detailed view for individual items
6. **No User Accounts** - No authentication or user-specific features

### Performance Considerations:
- **Image Loading** - Uses external URLs which may have loading delays
- **Memory Usage** - FlatList optimizations implemented to handle large datasets
- **Animation Performance** - All animations use native driver for 60fps performance

## 🎯 Assignment Compliance

### ✅ Completed Requirements:
- **Pixel Fidelity** - Layout spacing, typography, and card shapes match reference
- **Smooth Animations** - Card entrance, micro-interactions, and springy transitions
- **Responsive Design** - Works on mobile resolutions
- **Accessibility** - Logical tab order and proper touch targets
- **Clean Code Structure** - Modular components with clear organization
- **Client-Side Filtering** - Real-time filter updates without backend
- **Expo Snack Compatible** - Ready for web deployment

### 🎨 Visual & Interaction Requirements Met:
- **Filter Chips** - Active state pills with real-time selection reflection
- **Outfit Cards** - Asymmetric collage layout with proper image tiles
- **Smooth Scrolling** - Buttery scroll behavior with no layout jumpiness
- **Micro-Interactions** - Subtle animations on chip toggles and card interactions

## 📦 Dependencies

### Core Dependencies:
```json
{
  "expo": "~54.0.7",
  "react": "18.3.1",
  "react-native": "0.76.3",
  "@react-navigation/native": "^6.1.18",
  "@react-navigation/bottom-tabs": "^6.5.20",
  "react-native-safe-area-context": "^4.12.0",
  "expo-font": "~13.0.1",
  "react-native-gesture-handler": "~2.20.2"
}
```

### Development Dependencies:
- TypeScript support
- Expo CLI for development and building
- ESLint for code quality

## 🚀 Deployment Ready

The application is fully ready for:
- **Expo Snack deployment** for web testing
- **GitHub repository** with clean, documented code
- **Production builds** with proper optimization

All assignment requirements have been met with a focus on clean code, smooth animations, and pixel-perfect UI implementation.

---

**Built with ❤️ using React Native and Expo**