import { Request, Response } from "express";
import Game from "../models/Game";

export const getAllGames = async (req: Request, res: Response) => {
  const games = await Game.find();

  try {
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};

export const getGameById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const singleGame = await Game.findById({_id: id});

  try {
    return res.status(200).json(singleGame);
  } catch (error) {
    return res.status(500).json({err: error});
  }
}

export const createGame = async (req: Request, res: Response) => {
  try {
    const gameToCreate = await Game.create(req.body);
    return res.status(201).json(gameToCreate);
  } catch (error) {
    return res.status(500).json({ msg: "Cound't create the game " + error });
  }
};

export const updateGame = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body);

  try {
    const gameToUpdate = Game.findByIdAndUpdate(id, req.body, {new: true});
    return res.status(201).json(gameToUpdate);
  } catch (error) {
    return res.status(500).json({ msg: "Cound't create the game " + error });
  }
};

export const deleteGame = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Game.findByIdAndDelete(id);
    return res.status(203).json({ msg: "delete successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Cound't delete the game " + error });
  }
};

