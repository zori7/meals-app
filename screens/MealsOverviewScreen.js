import {FlatList, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {useMemo} from "react";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
    const meals = useMemo(() => {
        return MEALS.filter((item) => item.categoryIds.includes(route.params.id))
    }, [])

    return (
        <View style={styles.container}>
            {meals.length <= 0 && <Text>No data</Text>}

            <FlatList
                style={{ marginTop: 32, padding: 8 }}
                contentContainerStyle={{ gap: 16 }}
                data={meals}
                renderItem={({ item }) => (
                    <MealItem item={item} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 48
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
})

export default MealsOverviewScreen
