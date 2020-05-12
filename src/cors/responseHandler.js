const data = [
	{
		errorCode: "99",
		title: "userId or privateKey is wrong.",
		description: "userId or privateKey is wrong."
	},
	{
		errorCode: "101",
		title: "Data Not Found.",
		description: "Data Not Found."
	},
	{
		errorCode: "102",
		title: "Mandatory Parameter Empty.",
		description: "Mandatory Parameter Empty."
	},
	{
		errorCode: "103",
		title: "Mandatory Parameter Missing.",
		description: "Mandatory Parameter Missing."
	},
	{
		errorCode: "104",
		title: "User already registered.",
		description: "User already registered."
	},
	{
		errorCode: "105",
		title: "Your password is incorrect.",
		description: "Your password is incorrect."
	},
	{
		errorCode: "106",
		title: "Please verify your email.",
		description: "Please verify your email."
	},
	{
		errorCode: "107",
		title: "User Not Exist.",
		description: "User Not Exist."
	},
	{
		errorCode: "108",
		title: "Verification code was valid for 24 hours, Please click on resend.",
		description: "Verification code was valid for 24 hours, Please click on resend."
	},
	{
		errorCode: "109",
		title: "Verification code not exists, Please click on resend.",
		description: "Verification code not exists, Please click on resend."
	},
	{
		errorCode: "110",
		title: "User not found.",
		description: "User not found."
	},
	{
		errorCode: "111",
		title: "User blocked by admin.",
		description: "User blocked by admin."
	},
	{
		errorCode: "112",
		title: "User already added.",
		description: "User already added."
	},
	{
		errorCode: "113",
		title: "Error in password generator.",
		description: "Error in password generator."
	},
	{
		errorCode: "114",
		title: "JWT token Error",
		description: "Error occure while genrating user token."
	},
	{
		errorCode: "115",
		title: "Database error",
		description: "Database operation error."
	},
	{
		errorCode: "116",
		title: "Mail error",
		description: "Error occure while sending mail."
	},
	{
		errorCode: "117",
		title: "Verification code eror",
		description: "verification code are not match please try again."
	},
	{
		errorCode: "118",
		title: "Token Error",
		description: "Invalid token"
	},
	{
		errorCode: "119",
		title: "Token not found",
		description: "Token not found in request perameter."
	},
	{
		errorCode: "120",
		title: "Error in file deleteing",
		description: "File deleteing error."
	},
	{
		errorCode: "121",
		title: "User not verified",
		description: "Your are not verified."
	},
	{
		errorCode: "122",
		title: "Verify email",
		description: "Verification code sent on your email please check it."
	},
	{
		errorCode: "123",
		title: "Authentication error.",
		description: "You are not authorized to perform this action."
	}];

function findErrorMessage(code) {
	let findErrorObj = data.filter((v) => v.errorCode === code)[0];
	return findErrorObj ? findErrorObj : null;
}

module.exports = {
	sucessResponse: (status, message, data) => ({
		status,
		message,
		data,
		error: null
	}),

	errorResponse: (status, message, errorCode) => ({
		status,
		message,
		data: null,
		error: findErrorMessage(errorCode)
	})
};
