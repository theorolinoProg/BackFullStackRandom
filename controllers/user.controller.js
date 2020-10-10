import Model from '../models/index';

exports.create = (req, res) => {
    /**
     * validation request
     */
    if (!req.body.email || !req.body.password || !req.body.name) {
        return res.status(400).send({
            message: "Required field can not be empty",
        });
    }
    /**
     * Create a user
     */
    const user = new Model.Users({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    });
    /**
     * Save user to database
     */
    user
        .save()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User.",
            });
        });
};
/**
 * Find all User
 */
exports.findAll = (req, res) => {
    Model.Users.find()
        .sort({
            name: -1
        })
        .then((users) => {
            res.status(200).send(users);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
};
/**
 * Find one User
 */
exports.findOne = (req, res) => {
    Model.Users.findById(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id,
                });
            }
            res.status(200).send(user);
            console.log(user);
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.id,
            });
        });
};

/**
 * Delete a user with the specified id in the request
 */
exports.delete = (req, res) => {
    Model.Users.findByIdAndRemove(req.params.id)
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found ",
                });
            }
            res.status(200).send({
                message: "User deleted successfully!"
            });
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete user ",
            });
        });
};

/**
 * Update a user with the specified id in the request
 */
exports.updateUser = (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.name) {
        res.status(400).send({
            message: "required fields cannot be empty",
        });
    }
    Model.Users.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then((user) => {
            if (!user) {
                return res.status(404).send({
                    message: "no user found",
                });
            }
            res.status(200).send(user);
        })
        .catch((err) => {
            return res.status(404).send({
                message: "error while updating the post",
            });
        });
};