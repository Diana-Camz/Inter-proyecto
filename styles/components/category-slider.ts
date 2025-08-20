import { colors } from "@/themes";
import { StyleSheet } from "react-native";

export const categorySlider = StyleSheet.create({
    container: { 
        flex: 1
     },
    sliderContainer: { 
        height: 80, 
        backgroundColor: colors.white, 
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
        height: 80, 
    },
    categoryItemSelected: { 
        height: 80, 
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
});