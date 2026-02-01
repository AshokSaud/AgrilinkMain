import express from 'express';
import { getAllUsers, getAllSellers, getAllProducts, getAllOrders, deleteUser, deleteSeller, deleteProduct } from '../controllers/adminController.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminRouter = express.Router();

adminRouter.get('/users', authAdmin, getAllUsers);
adminRouter.get('/sellers', authAdmin, getAllSellers);
adminRouter.get('/products', authAdmin, getAllProducts);
adminRouter.get('/orders', authAdmin, getAllOrders);
adminRouter.post('/delete-user', authAdmin, deleteUser);
adminRouter.post('/delete-seller', authAdmin, deleteSeller);
adminRouter.post('/delete-product', authAdmin, deleteProduct);

export default adminRouter;