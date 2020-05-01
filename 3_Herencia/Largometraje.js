// Clase padre

class Largometraje {
    constructor(titulo, duracion, director) {
        this.titulo = titulo;
        this.duracion = `${duracion} minutos`;
        this.director = director;
    }
}

module.exports = {
    Largometraje
}
