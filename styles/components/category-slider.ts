import { StyleSheet } from "react-native";

export const categorySlider = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    sliderContainer: { 
        height: 77, 
        backgroundColor: '#fff', 
        borderBottomWidth: 1, 
        borderBottomColor: '#e0e0e0' 
    },
    sliderContent: { 
        paddingHorizontal: 12, 
        alignItems: 'center' 
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
        backgroundColor: '#f0f0f0' 
    },
    categoryItemSelected: { 
        height: 75, 
        backgroundColor: '#8B4513' 
    },
    categoryText: { 
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 4,
    },
    categoryTextNormal: { 
        fontSize: 12,
        color: '#333' 
    },
    categoryTextSelected: { 
        fontSize: 12, 
        color: '#fff' 
    },
    categoryIcon: { 
        width: 30, 
        height: 30, 
        marginBottom: 2 
    },
    productsContainer: { 
        flex: 1, 
        padding: 16 
    },
    productsTitle: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 16, 
        color: '#333' 
    },
});