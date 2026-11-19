---
title: "Regulador lineal 7805: cómo obtener 5 V estables en protoboard"
description: "Aprende a usar el regulador 7805 para pasar de 7–12 V a 5 V: conexión, condensadores, disipación de calor, límites y errores habituales."
pubDate: 2026-11-19
category: "Montaje"
tags: ["regulador", "7805", "alimentación", "5V", "disipación"]
section: "electronica-basica"
cover: "../../assets/covers/35-regulador-7805.webp"
coverAlt: "Ilustración de un regulador 7805 con condensadores de entrada y salida alimentando una carga de 5 V"
draft: false
---

Muchos montajes de electrónica básica funcionan a **5 V**: LEDs con resistencia, sensores sencillos, módulos lógicos y relés de bobina de 5 V. Sin embargo, las fuentes que tienes a mano suelen entregar 9 V o 12 V. Si conectas esos voltios directamente, los componentes se dañan. El **regulador lineal 7805** es una solución clásica para convertir una tensión continua mayor en **5 V estables** con un circuito muy simple.

No es la opción más eficiente ni sirve para cualquier corriente, pero sí una de las más fáciles de entender. En esta guía verás cómo conectarlo, por qué necesita condensadores, cómo calcular el calor que genera y cuándo conviene usar otra alternativa como un [módulo buck LM2596](/electronica-basica/36-modulo-buck-lm2596/).

<figure>
  <img src="/images/diagrams/regulador-7805.svg" alt="Esquema de conexión de un regulador 7805 con condensadores de entrada y salida" />
  <figcaption>El 7805 necesita entrada, salida y masa común. Los condensadores se colocan lo más cerca posible de sus patillas.</figcaption>
</figure>

## Qué es un 7805

El 7805 es un regulador de tensión lineal de la familia 78xx. El número indica la salida fija: **05 = 5 V**. Existen variantes como 7809 o 7812, y también versiones en otros encapsulados, pero el funcionamiento básico es el mismo.

Trabaja reduciendo la tensión sobrante y disipándola en forma de calor. Por eso es sencillo, pero poco eficiente cuando la diferencia entre entrada y salida o la corriente son altas. A cambio, la salida suele ser estable y el montaje requiere pocos componentes.

### Características orientativas

| Parámetro | Valor orientativo | Nota práctica |
|---|---|---|
| Tensión de salida | 5 V | Fija, con tolerancia según fabricante |
| Tensión de entrada mínima | ~7 V | Necesita margen sobre 5 V |
| Tensión de entrada recomendada | 7–12 V | Cómodo para protoboard y poca disipación |
| Corriente máxima | Hasta 1 A (según condiciones) | Depende del encapsulado y del calor |
| Protección térmica | Frecuente | Puede cortar o reducir la salida si se calienta |

Consulta siempre la hoja de datos del modelo concreto que compres. Un encapsulado TO-220 no garantiza 1 A continuos sin disipador.

## Pinout y conexión básica

En el encapsulado TO-220 más común, visto de frente con las patillas hacia abajo y la parte metálica detrás, el orden suele ser:

1. **IN**: entrada de tensión continua (por ejemplo 9 V o 12 V).
2. **GND**: masa común.
3. **OUT**: salida regulada de 5 V.

Antes de conectar nada, confirma el pinout en la serigrafía o la ficha técnica. Un error de conexión puede destruir el regulador o dañar la carga.

### Condensadores recomendados

Un montaje típico incluye:

- **C1 en la entrada** (por ejemplo 0,33 µF o 100 nF cerca de IN): mejora la estabilidad si la fuente o los cables están lejos.
- **C2 en la salida** (por ejemplo 0,1 µF o 100 nF cerca de OUT): ayuda ante cambios de carga.

Algunos fabricantes recomiendan valores concretos. Si usas condensadores electrolíticos, respeta la polaridad: el negativo va a masa. Un condensador invertido puede fallar. Si dudas sobre cómo identificarlos, repasa [condensadores: tipos y comprobación](/electronica-basica/21-condensadores/).

## Cómo calcular la disipación de calor

La potencia que el 7805 convierte en calor se calcula así:

`P = (Vin − Vout) × I`

Donde `Vin` es la tensión de entrada, `Vout` es 5 V e `I` es la corriente que consume la carga.

| Vin | I carga | Potencia disipada | Comentario |
|---|---:|---:|---|
| 9 V | 100 mA | (9−5)×0,1 = 0,4 W | Suele ir bien sin disipador grande |
| 12 V | 100 mA | (12−5)×0,1 = 0,7 W | Se calienta, conviene vigilar |
| 12 V | 300 mA | (12−5)×0,3 = 2,1 W | Necesita disipador |
| 12 V | 500 mA | (12−5)×0,5 = 3,5 W | Poco práctico en protoboard |

Si el regulador se calienta demasiado, entra en protección térmica y la salida baja o se corta. Esto puede parecer un fallo misterioso del circuito. Toca el encapsulado con precaución: puede quemar. Para afianzar estos cálculos, revisa [ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/).

## Estima la corriente de la carga

El 7805 entrega la corriente que la carga pide, hasta su límite. Antes de encender, suma consumos orientativos:

- LED con resistencia: 5–20 mA.
- Sensor o módulo pequeño: según su ficha técnica.
- Relé de 5 V: a menudo 50–90 mA solo la bobina.
- Motor pequeño: picos altos al arrancar, no recomendable desde un 7805 básico.

Deja margen. Si la fuente o el regulador no pueden mantener la demanda, la tensión caerá. Para comprobar el consumo real, usa [cómo medir corriente con el multímetro](/electronica-basica/20-medir-corriente-multimetro/).

## Montaje paso a paso en protoboard

1. **Corta la alimentación.** No conectes la fuente mientras cableas.
2. **Comprueba los raíles** y la masa común como se explica en [cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/).
3. **Coloca el 7805** dejando espacio para condensadores y posible disipador.
4. **Conecta GND** del regulador al raíl negativo.
5. **Añade C1** entre IN y GND, cerca del regulador.
6. **Añade C2** entre OUT y GND, cerca del regulador.
7. **Conecta IN** a la fuente de 7–12 V (todavía apagada).
8. **Mide entre OUT y GND** antes de conectar la carga: al encender debe marcar unos 5 V.
9. **Conecta la carga** y vuelve a medir. Si la tensión cae mucho o se calienta en segundos, apaga y revisa.

Trabaja solo con baja tensión continua (5–12 V). **No uses la protoboard para 230 V.**

## Cuándo NO usar un 7805

- **Mucha diferencia de tensión y corriente media/alta** (por ejemplo 12 V a 5 V con 400 mA): mejor un buck.
- **Necesitas alta eficiencia o autonomía con pilas:** el calor es energía perdida.
- **La entrada puede bajar cerca de 5 V:** faltará margen de regulación.
- **Espacio o temperatura muy limitados:** la disipación es un problema.
- **Cargas con picos fuertes:** puede entrar en protección o caer la tensión.

En esos casos, compara con un [convertidor buck](/electronica-basica/36-modulo-buck-lm2596/) y añade [protecciones básicas de fuente](/electronica-basica/39-protecciones-fuente-diodo-fusible/) cuando convenga.

## Errores frecuentes

1. **Confundir el pinout.** Verifica siempre la orientación y la ficha.
2. **Olvidar la masa común.** Sin GND compartido no hay referencia correcta.
3. **No colocar condensadores.** Puede oscilar o comportarse mal según la carga.
4. **Invertir un electrolítico.** Respeta polaridad y tensión máxima.
5. **Pedir demasiada corriente.** La salida cae por límite o protección térmica.
6. **Usar 12 V con carga alta sin disipador.** El regulador se sobrecalienta.
7. **Conectar la carga sin medir antes.** Comprueba primero los 5 V.
8. **Usar cables largos o finos con corriente alta.** Añaden caída de tensión.

## Preguntas frecuentes

### ¿Puedo obtener 3,3 V con un 7805?

No directamente, porque su salida es fija a 5 V. Necesitas un regulador de 3,3 V u otra etapa adecuada. No uses un divisor de tensión para alimentar cargas que consumen corriente variable; repasa [divisor de tensión y potenciómetros](/electronica-basica/25-divisor-tension-potenciometros/).

### ¿Sirve con una pila de 9 V?

Sí, si la pila puede entregar la corriente necesaria y su tensión no cae por debajo del mínimo. Las pilas de 9 V pequeñas tienen poca capacidad y la tensión cae rápido con cargas moderadas.

### ¿Necesito disipador?

Depende de `(Vin − Vout) × I`. Con poca corriente puede no hacer falta. Si está muy caliente o la tensión cae, añade disipador o cambia a una solución más eficiente.

### ¿Puedo poner dos 7805 en paralelo?

No es recomendable sin un circuito de reparto adecuado. Usa un regulador o convertidor dimensionado para la corriente requerida.

### ¿Qué pasa si hago un cortocircuito en la salida?

Muchos 7805 incluyen protección, pero no debes confiar en ella. Desconecta, corrige el fallo y comprueba el montaje antes de volver a alimentar.

## Resumen

El 7805 es una forma sencilla de obtener 5 V estables desde una entrada mayor si respetas el pinout, la masa común, los condensadores y la disipación. Calcula el calor, estima la corriente de la carga y mide la salida antes de conectar el circuito.

Para corrientes mayores o mejor eficiencia, compáralo con un [módulo buck](/electronica-basica/36-modulo-buck-lm2596/) y aplica buenas prácticas de alimentación y protección.

## Sigue con

- [Cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) para organizar tensiones y masas.
- [Módulo buck LM2596](/electronica-basica/36-modulo-buck-lm2596/) para reducir tensión con mayor eficiencia.
- [Ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/) para calcular consumo y disipación.
- [Condensadores: tipos y comprobación](/electronica-basica/21-condensadores/) para elegir C1 y C2.
- [Fuente ajustable para protoboard](/electronica-basica/40-fuente-ajustable-protoboard/) para llevarlo a un proyecto práctico.
