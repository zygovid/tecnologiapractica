---
title: "Divisor de tensión y potenciómetros: cómo calcularlos y usarlos"
description: "Aprende la fórmula del divisor de tensión, cómo elegir resistencias, qué es un potenciómetro y por qué la carga cambia el resultado."
pubDate: 2026-11-16
category: "Fundamentos"
tags: ["divisor de tensión", "potenciómetro", "resistencia", "sensor", "voltaje"]
section: "electronica-basica"
cover: "../../assets/covers/25-divisor-tension-potenciometros.webp"
coverAlt: "Ilustración de un divisor de tensión con dos resistencias y un potenciómetro"
draft: false
---

El **divisor de tensión** es un circuito de dos resistencias que convierte una tensión mayor en otra menor. Aparece en sensores, potenciómetros, entradas de microcontroladores y ajustes de referencia. Es tan común que conviene entenderlo bien antes de copiar cualquier esquema.

La fórmula es sencilla, pero tiene una trampa: si conectas una carga a la salida, la tensión cambia. En esta guía verás cómo calcular el divisor, cómo elegir los valores, qué es un **potenciómetro** y cuándo no debes usarlo como fuente de alimentación.

<figure>
  <img src="/images/diagrams/divisor-tension.svg" alt="Divisor de tensión con dos resistencias, fórmula de salida y potenciómetro de tres terminales" />
  <figcaption>La salida se toma entre las dos resistencias. Si R2 aumenta, la tensión de salida también aumenta.</figcaption>
</figure>

## La fórmula del divisor

Con dos resistencias en serie, `R1` arriba y `R2` abajo, la tensión de salida es:

**Vout = Vin × R2 / (R1 + R2)**

La corriente que circula por la rama es:

**I = Vin / (R1 + R2)**

La potencia de cada resistencia se calcula con `P = I² × R` o `P = V² / R`. No olvides comprobarla si la tensión de entrada es alta.

Un ejemplo: `Vin = 12 V`, `R1 = 10 kΩ`, `R2 = 4,7 kΩ`.

- `R1 + R2 = 14,7 kΩ`.
- `Vout = 12 × 4,7 / 14,7 = 3,84 V`.
- `I = 12 / 14.700 = 0,00082 A`, unos **0,82 mA**.

Ese divisor sirve para llevar 12 V a una entrada de 5 V, pero no para alimentar un motor ni una placa entera.

## Cómo elegir R1 y R2

No hay una pareja universal. Hay que equilibrar tres cosas:

1. **Tensión de salida:** debe quedar dentro del rango que espera el circuito.
2. **Corriente:** demasiado poca hace el divisor sensible al ruido; demasiada consume batería.
3. **Impedancia de la carga:** si la carga consume, el divisor se desvía.

Para una entrada de microcontrolador, una corriente de **0,1–1 mA** suele ser razonable. Eso lleva a resistencias de decenas de kiloohmios. Para una referencia que debe ser estable, baja la impedancia, pero acepta más consumo.

Si necesitas 5 V a partir de 12 V:

- Con `R1 = 10 kΩ` y `R2 = 7,5 kΩ`, `Vout = 12 × 7,5 / 17,5 = 5,14 V`.
- Con `R1 = 10 kΩ` y `R2 = 6,8 kΩ`, `Vout = 4,88 V`.
- Con `R1 = 4,7 kΩ` y `R2 = 3,3 kΩ`, `Vout = 4,95 V`.

El último par consume más corriente, pero es más robusto frente a cargas ligeras.

## El problema de la carga

La fórmula anterior supone que no sale corriente por `Vout`. Si conectas una carga `RL` entre la salida y GND, esa carga queda en paralelo con `R2`. La resistencia equivalente baja y la tensión de salida cae.

Ejemplo: divisor de `10 kΩ` y `10 kΩ` con 12 V. Sin carga, `Vout = 6 V`. Si conectas una carga de `10 kΩ`, el paralelo de `R2` y `RL` es `5 kΩ`. La nueva salida es:

- `Vout = 12 × 5 / (10 + 5) = 4 V`.

La caída es enorme. Por eso un divisor no es una fuente de alimentación. Para alimentar algo, usa un regulador o una fuente adecuada.

## Potenciómetro: un divisor ajustable

Un **potenciómetro** es una resistencia con un contacto móvil. Tiene tres terminales: los dos extremos de la resistencia y el cursor o wiper. Si conectas los extremos a `Vin` y `GND`, el cursor entrega una fracción de la tensión.

En un potenciómetro lineal, la tensión de salida cambia de forma proporcional al giro. En uno logarítmico, cambia de forma no lineal; se usa en audio. Para ajustar una referencia o calibrar un sensor, necesitas uno **lineal**.

El valor típico es **10 kΩ**. Un valor muy alto hace el divisor más sensible al ruido y a la impedancia de entrada. Un valor muy bajo consume más corriente.

### Potenciómetro de tres patillas

1. Patilla 1: un extremo de la resistencia, normalmente GND.
2. Patilla 2: cursor, la salida ajustable.
3. Patilla 3: el otro extremo, normalmente Vin.

Si intercambias 1 y 3, el sentido de giro se invierte. Si conectas solo dos patillas, lo usas como resistencia variable, no como divisor.

### Potenciómetro como resistencia variable

Para limitar corriente, puedes usar solo el cursor y un extremo. Pero cuidado: si el cursor se abre por desgaste, la resistencia puede quedar abierta y la corriente caer a cero. En circuitos de potencia, un potenciómetro no es un buen control de corriente.

## Divisor con un sensor resistivo

Muchos sensores cambian su resistencia con la magnitud física: **LDR** con la luz, **NTC** con la temperatura, galgas con la fuerza. El divisor convierte esa resistencia en tensión.

Con una LDR arriba y una resistencia fija abajo:

- Con mucha luz, la LDR baja su resistencia y `Vout` baja.
- Con poca luz, la LDR sube y `Vout` sube.

Con la LDR abajo ocurre al contrario. El sentido depende de dónde coloques el sensor. Puedes verlo aplicado en [luz nocturna con LDR y relé](/electronica-basica/29-luz-nocturna-ldr-rele/) y en [sensor de temperatura con comparador](/electronica-basica/31-sensor-temperatura-comparador/).

## Divisor para medir una tensión mayor

Si quieres medir 12 V con una entrada que solo admite 5 V, puedes usar un divisor. Pero debes tener en cuenta:

- La impedancia de entrada del medidor o del microcontrolador.
- La tolerancia de las resistencias.
- La tensión máxima real, incluidos picos.
- Un margen de seguridad: no lleves la entrada al límite exacto.

Para 12 V a 5 V, un divisor `10 kΩ / 6,8 kΩ` da 4,88 V. Para 24 V, necesitas una relación mayor. No uses esta técnica para medir 230 V sin aislamiento, transformador o un circuito preparado para ello.

## Divisor con una entrada de 3,3 V

Si tu placa es de 3,3 V, el divisor debe bajar aún más. Para 5 V a 3,3 V:

- `R1 = 10 kΩ`, `R2 = 20 kΩ`: `Vout = 5 × 20 / 30 = 3,33 V`.
- `R1 = 4,7 kΩ`, `R2 = 9,1 kΩ`: `Vout = 3,32 V`.

Comprueba la tolerancia. Con resistencias al 5 %, la salida puede variar lo suficiente para acercarse al límite. Si la entrada no tolera 3,6 V, deja más margen.

## Cómo comprobarlo con el multímetro

1. Monta el divisor sin carga.
2. Alimenta con la tensión prevista.
3. Mide `Vin` en la entrada.
4. Mide `Vout` entre el punto medio y GND.
5. Compara con el cálculo.
6. Conecta la carga y vuelve a medir.

Si la tensión cae mucho al conectar la carga, el divisor no tiene corriente suficiente o la carga es demasiado baja. Si `Vout` es cero, revisa la masa y las uniones. Si es igual a `Vin`, `R2` puede estar abierta o el cursor mal conectado.

## Errores frecuentes

1. **Usar el divisor como fuente de alimentación.** La tensión se cae al conectar la carga.
2. **Olvidar la corriente del divisor.** Un divisor de megaohmios es fácil de perturbar.
3. **Conectar mal el potenciómetro.** El cursor debe ser la salida, no un extremo.
4. **No comprobar la potencia.** En tensiones altas, las resistencias se calientan.
5. **Medir con el circuito apagado.** La tensión de salida no existe sin alimentación.
6. **Confundir la relación.** `R2` es la resistencia entre la salida y GND, no la de arriba.
7. **Usar un potenciómetro para controlar corriente de un motor.** No está pensado para eso.

## Preguntas frecuentes

### ¿Puedo usar un divisor para alimentar un Arduino?

No es recomendable. El divisor tiene alta impedancia y la tensión cae al conectar la placa. Usa una fuente de 5 V o un regulador.

### ¿Qué potenciómetro necesito para una entrada analógica?

Uno lineal de **10 kΩ** suele ser una elección segura. Comprueba que la entrada tolera la tensión máxima que entrega el divisor.

### ¿Por qué cambia la lectura cuando toco el cursor?

La entrada puede estar flotando o el divisor tiene una impedancia muy alta. Añade una resistencia de pull-down o baja los valores.

### ¿Sirve para corriente alterna?

Sí, con resistencias y dentro de sus límites de tensión y potencia. Pero para medidas de red necesitas aislamiento y seguridad; no lo improvises.

## Resumen

El divisor de tensión se calcula con **Vout = Vin × R2 / (R1 + R2)**. Sirve para adaptar señales y leer sensores resistivos, no para alimentar cargas. Si conectas una carga, la salida cae; para evitarlo, baja la impedancia del divisor o usa un regulador.

El potenciómetro es un divisor ajustable. Conecta los extremos a la alimentación y toma la señal por el cursor. Con estos dos conceptos puedes calibrar sensores, ajustar referencias y entender muchos esquemas que parecen más complicados de lo que son.

## Sigue con

- [Ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/) para calcular corriente y disipación.
- [Resistencias en serie y paralelo](/electronica-basica/18-resistencias-serie-paralelo/) para entender la carga del divisor.
- [Sensor de temperatura con comparador](/electronica-basica/31-sensor-temperatura-comparador/) para ver un divisor en un proyecto.
- [Cómo usar un multímetro digital](/electronica-basica/11-multimetro-digital/) para comprobar la tensión de salida.
