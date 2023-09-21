import { PrismaClient } from '@prisma/client';

let prisma;

export default async function getPrismaClient() {
    if (!prisma) {
        try {
            prisma = new PrismaClient();

        } catch (error) {
            console.error('Error initializing Prisma client:', error);
            throw error;
        }
    }

    return prisma;
}
