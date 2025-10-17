const { emitEvent } = require("../services/socket.service");

const handleChangeScreenEvent = async (req, res) => {
  try {
    await emitEvent("next-screen");
    res.send({ message: "Cambio de pantalla exitoso" });
  } catch (error) {
    res.status(500).send({ message: "Error al cambiar pantalla", error: error.message });
  }
};

module.exports = {
  handleChangeScreenEvent,
};
