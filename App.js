import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator id="main">
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
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
