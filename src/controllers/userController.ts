import { Request, Response } from 'express';
import { createUserService, findUserService, updateUserService, deleteUserService } from '../services/userService';

export const createUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await createUserService(req, res);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const findAllUsersController = async (_req: Request, res: Response): Promise<void> => {
  try {
    await findUserService(_req, res);
  } catch (error) {
    console.error('Error in findAllUsersController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    await updateUserService(req, res);
  } catch (error) {
    console.error('Error in updateUserController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
  try {
    await deleteUserService(req, res);
  } catch (error) {
    console.error('Error in deleteUserController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}