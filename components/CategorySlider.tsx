import { coffeeIcons } from '@/assets/icons/coffeeIcons';
import { categorySlider } from '@/styles/components/category-slider';
import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import coffeeCategories from '../constants/data/coffeeCategories.json';

interface Category {
    id: string;
    name: string;
    isSelected: boolean;
    icon: ImageSourcePropType;
}

  const categoriesData: Category[] = coffeeCategories.coffeeCategories.map(cat => ({
    ...cat,
    icon: coffeeIcons[cat.icon as keyof typeof coffeeIcons] || coffeeIcons.americano
  }));


const CategorySlider = () => {
    const [categories, setCategories] = useState<Category[]>(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState<string>('1');
    const flatListRef = useRef<FlatList<Category>>(null);

    const handleCategoryPress = (id: string) => {
        const updatedCategories = categories.map(cat => ({
            ...cat,
            isSelected: cat.id === id,
        }));
        setCategories(updatedCategories);
        setSelectedCategory(id);

        const index = categories.findIndex(cat => cat.id === id);
        
        if (index !== -1 && flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: index,
                animated: true,
                viewPosition: 0.1, // Centers the item
            });
        }
    };

    const renderCategoryItem = ({ item }: ListRenderItemInfo<Category>) => {
        const isSelected = item.id === selectedCategory;

        return (
            <TouchableOpacity
                onPress={() => handleCategoryPress(item.id)}
                style={[
                    categorySlider.categoryItem,
                    isSelected ? categorySlider.categoryItemSelected : categorySlider.categoryItemNormal,
                ]}
            >
                <Image
                    source={item.icon}
                    style={categorySlider.categoryIcon}
                    resizeMode="contain"
                />
                <Text
                    style={[
                        categorySlider.categoryText,
                        isSelected ? categorySlider.categoryTextSelected : categorySlider.categoryTextNormal,
                    ]}
                    numberOfLines={1}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={categorySlider.container}>
            <View style={categorySlider.sliderContainer}>
                <FlatList
                    ref={flatListRef}
                    data={categories}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={categorySlider.sliderContent}
                    decelerationRate="fast"
                    scrollEventThrottle={16}
                    getItemLayout={(data, index) => ({
                        length: 100, // Estimated with of each item
                        offset: 100 * index,
                        index,
                    })}
                />
            </View>

            <View style={categorySlider.productsContainer}>
                <Text style={categorySlider.productsTitle}>
                    {categories.find(c => c.id === selectedCategory)?.name}
                </Text>
            </View>
        </View>
    );
};

export default CategorySlider;
