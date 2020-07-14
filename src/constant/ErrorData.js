// 40X - Client Side Error
// 50X - Server Side Error 

module.exports = {
  ERROR_STATUS_ARRAY: [
    {
      status: "401",
      message: "userId or privateKey is wrong.",
      data: "userId or privateKey is wrong."
    },
    {
      status: "402",
      message: "Mandatory Parameter Empty.",
      data: "Mandatory Parameter Empty."
    },
    {
      status: "403",
      message: "Mandatory Parameter Missing.",
      data: "Mandatory Parameter Missing."
    },
    {
      status: "404",
      message: "User already registered.",
      data: "User already registered."
    },
    {
      status: "405",
      message: "Your password is incorrect.",
      data: "Your password is incorrect."
    },
    {
      status: "406",
      message: "Please verify your email.",
      data: "Please verify your email."
    },
    {
      status: "407",
      message: "User Not Exist.",
      data: "User Not Exist."
    },
    {
      status: "408",
      message: "Verification code was valid for 24 hours, Please click on resend.",
      data: "Verification code was valid for 24 hours, Please click on resend."
    },
    {
      status: "409",
      message: "Verification code not exists, Please click on resend.",
      data: "Verification code not exists, Please click on resend."
    },
    {
      status: "410",
      message: "User blocked by admin.",
      data: "User blocked by admin."
    },
    {
      status: "411",
      message: "User already added.",
      data: "User already added."
    },
    {
      status: "412",
      message: "Error in password generator.",
      data: "Error in password generator."
    },
    {
      status: "413",
      message: "Verification code eror",
      data: "verification code are not match please try again."
    },
    {
      status: "414",
      message: "Token Error",
      data: "Invalid token found."
    },
    {
      status: "415",
      message: "Token not found",
      data: "Token not found in request perameter."
    },
    {
      status: "416",
      message: "User not verified",
      data: "Your are not verified."
    },
    {
      status: "417",
      message: "Authentication error.",
      data: "You are not authorized to perform this action."
    },
    {
      status: "501",
      message: "Data Not Found.",
      data: "Data Not Found."
    },
    {
      status: "502",
      message: "JWT token Error",
      data: "Error occure while genrating user token."
    },
    {
      status: "503",
      message: "Database error",
      data: "Database operation error."
    },
    {
      status: "504",
      message: "Mail error",
      data: "Error occure while sending mail."
    },
    {
      status: "505",
      message: "Error in file deleteing",
      data: "File deleteing error."
    },
  ]
}