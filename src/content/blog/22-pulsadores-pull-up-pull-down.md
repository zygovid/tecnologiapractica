---
title: "Pulsadores, interruptores y pull-up/pull-down: cómo conectar una entrada"
description: "Diferencia entre pulsador e interruptor, contactos NO/NC y cómo usar resistencias pull-up o pull-down para que una entrada no quede flotando."
pubDate: 2026-11-15
category: "Componentes"
tags: ["pulsadores", "interruptores", "pull-up", "pull-down", "antirrebote"]
section: "electronica-basica"
cover: "../../assets/covers/22-pulsadores-pull-up-pull-down.webp"
coverAlt: "Ilustración de un pulsador con resistencia pull-up y pull-down conectado a una entrada"
draft: false
---

Un **pulsador** y un **interruptor** parecen lo mismo, pero no lo son. El pulsador solo actúa mientras lo mantienes apretado; el interruptor cambia de estado y se queda así. Elegir mal el componente o dejar una entrada "flotando" es una fuente clásica de fallos intermitentes.

En esta guía verás los tipos de contacto, cómo conectar un pulsador a una entrada y por qué hacen falta las resistencias **pull-up** o **pull-down**. También verás el **rebote** y cómo evitar que un solo pulsador cuente como diez.

<figure>
  <img src="/images/diagrams/pulsadores-pull-up.svg" alt="Circuito con pulsador, resistencia pull-up y resistencia pull-down conectados a una entrada" />
  <figcaption>Con pull-up, la entrada está en HIGH en reposo y baja a LOW al pulsar. Con pull-down ocurre al contrario.</figcaption>
</figure>

## Pulsador e interruptor no son lo mismo

Un **pulsador** es momentáneo: tiene un estado de reposo y cambia solo mientras lo presionas. Al soltarlo, vuelve. Se usa para botones de "start", reset o entrada de usuario.

Un **interruptor** mantiene el estado. Lo pones en una posición y se queda ahí hasta que lo cambias. Se usa para encender/apagar, seleccionar una opción o cortar una alimentación.

También existen **conmutadores** y **selectores**, que pueden tener varias posiciones. Para empezar, quédate con la diferencia básica: momentáneo frente a permanente.

## Contactos NO y NC

Los contactos se describen por su estado en reposo:

- **NO (normalmente abierto):** no conduce hasta que lo accionas.
- **NC (normalmente cerrado):** conduce hasta que lo accionas.

Un pulsador de "start" suele ser **NO**: al apretar, cierra el circuito. Un pulsador de "stop" o de seguridad suele ser **NC**: al apretar, abre el circuito y detiene el sistema.

En un esquema, NO y NC se dibujan distintos. Si compras un pulsador sin ficha, usa el multímetro en continuidad para saber qué patillas están unidas en reposo y cuáles al pulsar.

## Polos y posiciones

Verás siglas como **SPST**, **SPDT**, **DPST** y **DPDT**:

- **SPST:** un polo, una posición. Un interruptor simple de encendido/apagado.
- **SPDT:** un polo, dos posiciones. Cambia la entrada entre dos salidas.
- **DPST:** dos polos, una posición. Corta dos líneas a la vez.
- **DPDT:** dos polos, dos posiciones. Puede invertir la polaridad de un motor o cambiar dos señales.

Para un proyecto básico, SPST o SPDT suelen ser suficientes.

## El problema de una entrada flotante

Si conectas un pulsador directamente a la entrada de un microcontrolador y nada más, cuando el pulsador está abierto la entrada no está ni en HIGH ni en LOW. Queda **flotando**. Puede leer cualquier cosa: ruido, una tensión residual o un valor que cambia si acercas la mano.

La solución es poner una resistencia que fije el estado en reposo. Hay dos configuraciones:

- **Pull-up:** resistencia de la entrada a Vcc. En reposo, la entrada lee **HIGH**; al pulsar, se conecta a GND y lee **LOW**.
- **Pull-down:** resistencia de la entrada a GND. En reposo, lee **LOW**; al pulsar, se conecta a Vcc y lee **HIGH**.

En ambos casos, la resistencia debe ser mucho mayor que la del pulsador cerrado. Un valor típico es **10 kΩ**.

## Pull-up paso a paso

1. Conecta un extremo del pulsador a **GND**.
2. Conecta el otro extremo a la entrada.
3. Conecta una resistencia de **10 kΩ** entre la entrada y **Vcc** (5 V o 3,3 V).
4. La entrada leerá HIGH en reposo y LOW al pulsar.

Cuando el pulsador está abierto, la resistencia tira de la entrada hacia Vcc y no circula corriente apreciable. Al cerrar, la entrada se une a GND y la corriente pasa por la resistencia, pero la entrada queda a 0 V.

Esta configuración es muy común en microcontroladores porque muchas entradas tienen **pull-up interno** activable por software. Si usas el interno, no necesitas la resistencia externa, pero debes revisar el valor y el consumo.

## Pull-down paso a paso

1. Conecta un extremo del pulsador a **Vcc**.
2. Conecta el otro extremo a la entrada.
3. Conecta una resistencia de **10 kΩ** entre la entrada y **GND**.
4. La entrada leerá LOW en reposo y HIGH al pulsar.

Con pull-down, la entrada está fijada a 0 V mientras el pulsador está abierto. Al pulsar, se lleva a Vcc. Es igual de válida que la pull-up; solo cambia la lógica.

## Tabla de estados

| Configuración | Pulsador abierto | Pulsador cerrado | Lógica |
|---|---|---|---|
| Pull-up | HIGH | LOW | Activo en bajo |
| Pull-down | LOW | HIGH | Activo en alto |

Si tu programa espera un `1` al pulsar, usa pull-down o invierte la lectura. Si espera un `0`, usa pull-up. Lo importante es que nunca quede flotando.

## Pulsador de cuatro patillas

Muchos pulsadores táctiles tienen cuatro patillas. No son cuatro contactos independientes: normalmente están unidas por parejas. Las patillas de un mismo lado suelen estar conectadas entre sí, y las del lado opuesto también.

Antes de cablear:

1. Pon el multímetro en **continuidad**.
2. Comprueba qué parejas pican sin pulsar.
3. Pulsa y comprueba qué parejas se unen.
4. Usa una pareja que se cierre al pulsar y deja la otra sin conectar.

Si conectas dos patillas que ya están unidas, el pulsador parecerá cerrado siempre. Es un error fácil de cometer en una protoboard.

## El rebote del pulsador

Cuando pulsas un contacto mecánico, no se cierra de golpe: rebota durante unos milisegundos. Un microcontrolador rápido puede leer varios pulsos en ese tiempo y contar la pulsación varias veces.

Soluciones habituales:

- **Antirrebote por software:** lee el estado, espera 10–50 ms y vuelve a leer. Si sigue igual, acepta el cambio.
- **Filtro RC:** una resistencia y un condensador suavizan el cambio. Con 10 kΩ y 100 nF, la constante es de 1 ms; para un pulsador conviene un tiempo mayor o un Schmitt trigger.
- **Schmitt trigger:** una entrada con histéresis convierte una señal ruidosa en un cambio limpio.

Para empezar, el antirrebote por software es lo más sencillo y no añade componentes.

## Conectar un LED con un pulsador

Si solo quieres encender un LED mientras mantienes pulsado, no necesitas pull-up ni microcontrolador:

1. Fuente de 5 V.
2. Pulsador NO en serie.
3. Resistencia de 330 Ω en serie.
4. LED en serie, respetando ánodo y cátodo.
5. Cierra el circuito a GND.

Al pulsar, circula corriente y el LED enciende. Al soltar, se apaga. La resistencia sigue siendo obligatoria para limitar la corriente. Puedes ver el cálculo en [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/).

## Errores frecuentes

1. **Dejar la entrada flotando.** El circuito se vuelve impredecible.
2. **Usar una resistencia demasiado baja.** Consume corriente innecesaria y puede cargar la fuente.
3. **Conectar el pulsador entre Vcc y GND sin resistencia.** Al pulsar, haces un cortocircuito.
4. **Confundir NO y NC.** El circuito funciona al revés de lo esperado.
5. **No comprobar las patillas del pulsador de cuatro patillas.** Puedes puentear el contacto.
6. **Ignorar el rebote.** Un solo toque cuenta como varios.
7. **Usar un interruptor para una señal que debe ser momentánea.** El estado se queda cambiado.

## Preguntas frecuentes

### ¿Puedo usar una resistencia de 1 kΩ en lugar de 10 kΩ?

Sí, funcionará, pero consumirá más corriente cuando el pulsador esté cerrado. Para una entrada de microcontrolador, 10 kΩ es un buen equilibrio. Si el entorno tiene mucho ruido, prueba 4,7 kΩ o 1 kΩ.

### ¿Necesito pull-up si el microcontrolador ya tiene una interna?

No, si la activas. Revisa el valor y que sea suficiente para tu caso. En placas como Arduino, `INPUT_PULLUP` activa una resistencia interna.

### ¿Por qué mi pulsador se activa solo?

Puede ser una entrada flotante, un cable largo que capta ruido, un contacto mal conectado o rebote. Revisa la resistencia y añade antirrebote.

## Resumen

El pulsador es momentáneo; el interruptor mantiene el estado. Para una entrada lógica, usa **pull-up** o **pull-down** para que nunca quede flotando. Con pull-up, en reposo hay HIGH y al pulsar LOW; con pull-down, al revés.

Comprueba las patillas con continuidad, no hagas cortos entre Vcc y GND y añade antirrebote si el conteo se dispara. Con esas tres ideas, tus entradas serán fiables.

## Sigue con

- [Protoboard paso a paso](/electronica-basica/19-protoboard/) para montar el circuito.
- [Cables y conectores básicos](/electronica-basica/16-conectores-basicos/) para elegir los cables.
- [Ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/) para calcular la resistencia del LED.
