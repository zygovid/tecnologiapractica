---
title: "Resistencias en serie y en paralelo: cómo calcular y medir"
description: "Aprende a calcular la resistencia equivalente en serie, en paralelo y en circuitos mixtos, con ejemplos y comprobación con multímetro."
pubDate: 2026-11-11
category: "Circuitos"
tags: ["resistencias", "serie", "paralelo", "divisor de tensión", "multímetro"]
section: "electronica-basica"
cover: "../../assets/covers/18-resistencias-serie-paralelo.webp"
coverAlt: "Ilustración de resistencias conectadas en serie y en paralelo sobre un fondo oscuro"
draft: false
---

Cuando no tienes el valor exacto que necesitas, o quieres repartir una tensión entre varios puntos, lo normal es combinar resistencias. Hay dos formas básicas: **en serie** y **en paralelo**. Cada una se comporta de manera distinta y tiene fórmulas propias.

Entenderlas te permite calcular una resistencia equivalente, comprobar por qué un divisor de tensión da un valor inesperado y detectar errores de montaje. También es la base para leer esquemas con más soltura.

<figure>
  <img src="/images/diagrams/resistencias-serie-paralelo.svg" alt="Comparación entre dos resistencias en serie y dos resistencias en paralelo con sus fórmulas" />
  <figcaption>En serie se suman los valores; en paralelo, la resistencia equivalente siempre es menor que la más pequeña.</figcaption>
</figure>

## Qué significa "en serie"

Dos resistencias están **en serie** cuando la corriente tiene que pasar por una y después por la otra. No hay ningún camino alternativo entre ellas.

En un circuito en serie:

- La **corriente es la misma** en todos los elementos.
- La **tensión se reparte** entre las resistencias.
- La **resistencia total se suma**.

La fórmula es sencilla:

**Rtotal = R1 + R2 + R3 + ...**

Si tienes 220 Ω y 330 Ω en serie, la equivalente es **550 Ω**. Si añades otra de 100 Ω, sube a 650 Ω.

### Ejemplo en serie

Con 9 V y dos resistencias de 220 Ω y 330 Ω en serie:

- Rtotal = 220 + 330 = **550 Ω**.
- I = 9 / 550 = **0,0164 A**, unos **16,4 mA**.
- La caída en la de 220 Ω: V = I × R = 0,0164 × 220 = **3,6 V**.
- La caída en la de 330 Ω: 0,0164 × 330 = **5,4 V**.

Las dos caídas suman 9 V. La resistencia mayor se queda con más tensión, pero por las dos pasa la misma corriente.

## Qué significa "en paralelo"

Dos resistencias están **en paralelo** cuando sus extremos están unidos a los mismos dos puntos. La corriente se divide entre los dos caminos.

En un circuito en paralelo:

- La **tensión es la misma** en todas las ramas.
- La **corriente se reparte**.
- La **resistencia equivalente es menor** que la más pequeña de las resistencias.

Para dos resistencias:

**Rtotal = (R1 × R2) / (R1 + R2)**

Para tres o más:

**1 / Rtotal = 1 / R1 + 1 / R2 + 1 / R3 + ...**

Con 220 Ω y 330 Ω en paralelo:

- Rtotal = (220 × 330) / (220 + 330)
- Rtotal = 72.600 / 550
- Rtotal = **132 Ω**.

Fíjate: el resultado es menor que 220 Ω. Esa es la comprobación rápida que deberías hacer siempre.

### Ejemplo en paralelo

Con 5 V y las mismas resistencias en paralelo:

- La tensión en cada rama es **5 V**.
- Corriente por 220 Ω: I = 5 / 220 = **22,7 mA**.
- Corriente por 330 Ω: I = 5 / 330 = **15,2 mA**.
- Corriente total: 22,7 + 15,2 = **37,9 mA**.
- Comprobación: 5 / 132 = **37,9 mA**.

La rama de menor resistencia se lleva más corriente. No se reparte a partes iguales salvo que las resistencias sean iguales.

## Resistencias iguales: atajos útiles

Hay dos casos que aparecen mucho:

- **Dos resistencias iguales en paralelo:** la equivalente es la mitad. Dos de 1 kΩ dan 500 Ω.
- **Tres resistencias iguales en paralelo:** la equivalente es un tercio. Tres de 1 kΩ dan 333 Ω.

Para **N resistencias iguales en paralelo**, divide el valor entre N. Es mucho más rápido que aplicar la fórmula completa.

## Circuitos mixtos: simplifica por partes

En un circuito mixto hay serie y paralelo a la vez. No intentes meter todo en una fórmula única. Ve reduciendo grupos:

1. Identifica un grupo que esté claramente en paralelo.
2. Calcula su equivalente.
3. Sustituye el grupo por esa resistencia.
4. Repite hasta quedarte con una sola resistencia.

Ejemplo: R1 = 100 Ω en serie con un paralelo de R2 = 220 Ω y R3 = 330 Ω.

- Paralelo: (220 × 330) / (220 + 330) = **132 Ω**.
- Total: 100 + 132 = **232 Ω**.

Si el circuito tiene una fuente de 5 V, la corriente total será 5 / 232 = **21,6 mA**. Esa corriente pasa por R1, pero se reparte entre R2 y R3.

## Divisor de tensión

El divisor de tensión es una aplicación directa de la serie. Sirve para obtener una tensión menor a partir de otra. La fórmula, con la salida en R2, es:

**Vout = Vin × R2 / (R1 + R2)**

Por ejemplo, con 12 V, R1 = 1 kΩ y R2 = 680 Ω:

- Vout = 12 × 680 / (1.000 + 680)
- Vout = 12 × 680 / 1.680
- Vout = **4,86 V**.

Si necesitas acercarte más a 5 V, prueba R2 = 750 Ω: Vout = 12 × 750 / 1.750 = **5,14 V**. Los valores comerciales mandan; elige el que más se acerque a tu tolerancia.

> **Importante:** esta fórmula supone que la salida no alimenta una carga importante. Si conectas algo que consume corriente, la tensión baja. Para alimentar un circuito de verdad, usa un regulador.

## Potencia en serie y en paralelo

La potencia de cada resistencia se calcula con **P = I² × R** o **P = V² / R**. En serie, la corriente es común, así que la resistencia de mayor valor disipa más potencia. En paralelo, la tensión es común, así que la de menor valor disipa más.

Ejemplo en serie con 9 V y 220 Ω + 330 Ω:

- P(220) = 0,0164² × 220 = **0,059 W**.
- P(330) = 0,0164² × 330 = **0,089 W**.

Las dos están muy por debajo de 1/4 W. Si subes la tensión o bajas la resistencia, revisa de nuevo.

## Cómo medirlo con el multímetro

Para medir una resistencia o una combinación:

1. **Apaga y desconecta** la alimentación.
2. Si puedes, **aísla** la resistencia del resto del circuito. En paralelo, otros caminos pueden falsear la lectura.
3. Pon el multímetro en **ohmios**.
4. Toca los extremos del conjunto con las sondas.
5. Compara con el cálculo y con la **tolerancia** de las resistencias.

Una resistencia de 220 Ω con tolerancia del 5 % puede marcar entre 209 y 231 Ω. Si mide muy distinto, revisa la conexión o el valor.

## Errores frecuentes

1. **Sumar resistencias en paralelo como si estuvieran en serie.** El resultado sería demasiado alto.
2. **Olvidar que la equivalente en paralelo es menor que la menor.** Es la comprobación más rápida.
3. **Medir dentro del circuito sin aislar.** Otros componentes aparecen en paralelo y alteran la medida.
4. **Usar un divisor de tensión para alimentar una carga.** Al consumir corriente, la salida cae.
5. **Ignorar la tolerancia.** Dos resistencias del mismo valor pueden diferir un 5 % o un 10 %.
6. **No comprobar la potencia.** Una combinación correcta en ohmios puede calentarse igual.

## Preguntas frecuentes

### ¿Puedo poner resistencias de distinto valor en paralelo?

Sí. La fórmula funciona con cualquier valor. Solo ten en cuenta que la corriente se reparte de forma inversamente proporcional a la resistencia.

### ¿Qué pasa si conecto dos resistencias en serie para obtener un valor que no existe?

Es una solución perfectamente válida. La tolerancia final será la combinación de ambas, y la potencia se reparte. Es mejor que forzar un valor con una sola resistencia al límite.

### ¿Por qué mi divisor de tensión no da el valor calculado?

Porque le has conectado una carga, porque las resistencias tienen tolerancia o porque la fuente no entrega exactamente la tensión nominal. Mide la salida con el multímetro y ajusta.

## Resumen

En **serie** se suma la resistencia y la corriente es la misma. En **paralelo** la tensión es la misma y la equivalente se calcula con la fórmula del producto entre la suma. En mixtos, simplifica por partes.

Recuerda las comprobaciones rápidas: en serie el total siempre es mayor que la mayor; en paralelo, menor que la menor. Si el resultado no cumple eso, revisa la cuenta.

## Sigue con

- [Ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/) para entender las fórmulas de base.
- [Código de colores de resistencias](/electronica-basica/12-codigo-colores-resistencias/) para identificar cada valor.
- [Protoboard paso a paso](/electronica-basica/19-protoboard/) para montar y medir la combinación.
