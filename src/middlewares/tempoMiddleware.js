export const tempo = (req,res,next) => {
    const startTime = Date.now();

    res.on("finish", () => {
        const endTime = Date.now();
        const duration = endTime - startTime;
        console.log(`${req.method} ${req.url} - ${duration}ms`)
    });

    next();
}