import { getProduto,getProdutoById,postProduto,putProduto,deleteProduto } from "../controllers/produtosController.js";
import { Router } from "express";

const router = Router();

router.get("/produtos",getProduto);
router.get("/produtos/:id", getProdutoById);
router.post("/produtos",postProduto);
router.put("/produtos/:id", putProduto);
router.delete("/produtos/:id", deleteProduto);

export default router;