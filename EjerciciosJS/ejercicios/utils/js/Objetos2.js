// Definición de equipos
let barsa = {
    nombre: "Barcelona",
    plantilla: [],
    presupuesto: 500000000
};

let madrid = {
    nombre: "Real Madrid",
    plantilla: [],
    presupuesto: 550000000
};

let atleti = {
    nombre: "Atlético de Madrid",
    plantilla: [],
    presupuesto: 450000000
};
function ficharJugador(equipo, jugador) {
    equipo.plantilla.push(jugador);
}

function listarPlantilla(equipo) {
    console.log(`Plantilla del equipo ${equipo.nombre}:`);
    equipo.plantilla.forEach(jugador => {
        console.log(`Nombre: ${jugador.nombre}, Posición: ${jugador.posicion}, Valor: ${jugador.valor}`);
    });
}

function tresJugadoresMasCaros(equipo) {
    equipo.plantilla.sort((a, b) => b.valor - a.valor);
    console.log(`Los tres jugadores más caros de ${equipo.nombre}:`);
    for (let i = 0; i < 3; i++) {
        if (equipo.plantilla[i]) {
            console.log(`${equipo.plantilla[i].nombre} - Valor: ${equipo.plantilla[i].valor}`);
        }
    }
}
// Fichajes para Barcelona
ficharJugador(barsa, { nombre: "Messi", posicion: "Delantero", valor: 100000000 });
ficharJugador(barsa, { nombre: "Xavi", posicion: "Centrocampista", valor: 60000000 });
ficharJugador(barsa, { nombre: "Iniesta", posicion: "Centrocampista", valor: 55000000 });
ficharJugador(barsa, { nombre: "Puyol", posicion: "Defensor", valor: 30000000 });
ficharJugador(barsa, { nombre: "Piqué", posicion: "Defensor", valor: 35000000 });


// Fichajes para Real Madrid
ficharJugador(madrid, { nombre: "Ronaldo", posicion: "Delantero", valor: 95000000 });
ficharJugador(madrid, { nombre: "Benzema", posicion: "Delantero", valor: 70000000 });
ficharJugador(madrid, { nombre: "Modric", posicion: "Centrocampista", valor: 50000000 });
ficharJugador(madrid, { nombre: "Ramos", posicion: "Defensor", valor: 40000000 });
ficharJugador(madrid, { nombre: "Kroos", posicion: "Centrocampista", valor: 45000000 });

// Fichajes para Atlético de Madrid
ficharJugador(atleti, { nombre: "Griezmann", posicion: "Delantero", valor: 85000000 });
ficharJugador(atleti, { nombre: "Félix", posicion: "Delantero", valor: 75000000 });
ficharJugador(atleti, { nombre: "Koke", posicion: "Centrocampista", valor: 50000000 });
ficharJugador(atleti, { nombre: "Oblak", posicion: "Portero", valor: 70000000 });
ficharJugador(atleti, { nombre: "Llorente", posicion: "Centrocampista", valor: 55000000 });
tresJugadoresMasCaros(barsa);
tresJugadoresMasCaros(madrid);
tresJugadoresMasCaros(atleti);
