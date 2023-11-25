"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const createBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = req.body;
        const newBlogPost = yield index_1.prisma.post.create({
            data: {
                title,
                content,
            },
        });
        res.status(200).json(newBlogPost);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const createPostAndComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, comments } = req.body;
        const newBlogPost = yield index_1.prisma.post.create({
            data: {
                title,
                content,
                comments: {
                    create: comments,
                },
            },
            include: {
                comments: true, // Include the comments in the response
            }
        });
        res.status(200).json(newBlogPost);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const getBlogPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogPosts = yield index_1.prisma.post.findMany();
        res.status(200).json(blogPosts);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const getBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const blogPost = yield index_1.prisma.post.findUnique({
            where: {
                id: Number(id),
            },
        });
        res.status(200).json(blogPost);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const updateBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, title, content } = req.body;
        const updatedBlogPost = yield index_1.prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                title,
                content,
            },
        });
        res.status(200).json(updatedBlogPost);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const deleteBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const deletedBlogPost = yield index_1.prisma.post.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(200).json(deletedBlogPost);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const deleteAllBlogPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBlogPosts = yield index_1.prisma.post.deleteMany();
        res.status(200).json(deletedBlogPosts);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
const likeBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const likedBlogPost = yield index_1.prisma.post.update({
            where: {
                id: Number(id),
            },
            data: {
                likesCount: {
                    increment: 1,
                },
            },
        });
        res.status(200).json(likedBlogPost);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
});
exports.default = {
    createBlogPost,
    createPostAndComments,
    getBlogPosts,
    getBlogPost,
    updateBlogPost,
    deleteBlogPost,
    deleteAllBlogPosts,
    likeBlogPost,
};
