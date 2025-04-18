import { ESGCategories } from '@/types/esg-category-type';
import ESGCategoriesData from './origin-data/esg-categories.json';

export async function getESGCategories() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return ESGCategoriesData as ESGCategories
}
