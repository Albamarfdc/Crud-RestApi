import { Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email } = req.body;

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email= email
    await user.save();

    console.log(user);

    return res.json(user);
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user) return res.status(404).json({ message: "User not found" });

    await User.update({ id: parseInt(id) }, req.body);
    return res.sendStatus(204);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await User.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });
    return res.sendStatus(204);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
  }
};

export const getUser = async (req:Request, res:Response) =>{
  try{
    const {id}= req.params;
    const user = await User.findOneBy({id:parseInt(id)});
    return res.json(user);
  }
  catch(err){
    if(err instanceof Error) return res.status(500).json({message:err.message});
  }

}