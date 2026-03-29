export const logger = (req, res, next) => {
    const metodo = req.method;
    const rota = req.url;
    const data = new Date().toISOString();

    console.log(`${metodo} ${rota} ${data}`);

    next();
}