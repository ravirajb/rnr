"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../../controllers/post/controller"));
const router = express_1.default.Router();
router.post("/create", controller_1.default.createBlogPost);
router.post("/createPostAndComments", controller_1.default.createPostAndComments);
router.get("/getall", controller_1.default.getBlogPosts);
router.get("/get/:id", controller_1.default.getBlogPost);
router.put("/update/:id", controller_1.default.updateBlogPost);
router.delete("/delete/:id", controller_1.default.deleteBlogPost);
router.delete("/deleteall", controller_1.default.deleteAllBlogPosts);
router.post("/like", controller_1.default.likeBlogPost);
exports.default = router;
