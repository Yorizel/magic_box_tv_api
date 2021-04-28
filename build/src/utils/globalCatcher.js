"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (func) => (req, res, next) => {
    func(req, res, next).catch(next);
};
