/**
 * Eres el líder de una tripulación pequeña de piratas y tienes un plan. Con la ayuda de POO tienes que hacer una función para identificar barcos con un 
 * botín pesado a bordo. Por desgracia, la gente perdió mucho estos días, entonces, cómo sabes si un barco está lleno de oro y no de personas?
 * Cada vez que tus espias vean un barco nuevo entrando al muelle, van a crear un nuevo objeto de barco basado en sus observaciones:
 *       Draft: Un estimado del peso del barco basado en qué tan bajo está en el agua
 *       Crew: La cantidad de tripulantes a bordo
 * Tienes acceso al "Draft" y la "Crew" del barco. "Draft" es el peso total del barco y "Crew" es el número de personas en el barco.
 * Cada miembro añade 1.5kg al peso del barco. Si luego de remover el peso de las personas, el peso del barco sigue siendo más de 20kg, 
 * significa que el botín es bueno.
 * Añade el método "botinBueno" para decidir si vale la pena saquear el barco.
 */

class Barco{
    constructor(draft,crew){
        this.draft= draft;
        this.crew = crew*(1.5); 
    }
    botinBueno(){
        if((this.draft - this.crew) > 20){
            alert('Vale la pena saquearlo!!!');
        }else{
            alert('No vale la pena saquearlo!!!');
        }
    }
}

let confirmacion = confirm('¿Hay barco nuevo entrando al muelle?'); 
while(confirmacion){
    let pesoEstimado = parseFloat(prompt('Ingrese peso estimado del Barco..')), cantidadTripulantes = parseInt(prompt('Ingrese cantidad de Tripulantes....'));
    if(! isNaN(cantidadTripulantes) && ! isNaN(pesoEstimado) && pesoEstimado > 0 && cantidadTripulantes > 0){
        let nuevoBarco = new Barco(pesoEstimado,cantidadTripulantes);
        nuevoBarco.botinBueno();
    }else{
        alert('No se puede Calcular... Ingrese numeros correctos....'); 
    }
confirmacion = confirm('¿Hay mas barco entrando al muelle?'); 
}
