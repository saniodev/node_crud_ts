import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (userData: User): Promise<User> => {
  return prisma.user.create({
    data: userData,
  });
};

export const findAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const updateUser = async (userId: number, userData: Partial<User>): Promise<User | null> => {
  return prisma.user.update({
    where: { id: userId },
    data: userData,
  });
};

export const deleteUser = async (userId: number): Promise<User | null> => {
  return prisma.user.delete({
    where: { id: userId },
  });
};