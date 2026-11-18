---
title: "Sensor de temperatura con comparador: termostato básico"
description: "Monta un detector de temperatura con NTC, LM393 y relé para activar un ventilador de 12 V. Aprende a calibrar el umbral y añadir histéresis."
pubDate: 2026-11-18
category: "Proyectos"
tags: ["NTC", "temperatura", "comparador", "LM393", "termostato"]
section: "electronica-basica"
cover: "../../assets/covers/31-sensor-temperatura-comparador.webp"
coverAlt: "Ilustración de un sensor NTC, comparador y relé controlando un ventilador de 12 V"
draft: false
---

Un **termostato básico** enciende o apaga algo cuando la temperatura cruza un umbral. No necesita microcontrolador: un sensor resistivo, un comparador y un relé bastan. Es un proyecto ideal para entender cómo se convierte una magnitud física en una decisión eléctrica.

Usaremos una **NTC**, una resistencia que baja su valor al calentarse. Con un divisor de tensión obtendremos una señal, y con un comparador la compararemos con un punto de ajuste. La salida activará un ventilador de **12 V** mediante un relé.

<figure>
  <img src="/images/diagrams/sensor-temperatura.svg" alt="Circuito con NTC, divisor de tensión, comparador LM393, transistor y relé para un ventilador" />
  <figcaption>La NTC cambia con la temperatura. El potenciómetro fija el umbral y el comparador decide cuándo activar el ventilador.</figcaption>
</figure>

## Qué vas a aprender

- Leer una NTC y montar un divisor de tensión.
- Ajustar un umbral con un potenciómetro.
- Añadir histéresis para evitar encendidos y apagados constantes.
- Controlar un relé con un transistor.
- Calibrar un sensor sin un termómetro de laboratorio.

## Lista de materiales

- 1 NTC de **10 kΩ** a 25 °C.
- 1 resistencia de **10 kΩ**.
- 1 potenciómetro lineal de **10 kΩ**.
- 1 LM393 o LM358.
- 1 resistencia de **10 kΩ** para el pull-up de salida.
- 1 resistencia de **1 kΩ** para la base del transistor.
- 1 transistor NPN 2N2222 o BC337.
- 1 diodo 1N4007.
- 1 relé de 5 V.
- 1 ventilador de 12 V con su fuente.
- Fuente de 5 V para la parte de control.
- Protoboard, cables y multímetro.

Si no tienes NTC, puedes usar un **LM35**, que entrega una tensión proporcional a la temperatura. La lógica del comparador es parecida, pero el acondicionamiento cambia. Para empezar, la NTC es barata y fácil de encontrar.

## Cómo cambia una NTC

Una NTC (Negative Temperature Coefficient) reduce su resistencia al aumentar la temperatura. A 25 °C, una NTC de 10 kΩ vale aproximadamente 10 kΩ. Al calentarse, puede bajar a 5 kΩ, 2 kΩ o menos.

La relación no es lineal. Para un proyecto de umbral no necesitas la curva completa: basta con medir la tensión en el divisor a la temperatura que te interesa y ajustar el potenciómetro.

Con la NTC arriba y una resistencia fija de 10 kΩ abajo:

- A 25 °C, ambos valen 10 kΩ y la salida es aproximadamente **2,5 V**.
- Al calentarse, la NTC baja y la salida baja.
- Al enfriarse, la NTC sube y la salida sube.

Si colocas la NTC abajo, el sentido se invierte. Elige una configuración y no la cambies a mitad del ajuste.

## Montaje del divisor

1. Conecta `+5V` a un extremo de la NTC.
2. Conecta el otro extremo a una resistencia de 10 kΩ a `GND`.
3. Toma la señal en el punto entre ambos.
4. Lleva esa señal a una entrada del comparador.

Antes de conectar el comparador, mide la tensión con el multímetro a temperatura ambiente. Anota el valor. Luego calienta suavemente la NTC con los dedos o con una bolsa de agua tibia y observa cómo cambia.

No sumerjas una NTC sin saber si está encapsulada para ello. No uses agua hirviendo ni llama directa.

## Referencia y comparador

1. Conecta los extremos del potenciómetro a `+5V` y `GND`.
2. Lleva el cursor a la otra entrada del comparador.
3. Alimenta el LM393 con 5 V.
4. Conecta un pull-up de **10 kΩ** entre la salida y `+5V`.
5. Conecta la salida a la base del transistor mediante **1 kΩ**.

La salida del LM393 es de colector abierto: sin pull-up no sube. Es un error muy común.

Decide la lógica:

- Si la señal de la NTC va a la entrada no inversora y la referencia a la inversora, la salida sube cuando el sensor supera la referencia.
- Si las intercambias, la lógica se invierte.

Para un ventilador que arranca al calentarse, queremos que la salida se active cuando la temperatura sube. Ajusta el potenciómetro hasta que el relé cambie a la temperatura deseada.

## Histéresis: evita el traqueteo

Si el umbral está justo en el punto de conmutación, el relé puede encenderse y apagarse varias veces por segundo. Eso desgasta los contactos y hace ruido.

La **histéresis** crea dos umbrales: uno para encender y otro, más bajo, para apagar. Se consigue con una resistencia de realimentación entre la salida y la entrada no inversora, por ejemplo **1 MΩ**.

Con histéresis:

- El ventilador arranca a una temperatura.
- No se apaga hasta que baja unos grados.
- El sistema es estable.

El valor de la resistencia depende del divisor y del margen deseado. Para empezar, prueba 1 MΩ y ajusta. Si el margen es demasiado grande, baja el valor; si sigue oscilando, súbelo.

## Control del ventilador

El relé no alimenta el ventilador: solo abre y cierra su circuito.

1. Conecta la fuente de 12 V al ventilador.
2. Pasa el negativo por `COM` y `NO` del relé.
3. Conecta el otro lado a la fuente.
4. Comprueba que el relé soporta la corriente del ventilador.

Un ventilador de 12 V puede consumir **0,1–0,5 A** o más al arrancar. Mira su etiqueta. Si el relé es de 10 A, tienes margen; aun así, no lo uses al límite.

Si el ventilador tiene PWM o electrónica interna, comprueba que se puede conmutar por alimentación. Algunos ventiladores no arrancan bien con interrupciones rápidas.

## Calibración sin termómetro de laboratorio

Puedes calibrar de forma aproximada:

1. Mide la tensión del divisor a temperatura ambiente y anota el valor.
2. Calienta la NTC con los dedos; la temperatura ronda los 30–35 °C.
3. Ajusta el potenciómetro para que el relé cambie a esa temperatura.
4. Deja enfriar y comprueba que se desactiva.
5. Ajusta el margen de histéresis.

Para algo más preciso, usa un termómetro de cocina o de ambiente. Compara la lectura real con la tensión del divisor y construye una tabla de dos o tres puntos. No necesitas precisión de laboratorio para un ventilador.

## Pruebas antes de conectar el ventilador

1. Alimenta solo la parte de control.
2. Mide la tensión de referencia en el potenciómetro.
3. Mide la tensión de la NTC a temperatura ambiente.
4. Calienta y observa el cambio en la salida del comparador.
5. Comprueba el clic del relé.
6. Conecta una carga de prueba de 12 V.
7. Solo después conecta el ventilador.

Si el relé no cambia, revisa el pull-up, la masa común y la polaridad del diodo.

## Variantes

- **Aviso sonoro:** cambia el ventilador por un zumbador de 12 V.
- **Control de un calefactor de 12 V:** invierte la lógica para que se active al enfriarse.
- **Dos umbrales:** usa dos comparadores para ventilador y alarma.
- **Arduino:** lee la NTC por una entrada analógica y controla el relé con histéresis por software.

## Seguridad

- Trabaja con 5 V y 12 V.
- No conectes la red eléctrica a la protoboard.
- No uses agua cerca de la electrónica.
- Comprueba la corriente del ventilador.
- Si usas un relé para 230 V, debe ir en una caja y con instalación segura. No es un proyecto de aprendizaje.

## Errores frecuentes

1. **Olvidar el pull-up del LM393.** La salida no sube.
2. **No unir las masas.** El comparador no tiene referencia.
3. **Ajustar el umbral sin histéresis.** El relé oscila.
4. **Calentar la NTC con una llama.** Daña el sensor y las lecturas.
5. **Conmutar el ventilador por el positivo y el negativo a la vez.** Revisa el esquema.
6. **Usar un relé de 5 V con una bobina de 12 V.** No activa o se calienta.
7. **No comprobar la corriente de arranque.** El relé puede pegarse.

## Preguntas frecuentes

### ¿Puedo usar un termistor PTC?

Sí, pero su resistencia sube con la temperatura y la lógica se invierte. Ajusta el divisor y el comparador en consecuencia.

### ¿Qué precisión tiene este termostato?

Baja. La NTC no es lineal y el potenciómetro no está calibrado. Para un ventilador o un aviso es suficiente. Para medidas, usa un sensor digital calibrado.

### ¿Por qué el ventilador se enciende y apaga rápido?

Falta histéresis o el umbral está demasiado cerca de la temperatura ambiente. Añade realimentación y separa los umbrales.

### ¿Puedo controlar un calefactor de 230 V?

No directamente. Necesitas un relé adecuado, aislamiento, caja y instalación eléctrica segura. Para aprender, usa 12 V.

## Resumen

El termostato básico convierte la resistencia de una NTC en tensión, la compara con un umbral y activa un relé. La histéresis es clave para que el sistema no oscile. Con un LM393, un transistor y un diodo de flyback tienes un control fiable para una carga de 12 V.

Ajusta el umbral con la temperatura real, comprueba cada etapa y deja la red eléctrica fuera del montaje.

## Sigue con

- [Divisor de tensión y potenciómetros](/electronica-basica/25-divisor-tension-potenciometros/) para entender la señal del sensor.
- [Componentes con multímetro](/electronica-basica/15-componentes-multimetro/) para comprobar la NTC.
- [Cómo leer un esquema eléctrico](/electronica-basica/28-leer-esquema-electrico/) para seguir el circuito.
- [Relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) para conmutar la carga con seguridad.
- [Temporizador con 555](/electronica-basica/30-temporizador-555/) para añadir un retardo.
