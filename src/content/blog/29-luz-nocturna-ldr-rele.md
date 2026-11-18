---
title: "Luz nocturna con LDR y relé: proyecto paso a paso"
description: "Monta una luz que se enciende al oscurecer usando un sensor LDR, un comparador y un relé para conmutar una tira LED de 12 V."
pubDate: 2026-11-18
category: "Proyectos"
tags: ["LDR", "relé", "luz nocturna", "comparador", "proyecto"]
section: "electronica-basica"
cover: "../../assets/covers/29-luz-nocturna-ldr-rele.webp"
coverAlt: "Ilustración de una luz nocturna con sensor LDR y módulo relé controlando una tira LED"
draft: false
---

Una **luz nocturna automática** es uno de los primeros proyectos que combina un sensor, una etapa de decisión y una salida. El sensor mide la luz, el circuito decide si está oscuro y el relé enciende una lámpara. No hay microcontrolador: todo ocurre con componentes básicos.

Lo montaremos con una tira LED de **12 V**, que es segura para aprender. La misma idea sirve para una luz de armario, una señalización o un ventilador que arranca de noche. No la uses para conmutar 230 V sin aislamiento y formación.

<figure>
  <img src="/images/diagrams/luz-nocturna.svg" alt="Diagrama de una luz nocturna con LDR, comparador LM393, transistor y relé para una tira LED de 12 V" />
  <figcaption>La LDR forma un divisor de tensión. El comparador decide y el transistor activa el relé, que enciende la tira LED.</figcaption>
</figure>

## Qué vas a aprender

- Convertir la resistencia de una LDR en una tensión.
- Ajustar un umbral con un potenciómetro.
- Usar un comparador para obtener una salida limpia.
- Controlar un relé con un transistor y un diodo de flyback.
- Alimentar una carga de 12 V sin meter esa tensión en la parte de control.

## Lista de materiales

### Versión con módulos

- 1 módulo sensor de luz con LDR y salida digital.
- 1 módulo relé de 5 V con optoacoplador.
- 1 tira LED de 12 V con su fuente.
- Cables Dupont y cables para la carga.
- Fuente de 5 V para los módulos.
- Multímetro.

### Versión con componentes

- 1 LDR.
- 1 resistencia de 10 kΩ.
- 1 potenciómetro lineal de 10 kΩ.
- 1 LM393 o LM358.
- 1 transistor NPN 2N2222 o BC337.
- 1 resistencia de 1 kΩ para la base.
- 1 resistencia de 10 kΩ para el pull-up del comparador.
- 1 diodo 1N4007.
- 1 relé de 5 V.
- Fuente de 5 V y fuente de 12 V para la carga.

La versión con módulos es más rápida. La versión con componentes enseña más y permite entender el ajuste.

## Cómo funciona

La LDR cambia su resistencia con la luz:

- **Con luz:** resistencia baja.
- **A oscuras:** resistencia alta.

Si la colocamos en un divisor de tensión, el punto medio cambia. Ese punto va a una entrada del comparador. La otra entrada recibe una tensión de referencia ajustable con el potenciómetro.

El comparador compara ambas tensiones:

- Si el sensor está por encima de la referencia, la salida se activa.
- Si está por debajo, se desactiva.

Después, la salida del comparador controla un transistor. El transistor activa la bobina del relé. El relé cierra el contacto que enciende la tira LED de 12 V.

## Montaje con módulos

1. Alimenta el módulo LDR y el módulo relé con **5 V**.
2. Conecta la salida digital `DO` del módulo LDR a la entrada `IN` del relé.
3. Ajusta el potenciómetro del módulo LDR hasta que el LED indicador cambie al tapar el sensor.
4. Conecta la fuente de 12 V a la tira LED pasando por el contacto **COM** y **NO** del relé.
5. Comprueba la polaridad de la tira LED.
6. Alimenta todo y prueba.

Muchos módulos LDR activan la salida en nivel bajo cuando hay luz. Otros lo hacen al contrario. No asumas la lógica: mide con el multímetro o mira el LED del módulo. Si el relé hace lo contrario de lo que quieres, cambia la conexión a `NC` o invierte la lógica del módulo si lo permite.

El módulo relé también puede activar con nivel bajo. En ese caso, la salida del sensor y la entrada del relé deben entenderse. Si no, el sistema funcionará invertido.

## Montaje con componentes

### Etapa del sensor

1. Conecta `+5V` a un extremo de la LDR.
2. Conecta el otro extremo a una resistencia de **10 kΩ** a `GND`.
3. Toma la señal en el punto entre LDR y resistencia.
4. Lleva esa señal a la entrada **no inversora** del comparador.

Con luz, la LDR baja y la señal se acerca a 0 V. A oscuras, la LDR sube y la señal se acerca a 5 V. El sentido depende de la posición de la LDR; si lo montas al revés, el comportamiento se invierte.

### Referencia ajustable

1. Conecta los extremos del potenciómetro a `+5V` y `GND`.
2. Lleva el cursor a la entrada **inversora** del comparador.
3. Ajusta el potenciómetro para fijar el umbral.

### Salida del comparador

El LM393 tiene salida de colector abierto. Necesita una resistencia de **pull-up de 10 kΩ** a `+5V`. Sin ella, la salida no sube.

1. Conecta el pull-up de 10 kΩ entre la salida y `+5V`.
2. Conecta la salida a la base del transistor mediante **1 kΩ**.
3. Emisor del transistor a `GND`.
4. Colector a un extremo de la bobina del relé.
5. Otro extremo de la bobina a `+5V`.
6. Diodo 1N4007 en paralelo con la bobina, cátodo a `+5V`.

Cuando el comparador detecta oscuridad, su salida sube, el transistor conduce y el relé se activa.

## Ajuste del umbral

El ajuste es la parte más importante. Hazlo con la luz real del lugar:

1. Coloca el sensor donde vaya a estar.
2. Tapa el sensor con la mano o con la caja.
3. Gira el potenciómetro hasta que el relé haga clic.
4. Destapa y comprueba que se desactiva.
5. Repite varias veces para encontrar un punto estable.

Si el relé se queda oscilando entre encendido y apagado, el umbral está demasiado cerca del nivel de luz y falta **histéresis**. Añadir histéresis evita que el sistema cambie de estado con pequeñas variaciones.

Una forma sencilla es usar una resistencia de realimentación entre la salida y la entrada no inversora, o usar un comparador con histéresis. Para empezar, ajusta el umbral con margen: que encienda cuando esté claramente oscuro y se apague cuando haya luz clara.

## Conexión de la carga de 12 V

El relé es solo un interruptor. La tira LED tiene su propia fuente de 12 V.

1. Conecta el positivo de la fuente de 12 V al positivo de la tira.
2. Conecta el negativo de la tira al terminal `COM` del relé.
3. Conecta `NO` al negativo de la fuente de 12 V.
4. Al activar el relé, el circuito se cierra y la tira enciende.

También puedes conmutar el positivo. Elige una configuración y no mezcles. Comprueba la tensión y la corriente de la tira: una tira de 5 m puede consumir varios amperios. El relé debe soportar esa corriente.

No conectes la tira LED directamente a la salida de 5 V de la placa. No uses la protoboard para 230 V.

## Pruebas antes de conectar la carga

1. Alimenta solo la parte de control.
2. Mide la tensión en la bobina cuando el relé debe activarse.
3. Comprueba el clic.
4. Mide continuidad entre `COM` y `NO` en ambos estados.
5. Conecta una carga de prueba de 12 V, como una lámpara pequeña.
6. Solo después conecta la tira LED definitiva.

Si el relé no activa, revisa:

- La alimentación de 5 V.
- La masa común entre sensor, comparador y transistor.
- La polaridad del diodo.
- La resistencia de base.
- El ajuste del potenciómetro.

## Variantes

- **Luz de armario:** sustituye la tira LED por una luz de 12 V y coloca el sensor dentro.
- **Aviso de oscuridad:** usa un zumbador de 12 V en lugar de la tira.
- **Control con Arduino:** lee la LDR por una entrada analógica y activa un relé. Es una buena transición a microcontroladores.
- **Sensor de presencia:** combina una LDR con un PIR para encender solo cuando hay alguien y está oscuro.

## Seguridad

- Trabaja con 12 V y 5 V.
- No conectes la red eléctrica a la protoboard.
- Usa una fuente de 12 V con corriente suficiente.
- Comprueba la polaridad antes de encender.
- Si usas un relé para 230 V, debe ir en una caja, con aislamiento y borneras adecuadas. No es un proyecto de principiante.

## Errores frecuentes

1. **Alimentar la tira LED desde 5 V.** No encenderá o lo hará mal.
2. **No unir las masas.** El comparador y el transistor no tienen referencia.
3. **Olvidar el pull-up del LM393.** La salida no sube.
4. **No ajustar el umbral con la luz real.** Enciende a medianoche o nunca.
5. **Poner el diodo al revés.** El relé puede hacer un corto.
6. **Usar un relé de 5 V con bobina de 12 V.** No activa o se calienta.
7. **Conmutar más corriente de la que soporta el relé.** Los contactos se pegan.

## Preguntas frecuentes

### ¿Puedo usar solo una LDR y un transistor?

A veces, pero la LDR no entrega corriente suficiente para saturar un transistor con una carga grande. Un comparador o un Darlington es más fiable.

### ¿Por qué el relé se activa con luz en lugar de oscuridad?

La lógica está invertida. Cambia la posición de la LDR en el divisor, usa la otra salida del comparador o conmuta `NO` por `NC`.

### ¿Necesito un microcontrolador?

No. Este proyecto funciona con comparador. Si quieres añadir horarios o sensores, un Arduino o ESP32 simplifica la lógica.

### ¿Puedo conmutar una bombilla de 230 V?

Técnicamente, con un relé adecuado y una instalación segura. Para aprender, usa 12 V. No montes 230 V en una protoboard.

## Resumen

La luz nocturna convierte la resistencia de una LDR en una tensión, la compara con un umbral y activa un relé. La parte crítica es el ajuste y la separación entre control y carga. Con módulos es un proyecto de media hora; con componentes, una clase completa de divisor, comparador, transistor y flyback.

Monta primero con una carga de 12 V, comprueba cada etapa y deja la red eléctrica fuera del banco de pruebas.

## Sigue con

- [Diodos: polaridad y comprobación](/electronica-basica/23-diodos-polaridad-comprobacion/) para el flyback del relé.
- [Relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) para entender el aislamiento.
- [Divisor de tensión y potenciómetros](/electronica-basica/25-divisor-tension-potenciometros/) para ajustar el umbral.
- [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/) si cambias la carga por LEDs.
- [Protoboard paso a paso](/electronica-basica/19-protoboard/) para montar la parte de control.
