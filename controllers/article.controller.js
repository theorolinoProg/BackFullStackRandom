import Model from '../models/index';

exports.create = (req, res) => {
    /**
     * validation request
     */
    if (!req.body.name || !req.body.category) {
        return res.status(400).send({
            message: "Required field can not be empty",
        });
    }
    /**
     * Create a model.Articles
     */
    const article = new Model.Articles({
        name: req.body.name,
        category: req.body.category
    });
    /**
     * Save article to database
     */
    article
        .save()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the article.",
            });
        });
};
/**
 * Find all article
 */
exports.findAll = (req, res) => {
    Model.Articles.find()
        .sort({
            name: -1
        })
        .then((articles) => {
            res.status(200).send(articles);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
};
/**
 * Find one article
 */
exports.findOne = (req, res) => {
    Model.Articles.findById(req.params.id)
        .then((article) => {
            if (!article) {
                return res.status(404).send({
                    message: "Article not found with id " + req.params.id,
                });
            }
            res.status(200).send(article);
            console.log(article);
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Error retrieving article with id " + req.params.id,
            });
        });
};

/**
 * Delete a article with the specified id in the request
 */
exports.delete = (req, res) => {
    Model.Articles.findByIdAndRemove(req.params.id)
        .then((article) => {
            if (!article) {
                return res.status(404).send({
                    message: "Article not found ",
                });
            }
            res.status(200).send({
                message: "Article deleted successfully!"
            });
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete user ",
            });
        });
};

/**
 * Update a article with the specified id in the request
 */
exports.updateProd = (req, res) => {
    if (!req.body.name || !req.body.category) {
        res.status(400).send({
            message: "required fields cannot be empty",
        });
    }
    Model.Articles.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then((article) => {
            if (!article) {
                return res.status(404).send({
                    message: "no article found",
                });
            }
            res.status(200).send(article);
        })
        .catch((err) => {
            return res.status(404).send({
                message: "error while updating the post",
            });
        });
};