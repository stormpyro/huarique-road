const AuthController = {
  login: (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        res.status(200).json({
          userLogged: true,
          email,
          date: new Date()
        });
      } else {
        throw Error("Faltan datos");
      }
    } catch (error) {
      res
        .status(400)
        .json({ errorMessage: "Llena tus datos correctamente", error });
    } finally {
      res.end();
    }
  },

  signUp: (req, res) => {
    res.send("SignUp controller");
  },

  logout: (req, res) => {
    res.send("Logout controller");
  }
};

export default AuthController;
