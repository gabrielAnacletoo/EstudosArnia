
const Errors = {
    error200: {
      error: false,
      message: "Success",
    },
    error201: {
      error: false,
      message: "Created successfully",
    },
    error400: {
      error: true,
      message: "Invalid request",
    },
    error401: {
      error: true,
      message: "Unauthorized",
    },
    error500: {
      error: true,
      message: "Internal server error",
    },
    UserAlreadyExists: {
      error: true,
      message: "User already exists",
      status: 400
    },
    UserPassword: {
      error: true,
      message: "Password or email invalid",
      status: 404
    }

  };
  
  export {Errors};
  