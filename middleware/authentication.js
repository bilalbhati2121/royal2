import jwt from "jsonwebtoken"
export const authentication = (req, res, next) => {
    try {
        if (!req.headers["authorization"]) {
            res.status(401).send({
                status: false,
                msg: "Auth token is required.",
                data: {}
            })

        }
        var token = req.headers["authorization"].replace("Bearer ", '');
        var passtoken = jwt.verify(token, "coching")
        //res.send(token);
        if (passtoken) {
            next();

        } else {
            res.status(401).send({
                status: false,
                msg: "Auth token is not valid.",
                data: {}
            })

        }
    } catch (err) {
        res.status(401).send({
            status: false,
            msg: "Invalid token",
            data: err
        })

    }
}