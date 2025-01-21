import {FlatList, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {CATEGORIES} from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
    const onSelectCategory = (category) => {
        navigation.navigate('MealsOverview', { id: category })
    }

    return (
        <View>
            <FlatList
                numColumns={2}
                contentContainerStyle={styles.container}
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.category}>
                        <Pressable onPress={() => onSelectCategory(item.id)} android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
                            <View style={[{ borderRadius: 5, flex: 1, justifyContent: 'center', alignItems: 'center' }, { backgroundColor: item.color }]}>
                                <Text style={styles.categoryText}>{item.title}</Text>
                            </View>
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    category: {
        borderRadius: 5,
        flex: 1,
        height: 150,
        elevation: 4,
        shadowColor: 0.5,
        shadowOpacity: 0.3,
        shadowOffset: 8,
        shadowRadius: 4,
        margin: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        overflow: Platform.OS ==='android' ? 'hidden' : 'visible'
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#326'
    }
})

export default CategoriesScreen
