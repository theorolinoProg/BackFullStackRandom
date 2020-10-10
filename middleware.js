import { Router } from 'express';
import user from './models/user';


function authMiddleware(req, res, next) {
    console.log(req.headers.authorization);
    // en cours
    next();
}
