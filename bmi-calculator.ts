// console.log("Hello world!")

function IbmCalculate (altura: number, peso:number): string {
    const bmi = peso / (altura**2);
    if (bmi<25){
        return ("Estás muy delgado")
    }

    else if (bmi >=25 && bmi <=27){
        return ("Estás en tu peso")
    }

    else {
        return("Tienes sobrepeso")
    }

}

console.log(IbmCalculate (1.85, 74))
console.log(IbmCalculate(1.95, 112))
console.log(IbmCalculate(1.55, 60))
console.log(IbmCalculate(1.88, 94))
