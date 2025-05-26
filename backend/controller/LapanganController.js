import Field from "../models/LapanganModel.js";

// Get all fields
export const getFields = async (req, res) => {
    try {
        const fields = await Field.findAll();
        res.json(fields);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get field by ID
export const getFieldById = async (req, res) => {
    try {
        const field = await Field.findByPk(req.params.id);
        if (!field) return res.status(404).json({ message: "Field not found" });
        res.json(field);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new field
export const createField = async (req, res) => {
    try {
        const field = await Field.create(req.body);
        res.status(201).json(field);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update field
export const updateField = async (req, res) => {
    try {
        const field = await Field.findByPk(req.params.id);
        if (!field) return res.status(404).json({ message: "Field not found" });
        await field.update(req.body);
        res.json(field);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete field
export const deleteField = async (req, res) => {
    try {
        const field = await Field.findByPk(req.params.id);
        if (!field) return res.status(404).json({ message: "Field not found" });
        await field.destroy();
        res.json({ message: "Field deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
