import { Request, Response } from "express";
import { ContentModel } from "../models/contentmodel";

export const postContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { link,title, type } = req.body;
  try {
    const newContent = await ContentModel.create({
      link: link,
      type: type,
      title:title,
      //@ts-ignore
      userId: req.userId,
    });
    res.status(201).json({ message: "Content added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Serverside problem" });
  }
};
export const readAllContent = async (req: Request, res: Response) => {
  //@ts-ignore
  const userId = req.userId;
  console.log(userId);
  try {
    const Content = await ContentModel.find({
      userId: userId,
    });
    return res.status(200).json(Content);
  } catch (err) {
    return res.status(500).json({ message: "Server side Error" });
  }
};
export const updateContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  const { link,title, type } = req.body;
  //@ts-ignore
  const userId = req.userId;
  try {
    const updated = await ContentModel.updateOne(
      {
        _id: id,
        userId: userId,
      },
      {
        title:title,
        link: link,
        type: type,
      }
    );
    if (updated.matchedCount === 0) {
      res.status(400).json({ message: "Not authorized to update" });
      return;
    }

    res.status(200).json({ message: "Successfully updated" });
  } catch (err) {
    res.status(500).json({ message: "Serverside problem" });
    return;
  }
};
export const deleteContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  //@ts-ignore
  const userId = req.userId;
  try {
    const deleted = await ContentModel.deleteOne({
      _id: id,
      userId: userId,
    });
    if (deleted.deletedCount === 0) {
      res.status(400).json({ message: "Not authorized to delete" });
      return;
    }
    res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: "Serverside problem" });
    return;
  }
};

export const readContent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.id;
  //@ts-ignore
  const userId = req.userId;
  try {
    const Content = await ContentModel.findOne({
      _id: id,
      userId: userId,
    });
    if (!Content) {
      res.status(400).json({ messsage: "Not authorized to read" });
      return;
    }
    res.status(200).json({
      Content: Content,
    });
    return;
  } catch (err) {
    res.status(500).json({ message: "Server side Error" });
    return;
  }
};