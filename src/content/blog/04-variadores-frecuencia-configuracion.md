---
title: "Variadores de frecuencia: configuración paso a paso"
description: "Cómo parametrizar un variador de frecuencia por primera vez: motor, límites, rampas y comprobaciones antes de arrancar."
pubDate: 2026-11-20
category: "Variadores"
tags: ["variador", "motor", "frecuencia", "mantenimiento"]
---

Un **variador de frecuencia (VFD)** controla la velocidad de un motor de inducción cambiando la frecuencia y el voltaje aplicados. Sirve para ahorrar energía, arrancar suavemente y adaptar la máquina a distintas cargas.

## Antes de tocar nada

1. **Verifica la placa del motor:** potencia, tensión, corriente, frecuencia (50/60 Hz), número de polos y conexión (estrella/triángulo).
2. **Comprueba que el variador es adecuado:** potencia igual o superior a la del motor. Si el motor va a trabajar a baja velocidad de forma continua, considera un variador con refrigeración forzada o un motor ventilado independientemente.
3. **Desconecta y espera:** los condensadores del bus DC mantienen tensión peligrosa varios minutos tras cortar la alimentación. Respeta el tiempo indicado por el fabricante y verifica con multímetro.

## Parámetros básicos que debes configurar

Cada fabricante usa códigos distintos (P001, F01, 01-...), pero los conceptos son los mismos:

| Concepto | Qué ajustar | Valor típico |
|---|---|---|
| Tensión motor | Según placa | 400 V / 230 V |
| Corriente motor | Según placa (FLA) | El de la placa |
| Frecuencia nominal | 50 Hz (Europa) | 50 Hz |
| Velocidad máxima | Según aplicación | 50 Hz |
| Frecuencia mínima | Evita parada por subfrecuencia | 5-10 Hz |
| Rampa de aceleración | Tiempo de subida | 5-15 s |
| Rampa de deceleración | Tiempo de bajada | 5-15 s |
| Método de control | V/f o vectorial | V/f para empezar |

## Curva V/f y refuerzo

El modo **V/f** mantiene constante la relación voltaje/frecuencia para conservar el par. A frecuencias muy bajas, el voltaje es insuficiente y el motor puede calentarse o no arrancar. Ahí entra el **refuerzo de par (torque boost)**: incrementa ligeramente el voltaje al arranque.

- Exceso de refuerzo → motor caliente, corriente alta.
- Defecto de refuerzo → el motor no arranca con carga.

Ajusta al mínimo que permita arrancar la carga.

## Entradas y salidas más habituales

- **Entrada digital de marcha/parada:** activa el variador.
- **Entrada analógica 0-10 V o 4-20 mA:** consigna de velocidad.
- **Entrada de reset:** limpia averías tras solucionar la causa.
- **Salida de avería:** contacto para avisar al PLC.
- **Salida analógica:** velocidad real o corriente (para monitorizar).

## Puesta en marcha segura

1. Con el motor **desacoplado** de la carga, arranca en marcha manual a baja frecuencia (5-10 Hz).
2. Comprueba el **sentido de giro**. Si es incorrecto, invierte dos fases en la salida del variador (nunca en la entrada).
3. Aumenta gradualmente hasta la frecuencia nominal y observa corriente, ruido y vibración.
4. Acopla la carga y repite la prueba.
5. Ajusta las rampas: si el variador dispara por sobrecorriente al acelerar, alarga la rampa de aceleración; si dispara por sobrevoltaje al frenar, alarga la de deceleración.

## Fallos típicos

| Fallo | Causa probable |
|---|---|
| Overcurrent al arrancar | Rampa demasiado corta o refuerzo excesivo |
| Overvoltage al parar | Deceleración demasiado rápida, falta resistencia de frenado |
| Motor caliente | Refuerzo alto, baja velocidad prolongada, ventilación reducida |
| No arranca | Entrada de habilitación desactivada o consigna a cero |

## Recomendación final

Guarda siempre una copia de los parámetros (muchos variadores lo permiten por teclado o software) y anota en papel los valores finales con fecha. Cuando el variador falle meses después, esa hoja te ahorrará horas.
