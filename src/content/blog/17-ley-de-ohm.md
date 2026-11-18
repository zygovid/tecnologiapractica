---
title: "Ley de Ohm y potencia: cómo calcular voltaje, corriente y resistencia"
description: "Aprende la ley de Ohm y las fórmulas de potencia con ejemplos sencillos para calcular resistencias, corriente y vatios sin memorizar nada."
pubDate: 2026-11-10
category: "Fundamentos"
tags: ["ley de ohm", "voltaje", "corriente", "resistencia", "potencia"]
section: "electronica-basica"
cover: "../../assets/covers/17-ley-de-ohm.webp"
coverAlt: "Ilustración del triángulo de la ley de Ohm con voltaje, corriente y resistencia"
draft: false
---

La **ley de Ohm** relaciona tres cosas que aparecen en cualquier circuito: **voltaje**, **corriente** y **resistencia**. Es la herramienta que te permite calcular qué resistencia poner, cuánta corriente va a circular o qué tensión caerá en una parte del montaje.

No hace falta ser matemático. Con una fórmula, saber despejarla y cuidar las unidades, resuelves la mayoría de los cálculos de electrónica básica. En esta guía verás también la **potencia**, porque una resistencia puede tener el valor correcto y aun así calentarse demasiado.

<figure>
  <img src="/images/diagrams/ley-ohm.svg" alt="Triángulo de la ley de Ohm con las fórmulas V igual a I por R, I igual a V entre R y R igual a V entre I" />
  <figcaption>Con el triángulo puedes despejar la magnitud que te falta: tapa la que buscas y lee la relación entre las otras dos.</figcaption>
</figure>

## Las tres magnitudes, sin líos

Antes de usar la fórmula conviene tener claro qué mide cada cosa. No son conceptos intercambiables.

| Magnitud | Símbolo | Unidad | Qué representa |
|---|---|---|---|
| Voltaje o tensión | V | voltio (V) | La diferencia de potencial que empuja a los electrones |
| Corriente | I | amperio (A) | La cantidad de carga que circula por segundo |
| Resistencia | R | ohmio (Ω) | La oposición al paso de la corriente |

Una comparación útil es la de un circuito de agua: el **voltaje** sería la presión, la **corriente** el caudal y la **resistencia** el estrechamiento de la tubería. Si aumentas la presión, circula más agua; si estrechas el tubo, circula menos.

En electrónica verás corrientes muy pequeñas. Por eso se usan submúltiplos:

- **1 mA** = 0,001 A.
- **1 µA** = 0,000001 A.
- **1 kΩ** = 1.000 Ω.
- **1 MΩ** = 1.000.000 Ω.

El error más común al empezar es mezclar miliamperios con amperios. Si la fórmula pide amperios y tú pones 20, el resultado será mil veces menor. Escribe siempre la unidad antes de calcular.

## La fórmula de la ley de Ohm

La relación básica es:

**V = I × R**

De ahí salen las otras dos formas, según lo que quieras calcular:

- **I = V / R** para saber cuánta corriente circula.
- **R = V / I** para elegir una resistencia.

La condición es que uses **voltios, amperios y ohmios**. Si tienes 20 mA, conviértelo a 0,020 A. Si tienes 4,7 kΩ, conviértelo a 4.700 Ω.

> **Truco:** dibuja el triángulo con la V arriba, la I a la izquierda y la R a la derecha. Si buscas la V, multiplicas I por R. Si buscas I, divides V entre R. Si buscas R, divides V entre I.

## Ejemplo 1: corriente que circula

Tienes una pila de **9 V** y una resistencia de **330 Ω**. ¿Cuánta corriente pasa?

- I = V / R
- I = 9 / 330
- I = **0,027 A**, es decir, **27 mA**.

Ese valor es razonable para un LED pequeño, aunque conviene comprobar la caída del LED y su corriente máxima. En el artículo de [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/) tienes el cálculo completo para LED.

Si cambias la resistencia por una de **1 kΩ**, la corriente baja a 9 mA. Al aumentar la resistencia, disminuye la corriente. Esa relación inversa es la clave de la ley de Ohm.

## Ejemplo 2: resistencia necesaria

Imagina que tienes **12 V** y quieres limitar la corriente a **20 mA**. ¿Qué resistencia necesitas?

- I = 20 mA = 0,020 A.
- R = V / I
- R = 12 / 0,020
- R = **600 Ω**.

Como no existe una resistencia de 600 Ω en las series habituales, eliges el valor normalizado más cercano. En este caso, **620 Ω** es una opción segura. Si eliges una resistencia menor, la corriente sube; si eliges una mayor, baja.

## Ejemplo 3: caída de tensión

Una resistencia de **220 Ω** está sometida a **5 V**. ¿Cuánto vale la corriente y cuánta tensión cae en ella?

- I = 5 / 220 = **0,0227 A**, unos **23 mA**.
- La tensión en la resistencia es la propia fuente, 5 V, porque es el único elemento del ejemplo.

En un circuito con varios componentes, la suma de las caídas de tensión del camino completo coincide con la tensión de alimentación. Esa idea se entiende mejor cuando ves [resistencias en serie y en paralelo](/electronica-basica/18-resistencias-serie-paralelo/).

## Potencia: el cálculo que evita humo

Una resistencia tiene dos límites: el valor en ohmios y la **potencia máxima** que puede disipar. Si la potencia real supera la nominal, se calienta y puede quemarse.

Las fórmulas equivalentes son:

- **P = V × I**
- **P = I² × R**
- **P = V² / R**

El resultado se expresa en **vatios (W)**. Las resistencias de agujero pasante más comunes son de **1/4 W** (0,25 W) o **1/2 W** (0,5 W).

Volviendo al ejemplo de 9 V y 330 Ω:

- I = 0,027 A.
- P = 9 × 0,027 = **0,243 W**.

Eso está demasiado cerca del límite de una resistencia de 1/4 W. Para un montaje permanente, usa una de **1/2 W** o una resistencia de mayor valor que reduzca la corriente.

En el caso de 12 V y 600 Ω:

- I = 0,020 A.
- P = 12 × 0,020 = **0,24 W**.

Otra vez conviene subir a 1/2 W si la resistencia va a estar encendida mucho tiempo o dentro de una caja cerrada.

## Cómo comprobarlo con el multímetro

La ley de Ohm también sirve para verificar un montaje. Pero cada medida se hace de una forma distinta:

- **Tensión:** el multímetro se conecta **en paralelo** con el componente, con el circuito encendido.
- **Corriente:** el multímetro se conecta **en serie**, abriendo el circuito. Nunca en paralelo con una fuente.
- **Resistencia:** el componente debe estar **sin alimentación** y, a ser posible, fuera del circuito.

Si no tienes claro cómo hacerlo, revisa la guía de [cómo usar un multímetro digital](/electronica-basica/11-multimetro-digital/) y la de [medir corriente sin quemar el fusible](/electronica-basica/20-medir-corriente-multimetro/).

## Errores frecuentes

1. **Mezclar mA y A.** Es el fallo número uno. Convierte siempre a amperios antes de dividir.
2. **Usar la ley de Ohm con un LED como si fuera una resistencia.** Un LED no es lineal: su caída de tensión depende del color y del punto de trabajo.
3. **Olvidar la potencia.** Una resistencia de 1/4 W con 0,3 W se calienta y acaba fallando.
4. **Medir resistencia con el circuito encendido.** El multímetro da valores falsos y puede dañarse.
5. **Elegir el valor normalizado hacia abajo.** Si dudas, elige el valor mayor para no pasarte de corriente.
6. **Confundir tensión de fuente con tensión del componente.** En series, la tensión se reparte.

## Preguntas frecuentes

### ¿La ley de Ohm sirve para corriente alterna?

Con resistencias puras sí, usando valores eficaces. Con bobinas y condensadores la cosa cambia porque aparece la impedancia. Para empezar, quédate con corriente continua y resistencias.

### ¿Puedo usar V = I × R con una bombilla?

Sí, pero solo si conoces la resistencia en su punto de funcionamiento. La resistencia de una bombilla cambia mucho con la temperatura. Para un cálculo inicial sirve; para algo preciso, mide.

### ¿Qué pasa si la resistencia es demasiado grande?

La corriente baja y el circuito puede funcionar poco o nada. En un LED, se verá tenue. En un relé, puede que no active. No suele haber peligro, pero sí un mal funcionamiento.

## Resumen

La ley de Ohm se reduce a **V = I × R**. Para corriente usa **I = V / R**; para elegir una resistencia, **R = V / I**. Y no olvides la potencia: **P = V × I**. Con esas dos ideas y las unidades bien puestas puedes resolver la mayoría de los cálculos de un montaje básico.

Antes de soldar nada, haz el cálculo, elige el valor normalizado y comprueba la potencia. Es más rápido que sustituir una resistencia quemada.

## Sigue con

- [Resistencias en serie y en paralelo](/electronica-basica/18-resistencias-serie-paralelo/) para repartir tensión y corriente.
- [Cómo medir corriente con el multímetro](/electronica-basica/20-medir-corriente-multimetro/) para comprobar el resultado real.
- [Protoboard paso a paso](/electronica-basica/19-protoboard/) para montar el circuito sin soldar.
