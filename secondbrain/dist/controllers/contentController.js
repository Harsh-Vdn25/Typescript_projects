"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readContent = exports.deleteContent = exports.updateContent = exports.readAllContent = exports.postContent = void 0;
const postContent = async (req, res) => {
    const { title, link, type, tags } = req.body;
    try {
        //fetch userId from the token
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Serverside problem' });
    }
};
exports.postContent = postContent;
const readAllContent = async (req, res) => {
};
exports.readAllContent = readAllContent;
const updateContent = async (req, res) => {
};
exports.updateContent = updateContent;
const deleteContent = async (req, res) => {
};
exports.deleteContent = deleteContent;
const readContent = async (req, res) => {
};
exports.readContent = readContent;
//# sourceMappingURL=contentController.js.map