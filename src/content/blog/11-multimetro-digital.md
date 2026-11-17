---
title: "Cómo usar un multímetro digital: voltaje, continuidad y resistencia"
description: "Aprende a medir voltaje, continuidad y resistencia con un multímetro digital sin quemar el equipo ni confundirte con las sondas."
pubDate: 2026-11-27
category: "Herramientas"
tags: ["multímetro", "principiantes", "medidas", "electrónica"]
section: "electronica-basica"
cover: "../../assets/covers/11-multimetro-digital.webp"
coverAlt: "Ilustración de un multímetro digital con pantalla y sondas roja y negra"
draft: false
---

Un **multímetro digital** es un aparato que reúne varias mediciones en uno solo. Sirve para saber si una batería está cargada, si un cable sigue unido o cuánto vale una resistencia. Es una herramienta sencilla de usar, pero conviene conocerla antes de tocar un circuito.

Al principio la rueda de símbolos puede parecer complicada. No necesitas entenderlos todos: con **voltaje**, **continuidad** y **resistencia** resuelves la mayoría de las dudas de un taller. En esta guía verás qué significa cada cosa y cómo medirla sin estropear el equipo.

<figure>
  <img src="/images/diagrams/multimetro-mediciones.svg" alt="Tres paneles que muestran cómo medir voltaje, continuidad y resistencia con un multímetro" />
  <figcaption>Las tres medidas básicas: voltaje en paralelo, continuidad con el circuito apagado y resistencia sin alimentación.</figcaption>
</figure>

## Qué es exactamente un multímetro digital

Un multímetro digital, a veces llamado **DMM**, es un medidor con una pantalla numérica y un selector giratorio. Dentro tiene un conversor que transforma la magnitud eléctrica en un número que tú lees. Frente a los medidores de aguja, el digital es más fácil de leer.

No mide una sola cosa. Según el símbolo que elijas, puede medir **voltaje**, **resistencia** o **continuidad**. Otros modelos añaden corriente, capacidad o temperatura, pero eso es extra: al principio céntrate en lo básico.

| Medida | Símbolo | Qué te dice |
|---|---|---|
| Voltaje | V | Cuánta tensión hay entre dos puntos |
| Continuidad | Zumbador | Si el camino entre dos puntos está unido |
| Resistencia | Ω | Cuánto se opone un componente al paso de corriente |

Vuelve a esta tabla cuando dudes: tensión, unión u oposición.

## Las sondas y los puertos: COM y VΩ

El multímetro tiene dos **sondas** o puntas de prueba, una **negra** y una **roja**. La negra siempre va al puerto marcado como **COM** (común). La roja va al puerto **VΩ**, que a veces aparece como VΩHz. Ese es el lugar correcto para voltaje, continuidad y resistencia.

| Puerto | Etiqueta | Uso |
|---|---|---|
| COM | Común | Sonda negra, siempre aquí |
| VΩ | Voltaje y ohmios | Sonda roja para tus tres medidas |
| mA / A | Corriente | Solo para medir corriente; déjalo libre ahora |

Muchos multímetros tienen un tercer puerto para **corriente**. No lo uses mientras aprendes: medir corriente mal conectado puede quemar el fusible interno. Si tu sonda roja no encaja en VΩ, revisa el manual; en algunos modelos el puerto cambia de sitio.

> **Consejo:** Antes de medir, junta las dos puntas. Si la pantalla muestra casi 0 Ω o suena el zumbador, las sondas y los puertos están bien colocados. Es una comprobación de diez segundos que evita muchas dudas.

## Rango automático frente a rango manual

El **rango** es el intervalo de valores que el aparato puede mostrar. En un multímetro **automático** tú eliges solo la función y el aparato ajusta la escala. En uno **manual** giras la rueda hasta una cifra concreta, por ejemplo 20 V o 200 V.

Si usas un modelo manual, empieza siempre por el rango más alto y baja poco a poco. Así evitas pasarte de escala. Cuando la pantalla marca **1**, **OL** o un número parpadeante, el valor está fuera de rango: sube la escala.

Con auto solo giras a V; con manual dedicas un segundo a elegir. Lo importante es mirar siempre qué símbolo está activo antes de tocar nada.

## Medir voltaje CC y CA

El **voltaje** es la diferencia de tensión entre dos puntos. Se mide **en paralelo**, es decir, sin cortar el cable: pones una punta en cada punto y el circuito sigue funcionando. Por eso es la medida más segura para empezar.

Hay dos tipos:

| Tipo | Símbolo | Dónde lo encuentras |
|---|---|---|
| Corriente continua (CC) | V con línea recta | Baterías, fuentes, placas de 5 o 12 V |
| Corriente alterna (CA) | V con onda | Enchufes de casa, transformadores |

Para medir voltaje sigue estos pasos:

1. Coloca la sonda negra en **COM** y la roja en **VΩ**.
2. Gira la rueda al símbolo **V** de CC o de CA según lo que midas.
3. Si el modelo es manual, elige un rango superior al valor esperado.
4. Toca con una punta cada extremo del componente o de la fuente.
5. Lee el número y anota la unidad (V o mV).
6. Retira las sondas antes de cambiar de función.

Si mides CC y sale un signo menos, solo has invertido las puntas. El valor es correcto; cambia el orden si quieres verlo positivo.

## Medir continuidad

La **continuidad** responde a una pregunta concreta: ¿hay un camino conductor entre estos dos puntos? El multímetro emite un **zumbido** cuando la resistencia es muy baja, normalmente por debajo de unos 30-50 Ω.

Esta medida es ideal para comprobar un cable, un fusible o una pista rota. El procedimiento es:

1. Apaga el circuito y desconecta la alimentación.
2. Gira la rueda al símbolo del zumbador o del diodo.
3. Junta las puntas para oír el tono de prueba.
4. Pon cada punta en un extremo del cable o del componente.
5. Interpreta: tono continuo significa unión; silencio significa corte.

No confíes solo en el oído en cables largos o bobinas: una unión con óxido puede dar un tono intermitente. Si dudas, complementa con la medida de resistencia.

## Medir resistencia

La **resistencia** mide cuánto se opone un componente al paso de la corriente. Se expresa en **ohmios (Ω)** y se mide con el circuito **sin alimentación**. Nunca midas resistencia en un circuito encendido: puedes dañar el multímetro y obtener un número sin sentido.

Gira la rueda al símbolo **Ω**, coloca las puntas en los extremos de la resistencia y espera un segundo a que el número se estabilice. En modelos manuales, cambia de rango si aparece **OL**.

Si la resistencia está soldada en una placa, otras piezas pueden alterar la lectura. Lo fiable es levantar una de sus patas o medirla antes de soldarla. Con el tiempo verás que una resistencia de 1 kΩ marca, por ejemplo, 0,98 kΩ: eso es normal.

## Precauciones antes de empezar

Antes de cada medida, repasa estas precauciones. Son pocas y evitan casi todos los accidentes:

- **Comprueba el símbolo activo** en la rueda. Un descuido con V en lugar de Ω es habitual.
- **No midas resistencia ni continuidad con corriente**: apaga y descarga el circuito.
- **No toques las puntas metálicas** con los dedos al medir resistencias altas; tu piel añade resistencia.
- **Usa sondas en buen estado**, sin cables pelados ni puntas sueltas.
- **Guarda el multímetro con la rueda en OFF** para no gastar la batería.

Si vas a medir en una instalación de 230 V, extrema las precauciones: usa sondas con categoría de seguridad adecuada y, si no tienes experiencia, no lo hagas. Para aprender, basta con circuitos de baja tensión.

## Errores frecuentes

1. **Dejar la sonda roja en el puerto de corriente.** Al medir voltaje, el aparato marca 0 o se quema el fusible. Revisa siempre COM y VΩ.
2. **Medir resistencia en un circuito encendido.** Además de dar un valor falso, puede estropear el medidor. Apaga primero.
3. **Elegir la función de CA cuando es CC, o al revés.** La pantalla mostrará un número raro o inestable. Mira el símbolo de la onda o de la línea recta.
4. **Poner las puntas en serie para medir voltaje.** El voltaje se mide en paralelo; en serie cortas el circuito y no lees nada útil.
5. **Confiar en una sola lectura.** Si un valor te sorprende, repite la medida, cambia de rango y comprueba las sondas juntas.

## Resumen

Un multímetro digital se reduce a tres gestos: coloca la sonda negra en **COM** y la roja en **VΩ**, elige el símbolo correcto y decide si mides en paralelo (voltaje) o con el circuito apagado (continuidad y resistencia). El rango automático te quita una preocupación; con rango manual, empieza alto y baja.

Domina estas tres medidas antes de pasar a corriente u otras funciones. Con ellas puedes comprobar una batería, localizar un cable cortado y verificar una resistencia. La seguridad siempre va primero: apaga, revisa la rueda y vuelve a mirar antes de tocar.
