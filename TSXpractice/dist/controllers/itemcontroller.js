"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.removeItem = exports.readItem = exports.readItems = exports.AddItem = void 0;
const items_js_1 = require("../models/items.js");
const AddItem = async (req, res) => {
    const { name, cost } = req.body;
    try {
        const response = await items_js_1.ItemModel.create({
            name: name,
            cost: cost
        });
        if (!response) {
            res.status(400).json({ message: "Failed to create" });
            return;
        }
        res.status(200).json({ message: "" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server side problem" });
    }
};
exports.AddItem = AddItem;
const readItems = async (res) => {
    try {
        const response = await items_js_1.ItemModel.find();
        if (!response) {
            res.status(400).json({ message: "No items present" });
            return;
        }
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
};
exports.readItems = readItems;
const readItem = async (req, res) => {
    const id = req.params['id'];
    try {
        const response = await items_js_1.ItemModel.findOne({
            _id: id
        });
        if (!response) {
            res.status(400).json({ message: "No item found" });
            return;
        }
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
};
exports.readItem = readItem;
const removeItem = async (req, res) => {
    const id = req.params['id'];
    try {
        const response = await items_js_1.ItemModel.deleteOne({
            _id: id
        });
        if (!response) {
            res.status(400).json({ message: "No item found" });
            return;
        }
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
};
exports.removeItem = removeItem;
const updateItem = async (req, res) => {
    const id = req.params['id'];
    const { name, cost } = req.body;
    try {
        const response = await items_js_1.ItemModel.updateOne({
            _id: id
        }, {
            name: name,
            cost: cost
        });
        if (!response) {
            res.status(400).json({ message: "No item found" });
            return;
        }
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
    }
};
exports.updateItem = updateItem;
//# sourceMappingURL=itemcontroller.js.map