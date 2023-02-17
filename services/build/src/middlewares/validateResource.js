"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateResource = (schema) => (req, res, next) => {
    try {
        console.log("THIS");
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
    }
    catch (error) {
        return res.status(400).json({ error: error instanceof Error && JSON.parse(error.message) });
    }
};
exports.default = validateResource;
