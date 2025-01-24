import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from '@expo/vector-icons'

const MealItem = ({ item }) => {
    return (
        <View key={item.id} style={styles.container}>
            <Pressable onPress={() => console.log(item.id)} android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={styles.innerContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <View style={styles.imageContainer}>
                        <Image style={{ height: 200, width: '100%', objectFit: 'cover' }} source={{ uri: item.imageUrl }}  />
                        {item.isVegetarian && <MaterialIcons name="eco" size={20} style={{ color: '#29bf5b' }} />}
                    </View>

                    <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Ingredients <MaterialIcons name='shopping-cart' /></Text>

                    <View style={styles.ingredientsContainer}>
                        {item.ingredients.map((ingredient, i) => (
                            <Text key={i}><MaterialIcons name='check' /> {ingredient}</Text>
                        ))}
                    </View>


                    <Text>Complexity: {item.complexity}</Text>
                    <Text>Duration: {item.duration} <MaterialIcons name="timer" size={16} style={{ color: '#174395' }} /></Text>
                    <Text>Price: {item.affordability}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 4,
        shadowColor: '#285b8e',
        shadowOpacity: 0.3,
        shadowOffset: 8,
        shadowRadius: 4,
        borderRadius: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: '#cedeff',
        gap: 8
    },
    imageContainer: {
        borderRadius: 8,
        marginBottom: 32,
        gap: 8,
        overflow: 'hidden'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#035'
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.8
    },
    ingredientsContainer: {
        gap: 4,
        paddingLeft: 8,
        marginBottom: 16
    }
})

export default MealItem
