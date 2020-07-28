const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomepage = async (req, res) => {
    const promises = [];

    const viajes = await Viaje.findAll({ limit: 3 });

    const testimoniales = await Testimonial.findAll({ limit: 3 })

    // Pasar el promise y ejecutarlo
    const resultado = Promise.all(promises);
    res.render('index', {
        pagina: 'Próximos viajes',
        clase: 'home',
        viajes,
        testimoniales
    })
}