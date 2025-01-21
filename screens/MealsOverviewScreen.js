import {StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {CATEGORIES} from "../data/dummy-data";
import {useMemo} from "react";

const MealsOverviewScreen = ({ route }) => {
    const category = useMemo(() => {
        return CATEGORIES.find((item) => item.id === route.params.id)
    }, [])

    return (
        <View style={styles.container}>
            <Text>Category: {category.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsOverviewScreen
