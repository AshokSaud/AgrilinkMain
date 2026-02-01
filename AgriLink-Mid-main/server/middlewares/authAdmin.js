import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authAdmin = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(tokenDecode.id);
        if (user && user.role === 'admin') {
            req.admin = user;
            next();
        } else {
            return res.json({ success: false, message: 'Not Authorized' });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default authAdmin;