---
title: "Cómo alimentar una protoboard: 5 V, 3,3 V y pilas sin sorpresas"
description: "Guía práctica para dar corriente a tus montajes: raíles de protoboard, USB, pilas, reguladores y errores que pueden quemar componentes."
pubDate: 2026-11-16
category: "Montaje"
tags: ["alimentación", "protoboard", "5V", "3.3V", "pilas"]
section: "electronica-basica"
cover: "../../assets/covers/26-alimentar-protoboard.webp"
coverAlt: "Ilustración de una protoboard con raíles de alimentación, USB y regulador de 3,3 V"
draft: false
---

Montar un circuito es la parte divertida. Alimentarlo mal es la forma más rápida de quemar un LED, un sensor o la placa que acabas de comprar. Una **protoboard** no tiene protección: si conectas 12 V donde van 3,3 V, el componente no perdona.

En esta guía verás cómo funcionan los raíles de alimentación, qué fuentes puedes usar, cómo pasar de 5 V a 3,3 V y cómo comprobar todo con el multímetro antes de conectar el circuito.

<figure>
  <img src="/images/diagrams/alimentar-protoboard.svg" alt="Protoboard con raíles de positivo y masa, entrada USB y regulador de 3,3 V" />
  <figcaption>Los raíles superior e inferior suelen estar separados por una interrupción en el centro. Comprueba la continuidad antes de confiar en ellos.</figcaption>
</figure>

## Los raíles de la protoboard no son mágicos

En una protoboard típica, las filas centrales conectan cinco agujeros entre sí. Los raíles de los extremos, marcados con `+` y `−`, recorren la placa a lo largo, pero muchos modelos tienen una **interrupción en el centro**. Si no lo compruebas, la mitad del circuito puede no recibir tensión.

Antes de montar:

1. Coge el multímetro en continuidad.
2. Comprueba qué agujeros del raíl están unidos.
3. Localiza la interrupción central.
4. Comprueba también que el raíl `+` no está unido al `−`.

En protoboards baratas, los contactos se aflojan con el uso. Un componente que "a veces funciona" puede ser un contacto malo, no un fallo del circuito.

## Elige una tensión y respétala

No todos los componentes toleran lo mismo:

| Componente | Tensión típica | Cuidado |
|---|---|---|
| LED rojo | 1,8–2,2 V | Necesita resistencia limitadora |
| LED azul/blanco | 2,8–3,3 V | Puede no encender con 1,5 V |
| Lógica de 5 V | 5 V | No meter 12 V |
| Lógica de 3,3 V | 3,3 V | 5 V puede destruirla |
| Relé de 5 V | 5 V en la bobina | La bobina consume |
| Motor DC pequeño | 3–12 V | Puede meter ruido en la alimentación |

La tensión de alimentación no es lo mismo que la tensión que cae en un componente. Un LED de 2 V conectado a 5 V necesita una resistencia para absorber la diferencia. La fórmula está en [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/).

## Alimentación por USB

Un cargador USB o un puerto USB de 5 V es cómodo para protoboards. Puedes usar un módulo USB a protoboard o un cable con terminales.

Ventajas:

- Tensión estable de 5 V.
- Corriente suficiente para LEDs y sensores.
- Fácil de conectar.

Riesgos:

- Algunos cargadores no entregan 5 V exactos.
- Un puerto USB de ordenador puede limitar la corriente.
- Si haces un cortocircuito, el puerto puede desconectarse o sufrir.
- No todos los cables USB son de datos y alimentación; algunos solo cargan.

Para un montaje básico, un cargador de 5 V y 1 A es una buena opción. No uses el puerto de un portátil caro como banco de pruebas si puedes evitarlo.

## Pilas y baterías

Las pilas son portables y aíslan del ruido de la red, pero su tensión baja con el uso.

- **4 pilas AA en serie:** unos 6 V nominales, menos con carga.
- **Pila de 9 V:** cómoda para 555 y relés, poca capacidad.
- **Batería LiPo:** 3,7 V nominal, requiere cargador y protección.
- **Batería de 12 V:** pesada y con más corriente; revisa polaridad.

No conectes pilas en paralelo sin cuidado: si tienen tensiones distintas, circula corriente entre ellas. No cargues una pila no recargable. Y no dejes una LiPo sin protección conectada a un circuito defectuoso.

## Reguladores: de 5 V a 3,3 V

Muchos módulos necesitan 3,3 V. Puedes usar:

- **Regulador lineal AMS1117-3.3:** sencillo, pero disipa calor si la diferencia de tensión es grande.
- **Módulo regulador ajustable:** cómodo para protoboard.
- **Fuente de laboratorio:** ideal si la tienes.
- **Convertidor buck:** más eficiente para corrientes altas.

Un regulador lineal de 3,3 V alimentado desde 5 V tiene una caída de 1,7 V. Si el circuito consume 300 mA, disipa `1,7 × 0,3 = 0,51 W`. Puede calentarse. Con 12 V de entrada y 300 mA, disipa 2,6 W y necesita disipador.

Los módulos reguladores suelen tener un **condensador de entrada y otro de salida**. Respeta la polaridad y no los sustituyas por valores arbitrarios.

## Masa común: la referencia de todo

Si un circuito tiene dos alimentaciones, sus masas deben estar unidas salvo que uses aislamiento. Una señal de 3,3 V no significa nada para un transistor si no comparte referencia con su emisor.

Ejemplo: controlas un relé de 5 V desde una placa de 3,3 V. La placa y la bobina pueden tener tensiones distintas, pero el emisor del transistor y la masa de la placa deben estar conectados. Si no, la base no tiene referencia y el relé no conmuta bien.

En un optoacoplador o un relé, la parte de potencia puede estar aislada. Ahí no unes las masas; precisamente buscas separación. Lo verás en [relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/).

## Corriente: suma antes de conectar

Una fuente de 5 V y 1 A no significa que puedas conectar cualquier cosa. Suma el consumo:

- LED pequeño: 10–20 mA.
- Módulo sensor: 5–50 mA.
- Relé: 50–100 mA.
- Motor pequeño: 200–500 mA o más al arrancar.
- Tira LED: puede pedir amperios.

Los motores y relés tienen picos de arranque. Deja margen. Si la fuente se queda corta, la tensión baja, la placa se reinicia o el circuito hace cosas raras.

## Comprobación antes de encender

1. Desconecta la alimentación.
2. Revisa polaridad en todos los electrolíticos.
3. Comprueba que no hay un corto entre `+` y `−` con el multímetro en continuidad.
4. Ajusta la fuente a la tensión correcta antes de conectarla.
5. Conecta la alimentación y mide la tensión en el raíl.
6. Si hay varios raíles, mide cada uno.
7. Toca los componentes con cuidado: si algo se calienta mucho, desconecta.

Un cortocircuito en una protoboard puede no hacer ruido. El multímetro es tu mejor aliado.

## Protecciones sencillas

- **Diodo en serie** con la alimentación para evitar polaridad invertida. Introduce una caída de 0,7 V.
- **Fusible rearmable** o resistencia de bajo valor para limitar una prueba.
- **Condensador de desacoplo** de 100 nF cerca de cada circuito integrado.
- **Diodo de flyback** en relés y motores.
- **Separación física** entre la parte de baja tensión y cualquier parte de red.

No uses la protoboard para 230 V. Ni siquiera para "probar un momentito". Las distancias entre contactos son demasiado pequeñas y el riesgo es real.

## Errores frecuentes

1. **Confiar en los raíles sin comprobar la interrupción central.**
2. **Conectar 5 V a un módulo de 3,3 V.** Revisa la serigrafía y la ficha.
3. **No unir las masas.** La señal no tiene referencia.
4. **Alimentar un motor desde el regulador de la placa.** El pico de arranque puede reiniciarla.
5. **Usar una pila de 9 V para todo.** Tiene poca capacidad y su tensión cae.
6. **Dejar cables sueltos.** Un cable que toca otro raíl puede crear un corto.
7. **Medir corriente con las puntas en paralelo.** Puedes quemar el fusible del multímetro.

## Preguntas frecuentes

### ¿Puedo alimentar la protoboard con el USB del ordenador?

Sí, para consumos pequeños. Si el circuito tiene motores o relés, usa una fuente externa y une las masas si corresponde.

### ¿Cuánta corriente entrega un cargador de 5 V?

Depende del cargador. Mira la etiqueta: `5 V ⎓ 1 A`, `5 V ⎓ 2 A`, etc. No superes su corriente nominal.

### ¿Necesito un regulador para 3,3 V?

Solo si tu placa o módulo lo exige. No alimentes una entrada de 3,3 V con 5 V "a ver si aguanta".

### ¿Por qué se reinicia mi placa al encender un relé?

La bobina consume y genera un pico. Alimenta el relé desde una fuente separada o añade un condensador y un diodo de flyback. Comprueba también la masa común.

## Resumen

Alimentar una protoboard requiere tres comprobaciones: **tensión correcta**, **polaridad correcta** y **masa común** cuando corresponde. Los raíles pueden estar interrumpidos; verifícalos con continuidad. Para 3,3 V usa un regulador adecuado y calcula su disipación. Para motores y relés, deja margen de corriente y añade flyback.

Nunca uses una protoboard para trabajar con la red eléctrica. Con baja tensión y estas comprobaciones, tus montajes serán mucho más seguros y repetibles.

## Sigue con

- [Protoboard paso a paso](/electronica-basica/19-protoboard/) para entender las filas y los raíles.
- [Cables y conectores básicos](/electronica-basica/16-conectores-basicos/) para elegir la conexión adecuada.
- [Cómo medir corriente con el multímetro](/electronica-basica/20-medir-corriente-multimetro/) para comprobar el consumo real.
- [Relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) para separar control y carga.
