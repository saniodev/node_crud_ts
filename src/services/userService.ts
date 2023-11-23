import { Request, Response } from 'express';
import { createUser, deleteUser, findAllUsers, updateUser } from '../database/prisma/model/userModel';

export const createUserService = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body } = req;

    const user = await createUser(body);
    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const findUserService = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await findAllUsers();
    res.status(200).json({ users, message: 'Users fetched successfully' });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const updateUserService = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const { body } = req;

    const userId = parseInt(id, 10);

    const updatedUser = await updateUser(userId, body);

    if (updatedUser) {
      res.status(200).json({ user: updatedUser, message: 'User updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteUserService = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const userId = parseInt(id, 10);

    const deletedUser = await deleteUser(userId);

    if (deletedUser) {
      res.status(200).json({ user: deletedUser, message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};