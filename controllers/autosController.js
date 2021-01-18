const autos = require('../data/autos')


module.exports={
    autos:(req,res) =>{
        res.render('autos',{
            title: "Automotores",
            autos});
        
    },
    show:(req,res) =>{
        let auto = autos.find(auto =>{
            return auto.id == req.params.id
        })
        res.render('detalles',{
            title:"Detalle",
            auto
        })
    },
    agregar:(req,res) =>{
        res.render('agregar')
    }
}