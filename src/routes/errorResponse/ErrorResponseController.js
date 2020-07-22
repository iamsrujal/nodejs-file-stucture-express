const reqResponse = require('../../cors/responseHandler');
const getErrorStatus = require('../../constant/ErrorData');

module.exports = {
	getAllErrorData: async (req, res) => {
		res.send(201).send(reqResponse.sucessResponse(201, "Fetch All Error Code", getErrorStatus.ERROR_STATUS_ARRAY));
	},

	getErrorDataByCode: (req, res) => {
		let code = req.params;
		let findErrorCode = getErrorStatus.ERROR_STATUS_ARRAY.find(c => c.status == code);
		res.send(201).send(reqResponse.sucessResponse(201, "Fetch Error Code", findErrorCode));
	}
}


