const {check} = require('express-validator');



module.exports = [
check('name')
.notEmpty()
.withMessage('El nombre del producto es obligatorio'), //no puede estar vacio

check('description')
.notEmpty().withMessage('la descripcion es obligatorio').bail()  //no puede estar vacio
.isLength({ min: 20})
.withMessage('la descripcion debe tener minimos 20 caracteres'),

check('price')
.isInt({
    min:1
}).withMessage('debe ingresar un numero valido'),

check('category')
.notEmpty().withMessage('indicá la categoría'),

check('discount')
.isInt({
    min:1
}).withMessage('debe ingresar un numero valido'),

]
/* instalar expres-validator, requerir expres validator, crear una carpeta, un archivo con las validaciones,destructuramos el metodo check, exportar en un array, con los valores los atributo de los imput para chekear y validar, traer el archivo validator en la ruta de los productos   */