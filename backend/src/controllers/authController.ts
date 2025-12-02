import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";

export const register = async(req: Request, res: Response) => {
    try {
        const{name, email, password} = req.body;

        const exist = await User.findOne({email});
        if(exist) {
            return res.status(400).json({message: "User already registerd."});
        }

        const hash = bcrypt.hash(password, 10);
        // await User.create({
        //     name, email, password:hash
        // });

    } catch(error) {

    }
};