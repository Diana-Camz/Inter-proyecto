import { coffeeIcons } from '@/assets/icons/coffeeIcons';
import React, { useRef, useState } from 'react';
import {
    FlatList,
    Image,
    ImageSourcePropType,
    ListRenderItemInfo,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
// import categoriesData from '../constants/data/coffeeCategories.json'
// import productsData from '../constants/data/productsList.json'

// Interfaces para TypeScript
interface Category {
    id: string;
    name: string;
    isSelected: boolean;
    icon: ImageSourcePropType;
}

interface Product {
    id: string;
    name: string;
    price: string;
}

// Datos de ejemplo para las categorías
const categoriesData: Category[] = [
    { id: '1', name: 'Espresso Bar', isSelected: true, icon: coffeeIcons.americano },
    { id: '2', name: 'Bebidas Espresso Frias', isSelected: false, icon: coffeeIcons.americano },
    { id: '3', name: 'Brew Bar', isSelected: false, icon: coffeeIcons.americano },
    { id: '4', name: 'Cold Brew', isSelected: false, icon: coffeeIcons.coldBrew },
    { id: '5', name: 'Alternativas al Café', isSelected: false, icon: coffeeIcons.matchaCaliente },
    { id: '6', name: 'Refreshments', isSelected: false, icon: coffeeIcons.dragonLata },
    { id: '7', name: 'Frappes', isSelected: false, icon: coffeeIcons.frappeMocha },
    { id: '8', name: 'Bebidas de Autor', isSelected: false, icon: coffeeIcons.strawberryMatcha },
    { id: '9', name: 'Otras Bebidas', isSelected: false, icon: coffeeIcons.americano },
    { id: '10', name: 'Cocktails', isSelected: false, icon: coffeeIcons.carajillo },
    { id: '11', name: 'Lo Dulce', isSelected: false, icon: coffeeIcons.americano },
    { id: '12', name: 'Nuestra Merch', isSelected: false, icon: coffeeIcons.americano },
];

// Datos de ejemplo para los productos según categoría
const productsData: { [key: string]: Product[] } = {
    '1': [
        { id: '1-1', name: 'Espresso', price: '$2.50' },
        { id: '1-2', name: 'Doppio', price: '$3.00' },
        { id: '1-3', name: 'Macchiato', price: '$3.50' },
    ],
    '2': [
        { id: '2-1', name: 'Iced Americano', price: '$3.50' },
        { id: '2-2', name: 'Iced Latte', price: '$4.00' },
        { id: '2-3', name: 'Cold Espresso', price: '$3.75' },
    ],
    '3': [
        { id: '3-1', name: 'Pour Over', price: '$4.50' },
        { id: '3-2', name: 'Aeropress', price: '$4.00' },
        { id: '3-3', name: 'French Press', price: '$4.25' },
    ],
    '4': [
        { id: '4-1', name: 'Original Cold Brew', price: '$4.50' },
        { id: '4-2', name: 'Vanilla Cold Brew', price: '$5.00' },
        { id: '4-3', name: 'Nitró Cold Brew', price: '$5.50' },
    ],
    '5': [
        { id: '5-1', name: 'Café Americano', price: '$2.50' },
        { id: '5-2', name: 'Cappuccino', price: '$3.50' },
        { id: '5-3', name: 'Café Mocha', price: '$4.00' },
    ],
    '6': [
        { id: '6-1', name: 'Té Verde', price: '$2.50' },
        { id: '6-2', name: 'Té Negro', price: '$2.50' },
        { id: '6-3', name: 'Té de Hierbas', price: '$3.00' },
    ],
    '7': [
        { id: '7-1', name: 'Limonada', price: '$3.00' },
        { id: '7-2', name: 'Refresco de Cola', price: '$2.50' },
        { id: '7-3', name: 'Agua Mineral', price: '$2.00' },
    ],
    '8': [
        { id: '7-1', name: 'Limonada', price: '$3.00' },
        { id: '7-2', name: 'Refresco de Cola', price: '$2.50' },
        { id: '7-3', name: 'Agua Mineral', price: '$2.00' },
    ],
    '9': [
        { id: '7-1', name: 'Limonada', price: '$3.00' },
        { id: '7-2', name: 'Refresco de Cola', price: '$2.50' },
        { id: '7-3', name: 'Agua Mineral', price: '$2.00' },
    ],
    '10': [
        { id: '7-1', name: 'Limonada', price: '$3.00' },
        { id: '7-2', name: 'Refresco de Cola', price: '$2.50' },
        { id: '7-3', name: 'Agua Mineral', price: '$2.00' },
    ],
    '11': [
        { id: '7-1', name: 'Limonada', price: '$3.00' },
        { id: '7-2', name: 'Refresco de Cola', price: '$2.50' },
        { id: '7-3', name: 'Agua Mineral', price: '$2.00' },
    ],
    '12': [
        { id: '7-1', name: 'Limonada', price: '$3.00' },
        { id: '7-2', name: 'Refresco de Cola', price: '$2.50' },
        { id: '7-3', name: 'Agua Mineral', price: '$2.00' },
    ],
};

const CategorySlider = () => {
    const [categories, setCategories] = useState<Category[]>(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState<string>('1');
    const flatListRef = useRef<FlatList<Category>>(null);

    const handleCategoryPress = (id: string, index: number) => {
        // Actualizar selección
        const updatedCategories = categories.map(cat => ({
            ...cat,
            isSelected: cat.id === id
        }));

        setCategories(updatedCategories);
        setSelectedCategory(id);

        // Scroll para centrar la categoría seleccionada
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index,
                animated: true,
            });
        }
    };

    // Función getItemLayout con el tipo correcto
    const getItemLayout = (
        data: ArrayLike<Category> | null | undefined,
        index: number
    ) => {
        const textLength = categories[index].name.length;
        const itemWidth = Math.max(80, textLength * 8 + 32);

        return {
            length: itemWidth + 12,
            offset: (itemWidth + 12) * index,
            index,
        };
    };

    const renderCategoryItem = ({ item, index }: ListRenderItemInfo<Category>) => {
        const isSelected = item.id === selectedCategory;

        return (
            <TouchableOpacity
                onPress={() => handleCategoryPress(item.id, index)}
                style={[
                    styles.categoryItem,
                    isSelected ? styles.categoryItemSelected : styles.categoryItemNormal
                ]}
            >
                <Image
                    source={item.icon}
                    style={styles.categoryIcon}
                    resizeMode="contain"
                />
                <Text
                    style={[
                        styles.categoryText,
                        isSelected ? styles.categoryTextSelected : styles.categoryTextNormal
                    ]}
                    numberOfLines={1}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <FlatList
                    ref={flatListRef}
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={styles.sliderContent}
                    snapToAlignment="center"
                    decelerationRate="fast"
                    getItemLayout={getItemLayout}
                    snapToInterval={100}
                />
            </View>

            <View style={styles.productsContainer}>
                <Text style={styles.productsTitle}>
                    Productos en {categories.find(c => c.id === selectedCategory)?.name}
                </Text>
                {productsData[selectedCategory].map(product => (
                    <View key={product.id} style={styles.productItem}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.price}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    sliderContainer: {
        height: 77,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    sliderContent: {
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    categoryItem: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
        borderRadius: 12,
        paddingHorizontal: 16,
    },
    categoryItemNormal: {
        height: 52,
        backgroundColor: '#f0f0f0',
    },
    categoryItemSelected: {
        height: 75,
        backgroundColor: '#c8c8c8',
    },
    categoryText: {
        fontWeight: '600',
    },
    categoryTextNormal: {
        fontSize: 14,
        color: '#333',
    },
    categoryTextSelected: {
        fontSize: 16,
        color: '#fff',
    },
    categoryIcon: {
        width: 35,
        height: 35,
        marginBottom: 2
    },
    productsContainer: {
        flex: 1,
        padding: 16,
    },
    productsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    productName: {
        fontSize: 16,
        color: '#333',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8B4513',
    },
});

export default CategorySlider;