---
title: "Semáforo con LEDs y temporizador: 555 + CD4017"
description: "Monta un semáforo secuencial con LEDs, un 555 como reloj y un CD4017 como contador. Incluye cableado, tiempos y errores frecuentes."
pubDate: 2026-11-18
category: "Proyectos"
tags: ["semáforo", "LED", "555", "CD4017", "proyecto"]
section: "electronica-basica"
cover: "../../assets/covers/33-semaforo-leds-temporizador.webp"
coverAlt: "Ilustración de un semáforo con LEDs rojo, amarillo y verde controlado por 555 y CD4017"
draft: false
---

Un **semáforo** es un proyecto perfecto para practicar secuencias. Enciende un LED cada vez, en orden, y repite el ciclo. Puedes hacerlo con Arduino, pero también con dos integrados clásicos: un **555** que genera el pulso de reloj y un **CD4017** que cuenta los pulsos.

En esta guía montamos un semáforo de tres estados: rojo, verde y amarillo. Cada estado dura aproximadamente un segundo, aunque puedes ajustarlo con el condensador o las resistencias. El montaje funciona con 5 V y LEDs normales.

<figure>
  <img src="/images/diagrams/semaforo-leds.svg" alt="Semáforo con 555 como reloj, CD4017 como contador y tres LEDs con resistencias" />
  <figcaption>El 555 genera pulsos. El CD4017 activa una salida detrás de otra; cada salida enciende un LED del semáforo.</figcaption>
</figure>

## Cómo funciona la secuencia

El 555 trabaja en modo **astable**: genera un pulso cada cierto tiempo. El CD4017 cuenta esos pulsos y activa una salida distinta en cada paso:

- Salida 0: LED rojo.
- Salida 1: LED verde.
- Salida 2: LED amarillo.
- Salida 3: reinicia el contador.

Así el ciclo es rojo → verde → amarillo → rojo. Si quieres que el rojo dure más, puedes usar más salidas o cambiar la lógica. Para empezar, tres estados son suficientes.

## Lista de materiales

- 1 NE555.
- 1 CD4017.
- 1 resistencia de **10 kΩ** para R1.
- 1 resistencia de **68 kΩ** para R2.
- 1 condensador electrolítico de **10 µF**.
- 1 condensador cerámico de **10 nF** para el 555.
- 1 condensador de **100 nF** de desacoplo para el 4017.
- 3 LEDs: rojo, verde y amarillo.
- 3 resistencias de **330 Ω**.
- Fuente de **5 V**.
- Protoboard y cables.

Opcional: un pulsador para avanzar la secuencia a mano, un zumbador para el cambio o una caja para presentarlo.

## El reloj con 555

El 555 en modo astable usa dos resistencias y un condensador. La frecuencia aproximada es:

**f = 1,44 / ((R1 + 2 × R2) × C)**

Con `R1 = 10 kΩ`, `R2 = 68 kΩ` y `C = 10 µF`:

- `R1 + 2R2 = 10.000 + 136.000 = 146.000 Ω`.
- `f = 1,44 / (146.000 × 0,00001) = 0,986 Hz`.

Es decir, un pulso aproximadamente cada **1 segundo**. El ciclo completo del semáforo dura unos 3 segundos.

Conexiones del 555:

1. Patilla 1 a GND.
2. Patilla 8 a +5 V.
3. Patilla 4 a +5 V.
4. Patilla 5 a GND con 10 nF.
5. R1 entre +5 V y patilla 7.
6. R2 entre patilla 7 y patilla 6.
7. Condensador de 10 µF entre patilla 6 y GND, positivo hacia la patilla 6.
8. Patilla 2 unida a patilla 6.
9. Patilla 3 es la salida de reloj.

La salida del 555 va a la patilla 14 del CD4017.

## El contador CD4017

El CD4017 tiene 10 salidas que se activan una detrás de otra. Para nuestro semáforo usamos las salidas 0, 1 y 2.

Conexiones básicas:

- Patilla 16 (`VDD`) a +5 V.
- Patilla 8 (`VSS`) a GND.
- Patilla 14 (`CLOCK`) a la salida del 555.
- Patilla 13 (`CLOCK INHIBIT`) a GND.
- Patilla 15 (`RESET`) a la salida 3 para reiniciar.
- Patilla 8 a GND.
- Condensador de 100 nF entre VDD y GND, cerca del integrado.

Las salidas del 4017 son:

- Q0: patilla 3.
- Q1: patilla 2.
- Q2: patilla 4.
- Q3: patilla 7.
- Q4: patilla 10.
- Q5: patilla 1.
- Q6: patilla 5.
- Q7: patilla 6.
- Q8: patilla 9.
- Q9: patilla 11.

Para reiniciar después del tercer estado, conecta Q3 (patilla 7) a RESET (patilla 15). Cuando Q3 se activa, el contador vuelve a Q0. El pulso de Q3 es muy breve, así que el LED amarillo no se enciende con Q3; usamos Q0, Q1 y Q2.

## Conexión de los LEDs

Cada LED necesita su resistencia limitadora. Con 5 V y LEDs de 2 V:

- `R = (5 − 2) / 0,015 = 200 Ω`.
- Un valor de **330 Ω** da unos 9 mA, seguro y visible.

Conexiones:

- Q0 → resistencia de 330 Ω → ánodo del LED rojo → cátodo a GND.
- Q1 → resistencia de 330 Ω → ánodo del LED verde → cátodo a GND.
- Q2 → resistencia de 330 Ω → ánodo del LED amarillo → cátodo a GND.

No conectes los LEDs directamente a las salidas sin resistencia. Aunque el 4017 pueda entregar algo de corriente, el LED se dañará o el integrado sufrirá.

## Montaje paso a paso

1. Coloca el 555 y el 4017 en la protoboard, atravesando el canal central.
2. Monta el reloj del 555 y comprueba que la patilla 3 cambia de estado.
3. Alimenta el 4017 y conecta el reloj.
4. Conecta RESET a GND temporalmente para empezar en Q0.
5. Conecta un LED en Q0 y comprueba que se enciende.
6. Añade los otros dos LEDs.
7. Conecta Q3 a RESET.
8. Alimenta y observa la secuencia.

Si el LED de Q0 no enciende, revisa la polaridad y la resistencia. Si todos los LEDs están encendidos a la vez, el 4017 puede estar mal cableado o el reset no está en GND.

## Ajustar los tiempos

Para un semáforo más lento, aumenta el condensador de 10 µF a 22 µF o 47 µF. Para uno más rápido, redúcelo o baja R2.

Con `C = 22 µF` y los mismos valores, la frecuencia baja a unos 0,45 Hz: cada estado dura unos 2,2 segundos. Con `C = 4,7 µF`, cada estado dura menos de medio segundo.

No pongas un condensador electrolítico al revés. La banda clara o el signo menos indica el negativo. Si no estás seguro, usa uno cerámico o de película para pruebas.

## Variante con Arduino

Si prefieres programar, el semáforo se simplifica:

```cpp
const int rojo = 8;
const int verde = 9;
const int amarillo = 10;

void setup() {
  pinMode(rojo, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(amarillo, OUTPUT);
}

void loop() {
  encender(rojo, 3000);
  encender(verde, 3000);
  encender(amarillo, 1000);
}

void encender(int pin, int ms) {
  digitalWrite(rojo, LOW);
  digitalWrite(verde, LOW);
  digitalWrite(amarillo, LOW);
  digitalWrite(pin, HIGH);
  delay(ms);
}
```

Con Arduino puedes añadir pulsadores, sensores o tiempos distintos para cada estado. Con 555 y 4017 aprendes la lógica sin código.

## Errores frecuentes

1. **No poner resistencias en los LEDs.** El 4017 o los LEDs se dañan.
2. **Conectar RESET mal.** El contador no reinicia o se queda en un estado.
3. **Dejar CLOCK INHIBIT flotando.** El contador avanza de forma imprevisible.
4. **No poner condensador de desacoplo.** El 4017 puede contar pulsos falsos.
5. **Usar una fuente de 12 V sin regulador.** El 4017 y el 555 pueden dañarse.
6. **Confundir el pinout del 4017.** Revisa la muesca y la patilla 1.
7. **Poner un LED entre salida y otra salida.** Puede crear caminos raros.

## Preguntas frecuentes

### ¿Puedo usar 12 V?

El 555 admite hasta 16 V, pero el CD4017 suele trabajar a 5–15 V. Para LEDs y lógica, usa 5 V. Si alimentas a 12 V, ajusta las resistencias y revisa la ficha.

### ¿Por qué el semáforo se salta un LED?

Puede haber un pulso doble en el reloj, ruido en la alimentación o un contacto malo. Añade el condensador de 100 nF y revisa las masas.

### ¿Cómo hago que el rojo dure más?

Usa más salidas para el rojo o cambia la secuencia con un microcontrolador. Con el 4017 puedes conectar Q0 y Q1 al mismo LED mediante diodos, pero es más complicado.

### ¿Puedo conectar más LEDs?

Sí, pero cada salida tiene un límite de corriente. Para muchos LEDs, usa transistores o un driver. No cargues todas las salidas al máximo.

## Resumen

El semáforo combina un **555 astable** que genera pulsos y un **CD4017** que los cuenta. Cada salida enciende un LED con su resistencia. Con Q0, Q1 y Q2 tienes rojo, verde y amarillo; Q3 reinicia el ciclo.

Ajusta el tiempo con el condensador, pon resistencias en los LEDs y no dejes entradas CMOS flotando. Es un proyecto sencillo que enseña temporización, conteo y secuencias.

## Sigue con

- [Temporizador con 555](/electronica-basica/30-temporizador-555/) para entender el reloj.
- [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/) para calcular las resistencias.
- [El transistor como interruptor](/electronica-basica/24-transistor-como-interruptor/) para controlar más carga.
- [Pulsadores y pull-up/pull-down](/electronica-basica/22-pulsadores-pull-up-pull-down/) para añadir un botón de avance.
- [Protoboard paso a paso](/electronica-basica/19-protoboard/) para el montaje físico.
