// Importamos el Modelo
const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}

exports.agregarTestimonial = async (req, res) => {
    // validar que todos los campos estén llenos
    let { nombre, correo, mensaje } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({ 'mensaje': 'Agrega tu nombre' })
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu correo' })
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu mensaje' })
    }

    // Revisar por errores
    if (errores.length > 0) {
        // muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            // Al poner estos de abajo, al haber un error, no se perderán los datos ya escritos
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    } else {
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error))
    }

}