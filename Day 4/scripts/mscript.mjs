import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31'
});

// Function to remove duplicate cars with the same ID
async function removeDuplicateCars() {
  try {
    console.log('Checking for duplicate car IDs in Sanity...');

    // Fetch all cars
    const cars = await client.fetch('*[_type == "car"] { _id, id }');

    const seenIds = new Map(); // Stores ID -> _id mapping
    let deletedCount = 0;

    for (const car of cars) {
      if (seenIds.has(car.id)) {
        // Found a duplicate, delete the older entry
        console.log(`Deleting duplicate car with ID: ${car.id}`);
        await client.delete(car._id);
        deletedCount++;
      } else {
        seenIds.set(car.id, car._id);
      }
    }

    console.log(`Deleted ${deletedCount} duplicate cars.`);
  } catch (error) {
    console.error('Error removing duplicate cars:', error);
  }
}

// Function to import data
async function importData() {
  try {
    // Step 1: Remove duplicate cars
    await removeDuplicateCars();

    console.log('Fetching car data from API...');

    const response = await axios.get('https://sanity-nextjs-application.vercel.app/api/hackathon/template7');
    const cars = response.data;
    console.log(`Fetched ${cars.length} cars`);

    for (const car of cars) {
      if (!car.id) {
        console.warn(`Skipping car with no ID: ${car.name || 'Unknown Car'}`);
        continue;
      }

      const carId = String(car.id);
      console.log(`Processing car: ${car.name} (ID: ${carId})`);

      // Check if the car already exists
      const existingCar = await client.fetch('*[_type == "car" && id == $id][0]', { id: carId });

      let imageRef = null;
      if (car.image_url) {
        imageRef = await uploadImageToSanity(car.image_url);
      }

      const sanityCar = {
        _type: 'car',
        id: carId,
        name: car.name,
        brand: car.brand || null,
        type: car.type,
        fuelCapacity: car.fuel_capacity,
        transmission: car.transmission,
        seatingCapacity: car.seating_capacity,
        pricePerDay: car.price_per_day,
        originalPrice: car.original_price || null,
        tags: car.tags || [],
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      if (existingCar) {
        console.log(`Updating existing car in Sanity: ${sanityCar.name}`);
        await client.patch(existingCar._id).set(sanityCar).commit();
        console.log(`Car updated successfully: ${existingCar._id}`);
      } else {
        console.log(`Uploading new car to Sanity: ${sanityCar.name}`);
        const result = await client.create(sanityCar);
        console.log(`Car uploaded successfully: ${result._id}`);
      }
    }

    const totalCars = await client.fetch('count(*[_type == "car"])');
    console.log(`Total cars in Sanity: ${totalCars}`);

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image: ${imageUrl}`, error);
    return null;
  }
}

// Start import process
importData();
