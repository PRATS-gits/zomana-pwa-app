
import { supabase } from './client';
import { sportsFitnessProducts } from '@/data/sportsFitnessProducts';

export const loadSportsFitnessProducts = async () => {
  console.log("Starting Sports & Fitness product seeding process...");
  
  try {
    // First check if there are any products in the Sports & Fitness category
    const { count, error: countError } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true })
      .eq('category', 'Sports & Fitness');
      
    if (countError) {
      console.error('Error checking Sports & Fitness products:', countError);
      return { success: false, error: countError };
    }
    
    // If products already exist in this category, don't add more
    if (count && count > 0) {
      console.log(`${count} Sports & Fitness products already exist. Skipping import.`);
      return { success: true, added: 0, message: "Products already exist" };
    }
    
    console.log("No Sports & Fitness products found. Adding sample products...");
    
    let addedCount = 0;
    
    // Insert each product
    for (const product of sportsFitnessProducts) {
      // Insert product
      const { data: insertedProduct, error: productError } = await supabase
        .from('products')
        .insert({
          title: product.title,
          description: product.description,
          price: product.price,
          original_price: product.originalPrice,
          category: 'Sports & Fitness',
          subcategory: product.subcategory,
          rating: product.rating,
          review_count: product.reviewCount,
          is_new: product.isNew,
          on_sale: product.onSale,
          stock: product.stock
        })
        .select('id')
        .single();
        
      if (productError) {
        console.error(`Error inserting product ${product.title}:`, productError);
        continue;
      }
      
      const productId = insertedProduct.id;
      
      // Insert product images
      for (let i = 0; i < product.images.length; i++) {
        const { error: imageError } = await supabase
          .from('product_images')
          .insert({
            product_id: productId,
            image_url: product.images[i],
            is_primary: i === 0, // First image is primary
            display_order: i
          });
          
        if (imageError) {
          console.error(`Error inserting image for ${product.title}:`, imageError);
        }
      }
      
      // Insert product features if they exist
      if (product.features) {
        for (let i = 0; i < product.features.length; i++) {
          const { error: featureError } = await supabase
            .from('product_features')
            .insert({
              product_id: productId,
              feature: product.features[i],
              display_order: i
            });
            
          if (featureError) {
            console.error(`Error inserting feature for ${product.title}:`, featureError);
          }
        }
      }
      
      // Insert product specifications if they exist
      if (product.specifications) {
        for (const [key, value] of Object.entries(product.specifications)) {
          const { error: specError } = await supabase
            .from('product_specifications')
            .insert({
              product_id: productId,
              specification_key: key,
              specification_value: value
            });
            
          if (specError) {
            console.error(`Error inserting specification for ${product.title}:`, specError);
          }
        }
      }
      
      console.log(`Successfully seeded product: ${product.title}`);
      addedCount++;
    }
    
    console.log(`Sports & Fitness product seeding completed! Added ${addedCount} products.`);
    return { success: true, added: addedCount };
  } catch (error) {
    console.error("Error in loadSportsFitnessProducts:", error);
    return { success: false, error };
  }
};
