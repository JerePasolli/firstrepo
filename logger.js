let url = 'http://primernode.com.ar';

log = (mensaje1, mensaje2) => {
    console.log(mensaje1 + ' ' + mensaje2);
}

module.exports.url = url;
module.exports.log = log;