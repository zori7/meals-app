import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {CATEGORIES} from "./data/dummy-data";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator id="main">
                <Stack.Screen name="Categories" options={{ title: 'All Categories', headerStyle: { backgroundColor: '#82a6ea' } }} component={CategoriesScreen} />
                <Stack.Screen name="MealsOverview" options={({ route }) => {
                    const category = CATEGORIES.find((item) => item.id === route.params.id)
                    return { title: category.title }
                }} component={MealsOverviewScreen} />
                <Stack.Screen
                    name="MealDetail"
                    options={{ title: 'Meal Detail' }}
                    component={MealDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
