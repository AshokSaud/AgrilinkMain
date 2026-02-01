import User from '../models/User.js';
import Seller from '../models/Seller.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ role: 'user' });
        res.json({ success: true, users });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get all sellers
export const getAllSellers = async (req, res) => {
    try {
        const sellers = await Seller.find({});
        res.json({ success: true, sellers });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).populate('seller', 'name');
        res.json({ success: true, products });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get all orders
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('userId', 'name email').populate('items.productId', 'name');
        res.json({ success: true, orders });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Delete user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        await User.findByIdAndDelete(id);
        res.json({ success: true, message: 'User deleted' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Delete seller
export const deleteSeller = async (req, res) => {
    try {
        const { id } = req.body;
        await Seller.findByIdAndDelete(id);
        // Also delete their products
        await Product.deleteMany({ seller: id });
        res.json({ success: true, message: 'Seller and their products deleted' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Delete product
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.body;
        await Product.findByIdAndDelete(id);
        res.json({ success: true, message: 'Product deleted' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};