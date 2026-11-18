---
title: "Código de colores de resistencias: cómo leerlas y comprobarlas"
description: "Aprende a leer las bandas de color de una resistencia, calcular su valor y comprobarlo con un multímetro paso a paso."
pubDate: 2026-11-04
category: "Componentes"
tags: ["resistencias", "código de colores", "multímetro", "electrónica"]
section: "electronica-basica"
cover: "../../assets/covers/12-codigo-colores-resistencias.webp"
coverAlt: "Ilustración de una resistencia con bandas marrón, negro, rojo y dorado"
draft: false
---

Una **resistencia** es una pieza pequeña que limita el paso de la corriente. Está en casi cualquier placa: junto a un LED, en una fuente, en una placa de Arduino. Su valor se indica con **bandas de color** en lugar de números, y ahí es donde mucha gente se traba.

Leer esas bandas no es difícil. Solo hace falta conocer la tabla, saber por dónde empezar y confirmar el resultado con un multímetro. En esta guía lo verás paso a paso, con ejemplos sencillos y sin suponer conocimientos previos.

<figure>
  <img src="/images/diagrams/resistencias-codigo-colores.svg" alt="Resistencia de cuatro bandas con tabla de colores y ejemplo de cálculo de 1 kiloohmio" />
  <figcaption>Ejemplo de lectura: marrón, negro, rojo y dorado equivalen a 1 kΩ con ±5% de tolerancia.</figcaption>
</figure>

## Para qué sirve una resistencia

Una resistencia **frena** la corriente. Sin ella, un LED conectado directamente a una pila recibiría demasiada energía y se quemaría. También sirve para repartir tensión entre varias piezas o para fijar el estado de una entrada cuando no hay nada conectado.

| Función | Ejemplo habitual |
|---|---|
| Limitar corriente | LED con una resistencia de 220 Ω |
| Dividir voltaje | Dos resistencias para bajar 5 V a 2,5 V |
| Fijar un estado | Resistencia de *pull-up* en un botón |

Elegir bien el valor importa. Una resistencia demasiado alta deja pasar poca corriente y el LED apenas brilla; demasiado baja y puede quemarse. Por eso merece la pena saber leerla.

## Bandas de 4, 5 y 6

Las bandas son franjas de color pintadas alrededor del cuerpo de la pieza. Cada color corresponde a un número. El número de bandas indica la precisión:

| Bandas | Significado |
|---|---|
| 4 | 2 dígitos + multiplicador + tolerancia |
| 5 | 3 dígitos + multiplicador + tolerancia |
| 6 | Igual que 5 + coeficiente de temperatura |

En una resistencia de **4 bandas**, las dos primeras dan los dígitos, la tercera es el multiplicador y la cuarta la tolerancia. En una de **5 bandas**, la tercera añade otro dígito, así que el valor es más exacto. La sexta banda indica cuánto cambia el valor con la temperatura.

Esta es la tabla de colores que necesitas:

| Color | Dígito | Multiplicador | Tolerancia |
|---|---|---|---|
| Negro | 0 | ×1 | — |
| Marrón | 1 | ×10 | ±1 % |
| Rojo | 2 | ×100 | ±2 % |
| Naranja | 3 | ×1.000 | — |
| Amarillo | 4 | ×10.000 | — |
| Verde | 5 | ×100.000 | ±0,5 % |
| Azul | 6 | ×1.000.000 | ±0,25 % |
| Violeta | 7 | — | ±0,1 % |
| Gris | 8 | — | ±0,05 % |
| Blanco | 9 | — | — |
| Dorado | — | ×0,1 | ±5 % |
| Plateado | — | ×0,01 | ±10 % |

> **Consejo:** No intentes memorizar toda la tabla de golpe. Guárdala en el móvil o imprímela y consúltala hasta que los colores más comunes —marrón, negro, rojo y dorado— te salgan sin pensar.

## Cómo orientar la banda de tolerancia

Antes de calcular, decide qué lado es el primero. La **banda de tolerancia** suele ser dorada o plateada en las resistencias de 4 bandas y va siempre al final. Además, suele estar un poco más separada de las demás. Empieza a leer por el extremo opuesto.

En las resistencias de 5 y 6 bandas la tolerancia también está al final, pero puede ser marrón (±1 %) u otro color. Si todas las bandas están muy juntas, fíjate en la separación: la última deja algo más de espacio.

Algunas piezas llevan el valor impreso, por ejemplo **1K** o **102**. En ese caso, confía en la impresión. Las resistencias antiguas militares pueden tener una franja extra de otro tono; para aprender, ignórala y céntrate en las bandas normales.

## Ejemplo paso a paso: 1 kΩ

Vamos con el ejemplo de la imagen: **marrón, negro, rojo y dorado**.

1. Marrón = **1** (primer dígito).
2. Negro = **0** (segundo dígito). Juntos dan **10**.
3. Rojo = **×100** (multiplicador). 10 × 100 = **1000 Ω**.
4. Dorado = **±5 %** (tolerancia).

El resultado es **1 kΩ ±5 %**. Como 1000 Ω equivalen a 1 kiloohmio, puedes escribirlo de las dos formas. El rango real de esa pieza va de 950 a 1050 Ω.

Si fuera una resistencia de 5 bandas con marrón, negro, negro, marrón y marrón, la lectura sería 100 × 10 = **1000 Ω con ±1 %**. El valor es el mismo, pero la tolerancia es mejor: la pieza se acerca más a los 1000 Ω exactos.

## Tolerancia y potencia

La **tolerancia** es el margen de error permitido. Una resistencia de 1 kΩ ±5 % no tiene por qué medir exactamente 1000 Ω: cualquier valor entre 950 y 1050 Ω es correcto. Los colores más habituales son dorado (±5 %), plateado (±10 %) y marrón (±1 %).

La **potencia**, en vatios (W), indica cuánta energía puede disipar sin quemarse. No se lee en las bandas: se deduce del tamaño de la pieza.

| Tamaño | Potencia habitual |
|---|---|
| Pequeña, la más común | 1/4 W |
| Algo más grande | 1/2 W |
| Grande, tipo ladrillo | 1 W o más |

En un circuito de bajo consumo, 1/4 W suele bastar. Si la resistencia se calienta demasiado, elige una de mayor potencia. El valor en ohmios no cambia, pero la pieza aguanta más tiempo.

## Cómo comprobarla con el multímetro

La forma más fiable de saber el valor es medirlo. Necesitas un multímetro digital con función **Ω** y el circuito apagado.

1. Apaga la alimentación y descarga los condensadores si los hay.
2. Pon la sonda negra en **COM** y la roja en **VΩ**.
3. Gira la rueda al símbolo **Ω**. Si el modelo es manual, elige un rango por encima del valor esperado.
4. Toca cada punta un extremo de la resistencia. La dirección no importa.
5. Lee el número: 0,998 kΩ es una resistencia de 1 kΩ perfectamente válida.
6. Si sale **OL**, sube el rango o revisa el contacto de las puntas.

Si la resistencia sigue soldada en la placa, otras piezas pueden influir en la lectura. Levanta una pata o mídela antes de soldarla. No sujetes las dos patas con los dedos: tu cuerpo añade resistencia y falsea la medida, sobre todo en valores altos.

## Errores frecuentes

1. **Empezar a leer por el lado equivocado.** Si la primera banda que ves es dorada o plateada, estás al revés: gira la resistencia.
2. **Confundir rojo con marrón, o naranja con rojo**, con poca luz. Busca buena iluminación o usa una lupa.
3. **Olvidar el multiplicador.** Marrón, negro, rojo no es 10 Ω, es 1000 Ω. La tercera banda multiplica.
4. **Comparar con el valor nominal sin tolerancia.** Medir 980 Ω en una pieza de 1 kΩ ±5 % no es un fallo.
5. **Medir en circuito encendido.** Da lecturas falsas y puede dañar el multímetro.
6. **Ignorar la potencia.** Una resistencia correcta pero demasiado pequeña se calienta y falla antes de tiempo.

Anota el valor calculado y el medido. Al principio verás pequeñas diferencias; con la práctica aprenderás a distinguir una pieza buena de una averiada.

## Resumen

Leer una resistencia es contar bandas: dos o tres dígitos, un multiplicador y una tolerancia. La banda dorada o plateada marca el final, así que empieza por el otro lado. Con marrón, negro, rojo y dorado tienes **1 kΩ ±5 %**.

Después, confirma siempre con el multímetro en Ω y con el circuito apagado. La tabla de colores al principio parece mucha información, pero en pocas sesiones te quedas con los valores habituales. Cuando ya leas resistencias sin dudar, el siguiente paso es elegir la potencia adecuada y soldarlas.

## Sigue con

- [Ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/) para usar el valor que acabas de leer.
- [Resistencias en serie y paralelo](/electronica-basica/18-resistencias-serie-paralelo/) para calcular una equivalente.
- [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/) para elegir la resistencia de un LED.
