const fs = require ('fs');
const path = require ('path');
let products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'), 'utf-8'));
let tutoriales = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'tutoriales.json'), 'utf-8'));
let  categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));


module.exports = {
    index: (req, res) => {
       return res.render('index', { title: 'Craftsy 2.0', 
       products : JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'), 'utf-8')),
       tutoriales,
       categories
    });
    },
    admin : (req,res) => {
        return res.render('admin',{
            title : "Administración",
            products : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8')),
            categories
        })  
        }
    }  