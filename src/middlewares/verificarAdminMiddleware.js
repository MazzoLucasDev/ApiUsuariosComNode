export const verificarAdmin = (req,res,next) => {
    const admin = req.header("admin")
    if (admin !== "true") {
        return res.status(403).json({erro: "Acesso negado"})
    }
    next();
}