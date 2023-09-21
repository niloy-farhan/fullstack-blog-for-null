import { PrismaClient } from '@prisma/client';

let prisma;

// Export a function that initializes and returns the Prisma client instance
export default async function getPrismaClient() {
    if (!prisma) {
        try {
            prisma = new PrismaClient();
            // Optionally, add other initialization code here
        } catch (error) {
            console.error('Error initializing Prisma client:', error);
            throw error; // Rethrow the error to handle it at the application level
        }
    }

    return prisma;
}
