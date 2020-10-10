import Model from '../models/index';

exports.create = (req, res) => {
    /**
     * Create a category
     */
    const category = new Model.Catergories({
        name: req.body.name
    });
    /**
     * Save category to database
     */
    category
        .save()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Category.",
            });
        });
};
/**
 * Find all Catergories
 */
exports.findAll = (req, res) => {
    Model.Catergories.find()
        .sort({
            name: -1
        })
        .then((catergories) => {
            res.status(200).send(catergories);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
};
/**
 * Find one category
 */
exports.findOne = (req, res) => {
    Model.Catergories.findById(req.params.id)
        .then((category) => {
            if (!category) {
                return res.status(404).send({
                    message: "category not found with id " + req.params.id,
                });
            }
            res.status(200).send(category);
            console.log(category);
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Error retrieving category with id " + req.params.id,
            });
        });
};

/**
 * Delete a category with the specified id in the request
 */
exports.delete = (req, res) => {
    Model.Catergories.findByIdAndRemove(req.params.id)
        .then((category) => {
            if (!category) {
                return res.status(404).send({
                    message: "User not found ",
                });
            }
            res.status(200).send({
                message: "category deleted successfully!"
            });
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete category ",
            });
        });
};

/**
 * Update a category with the specified id in the request
 */
exports.updateCategory = (req, res) => {
    Model.Catergories.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then((category) => {
            if (!category) {
                return res.status(404).send({
                    message: "no category found",
                });
            }
            res.status(200).send(category);
        })
        .catch((err) => {
            return res.status(404).send({
                message: "error while updating the category",
            });
        });
};