# typescript Ejercicios

**1 Índice de masa corporal**

Crea el código de este ejercicio en el archivo bmiCalculator.ts

Escribe una función calculateBmi que cuente el IMC según la altura (en centímetros) y el peso (en kilogramos) y que luego devuelva un mensaje que se adapte a los resultados.

Llama a la función en el mismo archivo con parámetros fijos e imprime el resultado. El código

console.log(calculateBmi(180, 74))

debe imprimir el siguiente mensaje

Normal (healthy weight)

Crea un script npm para ejecutar el programa con el comando npm run calculateBmi

**2 Calculadora de ejercicio**

Crea el código de este ejercicio en el archivo  exerciseCalculator.ts

Escribe una función calculateExercises que calcule el tiempo promedio de las horas diarias de ejercicio y lo compare con la cantidad objetivo de horas diarias y devuelva un objeto que incluya los siguientes valores:

• el número de días

• el número de días de entrenamiento

• el valor objetivo original

• el tiempo promedio calculado

• valor booleano que describe si se alcanzó el objetivo

• una calificación entre los números 1-3 que indica qué tan bien se cumplen las horas. Puedes decidir la métrica por tu cuenta.

• un valor de texto que explique la calificación, puedes inventar las explicaciones

Las horas de ejercicio diarias se asignan a la función como un array que contiene el número de horas de ejercicio de cada día en el período de entrenamiento. 

P.ej. una semana con 3 horas de entrenamiento el lunes, ninguna el martes, 2 horas el miércoles, 4,5 horas el jueves y así sucesivamente estaría representada por el siguiente array:

[3, 0, 2, 4.5, 0, 3, 1]

Para el objeto Result, debe crear un interface.

Si llamas a la función con los parámetros [3, 0, 2, 4.5, 0, 3, 1] y 2 , debería devolver:

{ periodLength: 7,
trainingDays: 5,
success: false,
rating: 2,
ratingDescription: 'not too bad but could be better',
target: 2,
average: 1.9285714285714286
}

Crea un script npm npm run calculateExercises para llamar a la función con valores fijos.

Recursos:
https://fullstackopen.com/es/part9/antecedentes_e_introduccion

https://www.youtube.com/watch?v=fUgxxhI_bvc
