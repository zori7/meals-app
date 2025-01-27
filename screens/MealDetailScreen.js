import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useMemo} from "react";
import {MEALS} from "../data/dummy-data";
import {MaterialIcons} from "@expo/vector-icons";

const MealDetailScreen = ({ route }) => {
    const Meal = useMemo(() => {
        return MEALS.find((item) => item.id === route.params.id)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{ height: 200, width: '100%', objectFit: 'cover' }} source={{ uri: Meal.imageUrl }}  />
            </View>
            {Meal.isVegetarian && <MaterialIcons name="eco" size={20} style={{ color: '#29bf5b' }} />}
            <Text style={styles.titleText}>{Meal.title}</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Ingredients <MaterialIcons name='shopping-cart' /></Text>

                <View style={styles.ingredientsContainer}>
                    {Meal.ingredients.map((ingredient, i) => (
                        <Text key={i}><MaterialIcons name='check' /> {ingredient}</Text>
                    ))}
                </View>

                <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Guide</Text>

                <View style={styles.ingredientsContainer}>
                    {Meal.steps.map((step, i) => (
                        <Text key={i}><Text style={{ fontWeight: 'bold' }}>{i + 1}.</Text> {step}</Text>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        gap: 8
    },
    scrollContainer: {
        gap: 8,
        paddingBottom: 48
    },
    imageContainer: {
        marginTop: -8,
        marginLeft: -8,
        marginRight: -8,
        overflow: 'hidden',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    titleText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#035',
        marginBottom: 16
    },
    ingredientsContainer: {
        gap: 4,
        paddingLeft: 8,
        marginBottom: 16
    }
})

export default MealDetailScreen
