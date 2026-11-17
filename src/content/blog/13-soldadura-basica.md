---
title: "Cómo soldar cables y terminales por primera vez"
description: "Guía práctica para soldar cables y terminales con estaño: herramientas, temperatura, junta correcta y errores de principiante."
pubDate: 2026-11-29
category: "Herramientas"
tags: ["soldadura", "estaño", "herramientas", "principiantes"]
section: "electronica-basica"
cover: "../../assets/covers/13-soldadura-basica.webp"
coverAlt: "Ilustración de un cautín formando una junta de soldadura sobre una placa"
draft: false
---

Soldar es unir dos piezas de metal con un material metálico fundido llamado **estaño**. En electrónica se usa para fijar cables a terminales o componentes a una placa. La junta resultante conduce la electricidad y aguanta el paso del tiempo si se hace bien.

Si nunca has soldado, lo normal es quemarte los dedos la primera vez o dejar una unión que no brilla. No pasa nada: con las herramientas adecuadas y unos minutos de práctica se consigue una soldadura limpia. Esta guía va de lo básico a la junta correcta, con la seguridad por delante.

<figure>
  <img src="/images/diagrams/soldadura-junta.svg" alt="Comparación entre una junta de soldadura correcta y una junta fría" />
  <figcaption>Una junta correcta es brillante y cónica; una junta fría es opaca, redondeada y se agrieta.</figcaption>
</figure>

## Herramientas mínimas

No hace falta un equipo caro. Para empezar necesitas esto:

| Herramienta | Para qué sirve | Recomendación |
|---|---|---|
| Cautín | Calentar la unión | 30-60 W, punta fina |
| Estaño | Crear la junta | 0,6-1 mm, con fundente |
| Soporte | Dejar el cautín caliente | Con base metálica estable |
| Esponja o lana de latón | Limpiar la punta | Esponja ligeramente húmeda |
| Pinzas y cortadores | Sujetar y recortar | Los básicos de siempre |
| Protección | Proteger manos y ojos | Gafas y guantes |

También ayuda un **multímetro** para comprobar la continuidad después de soldar, y un terminal suelto donde practicar antes de tocar una placa.

> **Consejo:** Practica primero con un cable viejo y un terminal de desecho. No empieces soldando una placa cara: equivocarte con piezas que ya no sirven no cuesta nada.

## Estaño con fundente frente a estaño sin fundente

El **fundente** es una resina que limpia el metal mientras se calienta y ayuda a que el estaño se adhiera. Casi todo el estaño para electrónica que se vende en carrete ya lo lleva dentro: se llama **estaño con fundente** o con rosina.

También existe el estaño **sin fundente**. Con él tienes que aplicar la resina aparte, normalmente con una pasta o un lápiz. No es lo recomendable al principio: sin fundente, el estaño tiende a formar bolas y la junta queda opaca.

Si usas estaño con fundente, no añadas más resina. El humo que sale es normal y es señal de que el fundente está actuando: por eso hace falta ventilación.

## Temperatura aproximada

El estaño se funde a unos **183-190 °C** si lleva plomo, y a unos **217-235 °C** si es sin plomo. El cautín debe estar algo por encima, normalmente en el rango de **300-350 °C**.

No subas la temperatura al máximo para que caliente antes. A demasiada temperatura quemas el fundente, dañas la placa y la punta se desgasta más rápido. A demasiada baja, el estaño no fluye y aparecen juntas frías.

| Situación | Temperatura orientativa |
|---|---|
| Estaño con plomo | 300-320 °C |
| Estaño sin plomo | 330-350 °C |
| Componentes sensibles | El extremo bajo del rango |

Si tu cautín no tiene control de temperatura, deja que se caliente unos minutos y haz una prueba con un trozo pequeño de estaño antes de soldar de verdad.

## Estañar y limpiar la punta

Antes de soldar, la punta del cautín debe estar limpia y con una capa fina de estaño. A eso se llama **estañar la punta**.

1. Calienta el cautín y limpia la punta en la esponja húmeda o en lana de latón.
2. Toca la punta con el extremo del estaño durante un segundo.
3. Retira el exceso pasando la punta por la esponja.
4. Repite cada vez que la punta se ponga negra o el estaño deje de fluir.

Una punta estañada transmite mejor el calor y evita que el estaño se quede pegado al cautín en lugar de a la pieza. Es el paso que más mejora tus juntas durante las primeras sesiones.

## Soldar cable a terminal

Vamos con un cable y un terminal de tornillo o de engaste:

1. **Pela el cable** entre 5 y 8 mm con el pelacables. No cortes los hilos.
2. **Retuerce los hilos** para que no se separen.
3. **Calienta el terminal**, no el estaño. Apoya la punta del cautín en la superficie metálica.
4. **Acerca el estaño** al lado opuesto de la punta, tocando el metal caliente, no el cautín directamente.
5. **Deja fluir** la cantidad justa: una capa fina que envuelva el cable.
6. **Retira primero el estaño** y después el cautín, sin mover la pieza.
7. **Espera a que enfríe** antes de tirar del cable.

El tiempo total suele estar entre 2 y 4 segundos. Si tarda más, el metal no se calienta lo suficiente o la punta está sucia.

## Soldar cable a placa

Para unir un cable a una placa, el proceso cambia muy poco:

1. Introduce el cable pelado por el taladro de la placa.
2. Sujétalo para que no se mueva, con pinzas si hace falta.
3. Calienta a la vez la **pista** y el cable con la punta del cautín.
4. Acerca el estaño y deja que corra alrededor del taladro.
5. Retira el cautín en cuanto la junta brille.
6. Recorta el sobrante de cable con los cortadores.

No calientes el estaño hasta que gotee sobre la placa. El objetivo es que el metal caliente funda el estaño, no que el cautín suelte una gota encima.

## Junta correcta frente a junta fría

Una **junta correcta** tiene forma cónica, brilla y cubre el cable y la pista sin exceso. Una **junta fría** es opaca, redondeada, como una bolita, y suele agrietarse con el tiempo.

| Señal | Junta correcta | Junta fría |
|---|---|---|
| Brillo | Brillante | Opaco, grisáceo |
| Forma | Cónica y extendida | Redonda, en bola |
| Contacto | Cubre ambas piezas | Solo toca una |
| Resistencia | Muy baja | Irregular |

Si una junta te sale mal, no intentes disimularla con más estaño. Caliéntala de nuevo, retira el exceso con una bomba de estaño o una trenza y vuelve a soldar.

## Ventilación y seguridad

El fundente libera humo que no conviene respirar. Trabaja en una zona ventilada o usa un **extractor de humos** pequeño. Coloca el cautín en su soporte cuando no lo uses: nunca lo dejes apoyado en la mesa.

Lleva **gafas de protección**, porque una salpicadura de estaño caliente puede llegar a los ojos. Usa guantes si vas a manipular piezas calientes y mantén el cable del cautín lejos de la punta.

Apaga el cautín al terminar y déjalo enfriar en su soporte antes de guardarlo. Si hay niños o mascotas cerca, usa una base estable y no dejes cables sueltos al alcance.

## Errores frecuentes

1. **Calentar el estaño en vez de la pieza.** El estaño debe fundirse al tocar el metal caliente, no gotear desde el cautín.
2. **Usar demasiado estaño.** Una bola grande no hace mejor junta y puede unir pistas que no debían tocarse.
3. **Mover la pieza mientras enfría.** La soldadura se agrieta. Mantén todo quieto unos segundos.
4. **No limpiar la punta.** Una punta negra no transmite calor y deja juntas opacas.
5. **Soldar sin ventilación.** El humo del fundente molesta y no es bueno respirarlo.
6. **Trabajar a temperatura demasiado alta.** Quema el fundente, levanta pistas y acorta la vida del cautín.

Comprueba siempre la unión con el multímetro en continuidad. Si suena, tienes un camino conductor; si no suena, vuelve a calentar la junta.

## Resumen

Soldar bien se resume en cuatro ideas: herramientas mínimas, estaño con fundente, temperatura de unas 300-350 °C y una punta limpia. Calienta la pieza, no el estaño, usa la cantidad justa y no muevas la unión hasta que enfríe.

Una junta brillante y cónica es señal de buen trabajo; una bola opaca pide repetir la operación. Empieza con cables y terminales de desecho, comprueba la continuidad con el multímetro y pasa a la placa cuando ya te salga sin pensar.
