import { Request, Response, NextFunction } from "express";

export const authEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);

    if (!email || email.length === 0) {
      return res.status(400).json({ message: "The email field is mandatory" });
    }

    if (!isValidEmail) {
      return res
        .status(400)
        .json({ message: "The email must have the format email@email.com" });
    }
    next();

};

export const authPass = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res
      .status(400)
      .json({ message: 'The "password" field is mandatory' });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: 'The "password" must have at least 6 characters' });
  }

  next();
};

export const authName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  const isValidName = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);

  if (!name) {
    return res.status(400).json({ message: "The name field is required" });
  }
  if (name.length < 3) {
    return res
      .status(400)
      .json({ message: "The name field must have at least 3 characters" });
  }

  if (!isValidName) {
    return res
      .status(400)
      .json({
        message:
          "The name field must contain only letters and follow the correct format, For example: Lucas Alves Lima.",
      });
  }

  next();
};

