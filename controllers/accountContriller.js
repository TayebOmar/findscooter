import express from 'express';
const router = express.Router();
import bcryptjs from 'bcryptjs';
import jsonwebtoker from 'jsonwebtoken';
import Account from '../models/accountModel';

router.post('/signup' , (req , res) => {});

router.post('/verify' , (req , res) => {});

router.post('/login' , (req , res) => {});

router.get('/getAccount', (req , res) => {})


export default router;