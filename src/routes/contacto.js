const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req,res) => {
	mysqlConnection.query('SELECT * FROM contacto', (err, row, fields) => {
		if (!err) {
			res.json(row);
		}else {
			console.log(err);
		}
	});
});

router.get('/:id', (req,res) => {
	const {id} =  req.params;
	mysqlConnection.query('SELECT * FROM contacto WHERE id = ?', [id], (err,row,fields) => {
		if (!err) {
			res.json(row);
		}else {
			console.log(err);
		}
	});
});

router.post('/', (req,res)=> {
	const {nombre,telefono,email,empresa,preguntas} = req.body;
	const query = `
	CALL guardarContacto(?, ?, ?, ?, ?);
	`;

	mysqlConnection.query(query, [nombre,telefono,email,empresa,preguntas], (err,row,fields) => {
		if (!err) {
			res.json({Status:'Contacto Guardado'});
		}else {
			console.log(err);
		}
	});
});

router.put('/:id', (req,res)=> {
	const {nombre,telefono,email,empresa,preguntas} = req.body;
	const {id} = req.params;
	const query = `CALL actualizarContacto(?, ?, ?, ?, ?, ?)`;

	mysqlConnection.query(query, [id,nombre,telefono,email,empresa,preguntas], (err,row,fields)=> {
		if (!err) {
			res.json({Status:'Contacto Actualizado'});
		}else {
			console.log(err);
		}
	});
});

router.delete('/:id', (req,res)=> {
	const {id} = req.params;
	mysqlConnection.query('DELETE FROM contacto WHERE id = ?', [id], (err,row,fields)=> {
		if (!err) {
			res.json({Status:'Contacto Eliminado'});
		}else {
			console.log(err);
		}
	});
});

module.exports = router;