// Importamos el Modelo
const Viaje = require('../models/Viajes');

// ! Versión con async/await
// ! Es recomendado usar async/await al trabajar con Bases de Datos
exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes: viajes
    });
}

exports.mostrarViaje = async (req, res) => {
    const viaje = Viaje.findByPk(req.params.id)
    res.render('viaje', {
        // Es lo mismo que viaje: viaje
        viaje
    })
}


// exports.mostrarViajes = (req, res) => {
//     Viaje.findAll()
//         .then(viajes => res.render('viajes', {
//             pagina: 'Próximos viajes',
//             viajes: viajes
//         }))
//         .catch(error => console.log(error))
// }

// exports.mostrarViaje = (req, res) => {
//     Viaje.findByPk(req.params.id)
//         .then(viaje => res.render('viaje', {
//             viaje
//         }))
//         .catch(error => console.log(error))
// }