const UserController = require('../../controllers/UserProfileController');
const reqResponse = require('../../cors/responseHandler');

module.exports = {
	createUser: async (req, res) => {
		let data = req.body;
		let params = req.params;
		let query = req.query;
		try {
			let result = await UserController.createUser(data, params, query);
			res.send(reqResponse.sucessResponse("1", "User Created", result));
		} catch (error) {
			res.send(reqResponse.errorResponse("0", "Error", "115"));
		}
	},

	updateUser: (req, res) => {
		let data = req.body;
		let params = req.params;
		let query = req.query;
		UserController.updateUser(data, params, query)
			.then((result) => {
				res.send(reqResponse.sucessResponse("1", "User Updated", result));
			})
			.catch((err) => {
				res.send(reqResponse.errorResponse("0", "Error", "115"));
			})
	}
}


