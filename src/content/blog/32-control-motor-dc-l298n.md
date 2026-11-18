---
title: "Control de un motor DC con L298N: cableado y primeras pruebas"
description: "Aprende a conectar un motor DC al módulo L298N, controlar sentido y velocidad con PWM y evitar los errores que reinician la placa."
pubDate: 2026-11-18
category: "Proyectos"
tags: ["motor DC", "L298N", "puente H", "PWM", "proyecto"]
section: "electronica-basica"
cover: "../../assets/covers/32-control-motor-dc-l298n.webp"
coverAlt: "Ilustración de un módulo L298N con motor DC, alimentación y entradas de control"
draft: false
---

Un **motor DC** gira en un sentido u otro según la polaridad y cambia de velocidad según la tensión media. Para controlarlo desde una placa sin quemarla necesitas una etapa de potencia. El **L298N** es un módulo clásico, barato y fácil de encontrar, aunque no es el más eficiente.

En este proyecto verás cómo cablear el módulo, cómo probar el motor con interruptores antes de usar código y cómo controlar sentido y velocidad con PWM. También verás por qué el motor no debe alimentarse desde el USB de la placa.

<figure>
  <img src="/images/diagrams/motor-dc-l298n.svg" alt="Módulo L298N con bornes de motor, alimentación de 12 V, entradas IN1 e IN2 y PWM" />
  <figcaption>El módulo recibe la alimentación del motor y las señales de control. Las masas deben estar unidas si el control y el módulo comparten referencia.</figcaption>
</figure>

## Qué es un puente H

Un puente H permite invertir la polaridad aplicada a un motor. Con cuatro interruptores electrónicos, puede conectar el motor entre positivo y negativo en un sentido, o al revés.

El L298N contiene dos puentes H, así que puede controlar **dos motores DC** o un motor paso a paso. Cada puente tiene:

- Dos salidas para el motor.
- Dos entradas de sentido.
- Una entrada de habilitación, que también sirve para PWM.

No conectes nunca la alimentación del motor directamente a la placa. El motor consume más corriente y genera picos que pueden reiniciar o dañar el microcontrolador.

## Terminales del módulo

Los módulos L298N suelen tener:

- **+12V:** alimentación del motor.
- **GND:** masa de potencia.
- **+5V:** salida de 5 V del regulador interno o entrada de 5 V, según el jumper.
- **OUT1/OUT2:** motor A.
- **OUT3/OUT4:** motor B.
- **IN1/IN2:** sentido del motor A.
- **IN3/IN4:** sentido del motor B.
- **ENA/ENB:** habilitación o PWM de cada motor.

El jumper de 5 V conecta el regulador interno. Si la alimentación del motor es de 7–12 V, puedes dejar el jumper y usar los 5 V para la lógica. Si alimentas con más de 12 V, quita el jumper y alimenta la lógica con 5 V externos. Lee la serigrafía de tu módulo: no todos son iguales.

## Lista de materiales

- 1 módulo L298N.
- 1 motor DC de 6–12 V.
- 1 fuente de alimentación para el motor.
- 1 placa Arduino, ESP32 o una fuente de 5 V con interruptores.
- Cables Dupont y cables para el motor.
- Multímetro.
- Opcional: ruedas, chasis y soporte.

Comprueba la corriente del motor. Un motor pequeño puede pedir 200–500 mA; uno con reductora, más al arrancar. El L298N soporta hasta 2 A por canal con disipador, pero no es infinito.

## Alimentación: la parte que más falla

El motor debe tener su propia alimentación. Reglas:

1. Conecta el positivo de la fuente del motor a `+12V`.
2. Conecta el negativo de la fuente a `GND`.
3. Une el `GND` del módulo con el `GND` de la placa de control.
4. No alimentes el motor desde el pin de 5 V de la placa.
5. No conectes la fuente del motor al USB.

Si el motor gira y la placa se reinicia, la fuente no tiene corriente suficiente o hay un pico. Añade un condensador de **100 µF** entre `+12V` y `GND` cerca del módulo, y usa una fuente más potente.

## Prueba con interruptores

Antes de programar, prueba el módulo con dos interruptores o cables:

1. Conecta el motor a `OUT1` y `OUT2`.
2. Alimenta el módulo.
3. Lleva `IN1` a 5 V e `IN2` a GND. El motor gira en un sentido.
4. Invierte: `IN1` a GND e `IN2` a 5 V. Gira al revés.
5. Si ambos están a GND o ambos a 5 V, el motor se detiene o frena.

No dejes las entradas flotando. Un nivel indefinido puede hacer que el motor se mueva solo. Usa resistencias pull-down de 10 kΩ si no hay control conectado.

## Control con Arduino

Un ejemplo mínimo:

```cpp
const int IN1 = 8;
const int IN2 = 9;
const int ENA = 10;

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENA, OUTPUT);
}

void loop() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 180);
  delay(2000);

  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, 180);
  delay(2000);

  analogWrite(ENA, 0);
  delay(1000);
}
```

`analogWrite` genera PWM. Un valor de 0 detiene, 255 da el máximo. No esperes un control preciso de velocidad con el L298N: tiene una caída de tensión interna y parte de la energía se pierde en calor.

Si usas ESP32, el PWM se configura con `ledcSetup` y `ledcAttachPin`. No copies el código de Arduino sin adaptar los pines y la API.

## Sentido y frenado

La tabla básica para un motor:

| IN1 | IN2 | ENA | Resultado |
|---|---|---|---|
| HIGH | LOW | PWM | Gira en un sentido |
| LOW | HIGH | PWM | Gira al revés |
| LOW | LOW | PWM | Rueda libre o parada |
| HIGH | HIGH | PWM | Frenado |

El comportamiento exacto depende del módulo y del motor. Prueba con una fuente limitada y observa. No cambies de sentido a máxima velocidad de golpe si el motor es grande: la corriente inversa puede ser alta.

## PWM y velocidad

El PWM enciende y apaga la alimentación muy rápido. El motor responde a la media. A baja frecuencia puede vibrar o silbar; a frecuencia alta, el driver puede calentarse más.

Para un motor pequeño, una frecuencia de **1–5 kHz** suele funcionar. Prueba y escucha. Si el motor no arranca a poca velocidad, necesita más PWM o más tensión; no es un fallo del código.

No uses PWM para alimentar la lógica del módulo. `ENA` controla el puente, no la alimentación.

## Disipador y temperatura

El L298N pierde tensión en los transistores internos. Con 1 A puede disipar varios vatios. El módulo suele traer un disipador; no lo cubras.

Si se calienta mucho:

- Baja la corriente.
- Mejora la ventilación.
- Usa una fuente adecuada.
- Comprueba que no hay un corto en el motor.
- Considera un driver MOSFET si el proyecto es permanente.

Para aprender, el L298N es suficiente. Para un robot de competición o una batería, hay drivers más eficientes.

## Pruebas y diagnosis

Si el motor no gira:

1. Mide la tensión en `+12V` y `GND`.
2. Comprueba la masa común con la placa.
3. Mide las entradas `IN1` e `IN2`.
4. Comprueba `ENA` con PWM o a 5 V.
5. Mide la continuidad de los cables del motor.
6. Prueba el motor directamente con una fuente limitada.

Si gira al revés, intercambia los cables del motor o las entradas. Si se reinicia la placa, revisa la alimentación y añade condensadores.

## Variantes

- **Dos motores:** usa `OUT3/OUT4`, `IN3/IN4` y `ENB`.
- **Joystick:** controla velocidad y sentido con dos ejes.
- **Sensor de línea:** combina el motor con sensores infrarrojos.
- **Driver MOSFET:** sustitúyelo si necesitas más eficiencia.

## Seguridad

- No conectes el motor a 230 V.
- Sujeta el motor antes de encenderlo: puede saltar.
- No bloquees el eje con la alimentación puesta.
- Usa una fuente con corriente suficiente.
- Añade un interruptor o fusible a la alimentación del motor.

## Errores frecuentes

1. **Alimentar el motor desde el USB.** La placa se reinicia o se daña.
2. **No unir las masas.** Las señales no tienen referencia.
3. **Dejar las entradas flotando.** El motor se mueve solo.
4. **Conectar el motor con la alimentación puesta.** Puede generar un pico.
5. **Usar el jumper de 5 V con más de 12 V.** El regulador se calienta.
6. **No sujetar el motor.** El par de arranque puede sorprender.
7. **Esperar eficiencia alta.** El L298N no es un driver moderno.

## Preguntas frecuentes

### ¿Puedo alimentar el L298N con 5 V?

Sí, si el motor es de 5 V y la lógica también. Pero la caída interna del L298N puede dejar muy poca tensión en el motor. Para un motor de 5 V, un driver MOSFET suele ir mejor.

### ¿Necesito el jumper de 5 V?

Si alimentas el motor con 7–12 V y quieres que el módulo genere 5 V para la lógica, puedes dejarlo. Si alimentas con más tensión o usas una lógica externa, quítalo y alimenta los 5 V por separado.

### ¿Por qué el motor no arranca a PWM bajo?

El motor necesita un par mínimo. Aumenta el PWM, reduce la carga o usa una tensión mayor. El L298N también pierde tensión.

### ¿Puedo controlar un motor paso a paso?

Sí, el L298N tiene dos puentes y se usa en motores bipolares. Necesitas la secuencia de pasos adecuada y una librería o código específico.

## Resumen

El L298N permite controlar un motor DC con una señal de baja potencia. Alimenta el motor con su propia fuente, une las masas y no dejes las entradas flotando. Con `IN1` e `IN2` eliges el sentido; con `ENA` y PWM, la velocidad.

Prueba primero con interruptores, luego con código y por último con la carga real. Si la placa se reinicia, el problema suele ser la alimentación, no el programa.

## Sigue con

- [El transistor como interruptor](/electronica-basica/24-transistor-como-interruptor/) para entender la etapa de potencia.
- [Relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) para otras cargas.
- [Diodos: polaridad y comprobación](/electronica-basica/23-diodos-polaridad-comprobacion/) para los picos inductivos.
- [Cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) para no reiniciar la placa.
- [Protoboard paso a paso](/electronica-basica/19-protoboard/) para el montaje de control.
