const reqResponse = require('../../cors/responseHandler');
const getErrorStatus = require('../../constant/ErrorData');

module.exports = {
	getAllErrorData: async (req, res) => {
		res.status(201).send(reqResponse.successResponse(201, "Fetch All Error Code", getErrorStatus.ERROR_STATUS_ARRAY));
	},

	getErrorDataByCode: (req, res) => {
		let params = req.params;
		let findErrorCode = getErrorStatus.ERROR_STATUS_ARRAY.find(c => c.status == params.code);
		res.status(201).send(reqResponse.successResponse(201, "Fetch Error Code", findErrorCode));
	}
}


