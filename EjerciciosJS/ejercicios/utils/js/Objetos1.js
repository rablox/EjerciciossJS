class Jugador {
    constructor(nombre, posicion, valor) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.valor = valor;
    }
}
class Equipo {
    constructor(nombre, presupuesto) {
        this.nombre = nombre;
        this.plantilla = [];
        this.presupuesto = presupuesto;
    }

    ficharJugador(jugador) {
        this.plantilla.push(jugador);
    }

    listarPlantilla() {
        console.log(`Plantilla del equipo ${this.nombre}:`);
        this.plantilla.forEach(jugador => {
            console.log(`Nombre: ${jugador.nombre}, Posición: ${jugador.posicion}, Valor: ${jugador.valor}`);
        });
    }

    tresJugadoresMasCaros() {
        this.plantilla.sort((a, b) => b.valor - a.valor);
        console.log(`Los tres jugadores más caros de ${this.nombre}:`);
        for (let i = 0; i < 3; i++) {
            if (this.plantilla[i]) {
                console.log(`${this.plantilla[i].nombre} - Valor: ${this.plantilla[i].valor}`);
            }
        }
    }
}
// Creación de equipos
let barsa = new Equipo("Barcelona", 500000000);
let madrid = new Equipo("Real Madrid", 550000000);
let atleti = new Equipo("Atlético de Madrid", 450000000);
// Fichajes para Barcelona
barsa.ficharJugador(new Jugador("Messi", "Delantero", 100000000));
barsa.ficharJugador(new Jugador("Xavi", "Centrocampista", 60000000));
barsa.ficharJugador(new Jugador("Iniesta", "Centrocampista", 55000000));
barsa.ficharJugador(new Jugador("Puyol", "Defensor", 30000000));
barsa.ficharJugador(new Jugador("Piqué", "Defensor", 35000000));


// Fichajes para Real Madrid
madrid.ficharJugador(new Jugador("Ronaldo", "Delantero", 95000000));
madrid.ficharJugador(new Jugador("Benzema", "Delantero", 70000000));
madrid.ficharJugador(new Jugador("Modric", "Centrocampista", 50000000));
madrid.ficharJugador(new Jugador("Ramos", "Defensor", 40000000));
madrid.ficharJugador(new Jugador("Kroos", "Centrocampista", 45000000));

// Fichajes para Atlético de Madrid
atleti.ficharJugador(new Jugador("Griezmann", "Delantero", 85000000));
atleti.ficharJugador(new Jugador("Félix", "Delantero", 75000000));
atleti.ficharJugador(new Jugador("Koke", "Centrocampista", 50000000));
atleti.ficharJugador(new Jugador("Oblak", "Portero", 70000000));
atleti.ficharJugador(new Jugador("Llorente", "Centrocampista", 55000000));

barsa.tresJugadoresMasCaros();
madrid.tresJugadoresMasCaros();
atleti.tresJugadoresMasCaros();
