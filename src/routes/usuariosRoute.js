import { Router } from "express";
import { getUser, putUser, postUser,deleteUser,getUserById } from "../controllers/usuariosController.js";
import { verificarAdmin } from "../middlewares/verificarAdminMiddleware.js";

const router = Router();

router.get("/users", getUser);
router.post("/users", postUser);
router.put("/users/:id",putUser);
router.delete("/users/:id",verificarAdmin, deleteUser);
router.get("/users/:id" , getUserById);

export default router;