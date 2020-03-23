CREATE DEFINER=`root`@`localhost` PROCEDURE `guardarContacto`(
IN _nombre VARCHAR(50),
IN _telefono VARCHAR(20),
IN _email VARCHAR(50),
IN _empresa VARCHAR(50),
IN _preguntas VARCHAR(50)
)
BEGIN
	INSERT INTO contacto (nombre,telefono,email,empresa,preguntas)
		VALUES (_nombre, _telefono, _email, _empresa, _preguntas );
END