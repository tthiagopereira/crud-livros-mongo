import express from "express";
import LivroController from "../livro/controllers/livrosController.js";

const router = express.Router();

router
    .get('/livros', LivroController.index)
    .get('/livros/:id', LivroController.findById)
    .put('/livros/:id', LivroController.update)
    .post('/livros', LivroController.create)
    .delete('/livros/:id', LivroController.remove)

export default router;