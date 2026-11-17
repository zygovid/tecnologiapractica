---
title: "Diodo, condensador y transistor: cómo comprobarlos con un multímetro"
description: "Aprende a identificar diodos, condensadores y transistores básicos y a comprobarlos con un multímetro sin experiencia previa."
pubDate: 2026-12-01
category: "Componentes"
tags: ["diodos", "condensadores", "transistores", "multímetro"]
section: "electronica-basica"
cover: "../../assets/covers/15-componentes-multimetro.webp"
coverAlt: "Ilustración con un diodo, un condensador y un transistor junto a un multímetro"
draft: false
---

Un **diodo**, un **condensador** y un **transistor** son tres de los componentes que más dudas generan al principio. No se ven muy distintos de un resistor, pero su comportamiento es muy diferente. Con un **multímetro** barato puedes comprobar los tres en casa y saber si funcionan, sin necesidad de un banco de laboratorio.

<figure>
  <img src="/images/diagrams/componentes-multimetro.svg" alt="Paneles con las pruebas de diodo, condensador y transistor NPN con un multímetro" />
  <figcaption>Pruebas básicas con el circuito apagado: diodo, condensador y transistor NPN.</figcaption>
</figure>

## Antes de empezar: seguridad

Apaga el equipo y desconecta la alimentación. Nunca compruebes resistencias ni diodos con el circuito encendido: el multímetro aplica su propia corriente y puedes estropearlo.

Los **condensadores** son el peligro invisible. Pueden guardar tensión mucho tiempo después de apagar el aparato, sobre todo en fuentes de alimentación. Espera unos minutos y, antes de tocar, descárgalos con una **resistencia de 1 kΩ** entre las dos patillas durante unos segundos. Después confirma con el modo tensión que marca 0 V. No lo hagas con un destornillador directo: la chispa y el ruido no son broma.

> **Consejo:** Si vas a medir dentro de una placa, retira al menos una patilla del componente. Así evitas que otras piezas alrededor cambien la lectura.

## Los modos que vas a usar

El **modo diodo** (el símbolo parecido a una flecha con una barra, `→|`) muestra la caída de tensión en voltios. El **modo resistencia** (Ω) muestra ohmios y sirve para ver si algo conduce o está abierto. Muchos multímetros tienen también **modo capacitancia**, que mide en faradios (F), aunque en los modelos básicos tendrás que conformarte con el modo resistencia.

Gira el selector con calma y asegúrate de que las puntas están en los taladros correctos: negra en **COM** y roja en **V/Ω**. Si pones la roja en el taladro de corriente, puedes quemar el fusible del aparato.

## Cómo probar un diodo

1. **Apaga y aísla** el diodo, retirando una patilla si está soldado.
2. **Pon el modo diodo.** La punta roja va al **ánodo** y la negra al **cátodo** (la franja pintada en el cuerpo).
3. **Lectura correcta:** entre **0,5 y 0,7 V** en un diodo de silicio. En un diodo Schottky baja a 0,2-0,3 V. Ese **0,6 V** es la huella típica del diodo sano.
4. **Invierte las puntas.** Ahora debe marcar **OL** (fuera de escala), porque el diodo bloquea en sentido inverso.
5. **Interpreta:** si marca 0,6 V en los dos sentidos, está en corte. Si marca OL en los dos, está abierto.

El diodo **LED** se comprueba igual, con la salvedad de que su caída es mayor: unos 1,8-2 V el rojo y 3 V el blanco. En modo diodo muchos LED encienden débilmente, lo que confirma que la unión está viva.

## Cómo probar un condensador

Con el **modo resistencia**, conecta las puntas a las dos patillas. Al principio la lectura es baja y después **va subiendo** poco a poco hasta valores muy altos (MΩ o OL). Eso es normal: el multímetro está cargando el condensador a través de su propia corriente de prueba. Si inviertes las puntas, verás que el fenómeno se repite.

Si tu multímetro tiene **modo capacitancia**, la lectura debe acercarse al valor impreso en el cuerpo. Un condensador de 100 µF puede marcar perfectamente 95 o 108 µF: las tolerancias son amplias y eso no significa que esté mal.

Una lectura que se queda en 0 Ω y no sube indica un condensador en **corte interno**. Una lectura que no sube nunca y se queda baja es señal de que se ha **secado**: ha perdido capacidad y ya no filtra. Antes de repetir la prueba, descárgalo otra vez.

## Polaridad de los electrolíticos

Los condensadores **electrolíticos** sí tienen polaridad. La patilla más larga es el positivo (+) y la otra lleva una franja de rayas en el cuerpo que marca el negativo (−). En los modelos de superficie, el negativo se identifica con una franja o una marca impresa.

Conectarlos al revés es un error clásico: el componente se calienta, se hincha y puede reventar. Si ves la tapa superior abombada o restos marrones en la base, sustitúyelo sin pensarlo. Los condensadores **cerámicos** y de película, en cambio, no tienen polaridad y puedes ponerlos en cualquier sentido.

## El transistor NPN como dos diodos

Un **transistor NPN** tiene tres patillas: **base (B)**, **colector (C)** y **emisor (E)**. La forma fácil de verlo es imaginar **dos diodos** que salen de la base. Entre base y emisor hay una unión; entre base y colector, otra.

Con el multímetro en modo diodo:

- Punta roja en la **base**, negra en el **emisor**: unos **0,6 V**.
- Punta roja en la **base**, negra en el **colector**: unos **0,6 V**.
- Al invertir las puntas en esas dos parejas: **OL**.
- Entre **colector y emisor**: **OL** en ambos sentidos.

Si no sabes cuál es la base, prueba cada patilla contra las otras dos hasta encontrar la que da dos lecturas de 0,6 V. Esa es la base. En un transistor **PNP** el procedimiento es el mismo, pero se invierten los colores: la negra va a la base y la roja al emisor o al colector.

## Señales de que un componente está mal

Ninguna prueba suelta lo demuestra todo, pero estos patrones te orientan muy bien:

| Síntoma en el multímetro | Causa probable | Qué hacer |
|---|---|---|
| Diodo marca 0,6 V en ambos sentidos | Diodo en corte | Sustituirlo |
| Diodo marca OL en ambos sentidos | Diodo abierto | Sustituirlo |
| LED no enciende ni marca caída | Unión rota | Cambiar el LED |
| Condensador no sube de 0 Ω | Corte interno | Sustituirlo |
| Condensador marca capacidad muy baja | Electrolítico secado | Sustituirlo |
| Transistor marca 0 Ω entre B y E | Corto en la unión | Cambiar el transistor |
| Transistor marca OL entre B y E | Unión abierta | Cambiar el transistor |
| Electrolítico hinchado o con manchas | Daño térmico | Retirarlo y revisar la causa |

Si la placa funciona mal pero todo marca correcto, no culpes al componente todavía. Puede haber una soldadura fría, un cable suelto o un valor de resistencia cambiado.

## Errores frecuentes

1. **Medir con el circuito encendido.** Los valores no sirven y puedes dañar el multímetro.
2. **Olvidar descargar un condensador.** Guarda tensión y puede darte un susto o estropear el aparato.
3. **Medir en placa sin aislar.** Los componentes vecinos falsean la lectura.
4. **Esperar 0,6 V en un LED.** Un LED rojo marca cerca de 2 V; un blanco, cerca de 3 V.
5. **Confundir la franja del diodo.** La franja es el cátodo, no el ánodo.
6. **Dar por bueno un electrolítico hinchado.** Aunque mida algo, ya no es fiable.

## Resumen

Con el circuito apagado y los condensadores descargados, el **modo diodo** te dice si una unión conduce en un sentido y bloquea en el otro: **0,6 V y OL** es la señal sana de un diodo de silicio. El **modo resistencia** te muestra cómo la lectura de un condensador **sube** mientras se carga. Y un **transistor NPN** se comporta como dos diodos unidos por la base.

Empieza por componentes sueltos sobre la mesa, sin soldar. Cuando domines esas tres pruebas, pasar a medir dentro de una placa será mucho más fácil.
