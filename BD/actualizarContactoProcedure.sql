CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizarContacto`(
IN _id INT,
IN _nombre VARCHAR(50),
IN _telefono VARCHAR(20),
IN _email VARCHAR(50),
IN _empresa VARCHAR(50),
IN _preguntas VARCHAR(50)
)
BEGIN
UPDATE contacto
SET 
nombre = _nombre,
telefono = _telefono,
email = _email,
empresa = _empresa,
preguntas = _preguntas
WHERE id = _id;
END