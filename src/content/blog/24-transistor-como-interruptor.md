---
title: "El transistor como interruptor: BJT, MOSFET y cálculos básicos"
description: "Cómo usar un transistor NPN o un MOSFET como interruptor para controlar LEDs, relés y motores desde una señal de 3,3 V o 5 V."
pubDate: 2026-11-16
category: "Componentes"
tags: ["transistor", "npn", "mosfet", "interruptor", "base"]
section: "electronica-basica"
cover: "../../assets/covers/24-transistor-como-interruptor.webp"
coverAlt: "Ilustración de un transistor NPN controlando un relé con una señal de entrada"
draft: false
---

Un microcontrolador puede entregar pocos miliamperios, pero un relé, un motor o una tira de LEDs pueden necesitar cientos. Ahí entra el **transistor como interruptor**: una señal pequeña controla una corriente mayor sin que la placa sufra.

En esta guía verás cómo funciona un **BJT NPN**, cuándo usar un **MOSFET**, cómo calcular la resistencia de base y qué errores destruyen el transistor con más frecuencia. No necesitas dominar el modelo interno del semiconductor; con unas reglas prácticas puedes montar interruptores fiables.

<figure>
  <img src="/images/diagrams/transistor-interruptor.svg" alt="Transistor NPN con resistencia de base, carga en el colector y diodo de flyback" />
  <figcaption>La señal entra por la base a través de una resistencia. La carga va entre alimentación y colector; el emisor va a GND.</figcaption>
</figure>

## Qué significa "usar un transistor como interruptor"

Un transistor tiene tres terminales. En un BJT se llaman **base**, **colector** y **emisor**. En un MOSFET, **puerta**, **drenador** y **fuente**. La idea es la misma: una señal de control hace que el camino principal pase de bloquear a conducir.

Cuando el transistor está **cortado**, no circula corriente por la carga. Cuando está **saturado**, se comporta casi como un interruptor cerrado y la carga recibe alimentación. No lo uses como amplificador lineal si lo que quieres es encender y apagar.

La diferencia con un interruptor mecánico es que el transistor no está aislado: comparte referencia con el circuito de control. Por eso hay que conectar bien las masas y respetar la polaridad.

## BJT NPN: el interruptor de bajo lado

El montaje más habitual es el **NPN de bajo lado**:

1. La carga se conecta entre **Vcc** y el **colector**.
2. El **emisor** va a **GND**.
3. La señal de control llega a la **base** a través de una resistencia.
4. Cuando la base recibe corriente, el transistor conduce y la carga se enciende.

Este montaje funciona con LEDs, zumbadores, relés y pequeños motores. La carga "ve" el transistor como un interruptor que la conecta a masa.

Si usas un **PNP**, el montaje se invierte: el emisor va a Vcc y la carga entre colector y GND. El PNP conduce cuando la base se lleva a un nivel bajo respecto al emisor. Para empezar, el NPN es más intuitivo.

## La resistencia de base no es opcional

La base de un BJT se comporta como un diodo. Si la conectas directamente a 5 V, pides una corriente enorme y el transistor puede destruirse. La resistencia de base limita esa corriente.

Un cálculo práctico:

- Quieres controlar una carga de **200 mA**.
- El transistor tiene una ganancia `hFE` de **100** en la zona de trabajo.
- Corriente de base necesaria: `Ib = Ic / hFE = 0,2 / 100 = 2 mA`.
- Para asegurar saturación, multiplica por 3 o 4: usa unos **6–8 mA**.
- Con una señal de 5 V y una caída base-emisor de 0,7 V:
  `R = (5 − 0,7) / 0,008 = 537 Ω`.
- Un valor normalizado de **470 Ω** o **560 Ω** es razonable.

No hace falta calcular al milímetro. Con **1 kΩ** para cargas pequeñas y **330–470 Ω** para cargas medianas sueles estar en una zona segura, siempre que el transistor soporte la corriente. Pero comprueba la ficha: la ganancia cae mucho cuando el transistor satura.

> **Regla práctica:** para un 2N2222 o un BC547 controlando un relé pequeño, empieza con **1 kΩ** en la base y verifica que la carga se activa. Si no satura, baja a 470 Ω.

## Qué transistor elegir

| Transistor | Tipo | Corriente típica | Uso |
|---|---|---|---|
| BC547 | NPN BJT | 100 mA | Señales y LEDs pequeños |
| 2N2222 | NPN BJT | 600–800 mA | Relés pequeños, zumbadores |
| BC337 | NPN BJT | 800 mA | Cargas medianas |
| TIP120 | NPN Darlington | 5 A | Motores y cargas altas |
| IRLZ44N | MOSFET canal N | 30 A+ | Cargas con lógica de 5 V |
| AO3400 | MOSFET canal N | 4 A | Cargas SMD pequeñas |

El **TIP120** es un Darlington: tiene más ganancia, pero también más caída de tensión. Para un motor de 12 V puede dejarte menos tensión de la esperada. El **IRLZ44N** es un MOSFET lógico, pensado para que la puerta se active con 5 V. Un MOSFET normal como el IRF540 puede no encender bien con 3,3 V.

## MOSFET: cuando la corriente es alta

Un MOSFET se controla por tensión, no por corriente. La puerta tiene una capacidad y, al cambiar de estado, se carga y descarga. Para frecuencias bajas, una resistencia en serie con la puerta de **100–220 Ω** limita el pico de corriente y evita oscilaciones.

Ventajas del MOSFET:

- Menor caída de tensión cuando está encendido.
- Mayor corriente admisible.
- Mejor eficiencia en PWM.

Cuidados:

- Debe ser **logic level** si lo controlas con 3,3 V o 5 V.
- Necesita una resistencia de puerta a GND, típicamente **10 kΩ**, para que no quede flotando al arrancar.
- La fuente debe compartir masa con el control.
- Para cargas inductivas, el diodo de flyback sigue siendo necesario.

En un MOSFET de canal N de bajo lado, el drenador va a la carga y la fuente a GND. En un canal P de alto lado, el montaje cambia y la lógica se invierte. Si no tienes claro el símbolo, revisa la ficha antes de soldar.

## Cargas inductivas: relés, motores y bobinas

Una bobina almacena energía. Al cortar la corriente, genera un pico de tensión que puede superar varias veces la alimentación. Ese pico destruye transistores si no le das un camino.

La solución es un **diodo de flyback** en paralelo con la bobina, con el cátodo hacia el positivo. En funcionamiento normal no conduce; cuando la corriente se corta, el diodo absorbe el pico.

En un relé, el diodo se coloca entre los terminales de la bobina. En un motor DC, entre los terminales del motor. En un motor controlado por puente H, el driver suele incluir los diodos; no los añadas a ciegas.

## Montaje paso a paso con un NPN

Vamos a encender un relé de 5 V con una señal de 3,3 V:

1. Conecta el **emisor** a GND.
2. Conecta el **colector** a un terminal de la bobina del relé.
3. Conecta el otro terminal de la bobina a **5 V**.
4. Coloca el **diodo de flyback** en paralelo con la bobina, cátodo a 5 V.
5. Conecta la señal de 3,3 V a la base a través de **1 kΩ**.
6. Une las masas del control y de la alimentación del relé.
7. Comprueba con el multímetro que el relé conmuta al activar la señal.

Si el relé no conmuta, mide la tensión en la bobina cuando la señal está activa. Si está a 0 V, revisa la base y la masa. Si está a 5 V pero no conmuta, puede faltar corriente o el relé está mal.

## Cálculo de potencia y calor

El transistor disipa potencia cuando conduce. En saturación, la caída colector-emisor puede ser de **0,2–0,7 V**. Con 200 mA:

- `P = Vce × Ic = 0,3 × 0,2 = 0,06 W`.

Es poco calor. Con 2 A y 1 V de caída, ya son 2 W y necesitas disipador. En MOSFET, la resistencia de canal `Rds(on)` permite calcular `P = I² × Rds(on)`. Un MOSFET con 0,02 Ω y 5 A disipa 0,5 W.

Si el transistor se calienta mucho, no lo tapes con cinta ni lo metas en una caja cerrada. Revisa la corriente, la saturación y el diodo de flyback.

## Errores frecuentes

1. **No poner resistencia de base.** La base se destruye o el control sufre.
2. **Conectar la carga en el emisor en un NPN de bajo lado.** La tensión de base ya no es suficiente para saturar; usa el colector.
3. **Olvidar el diodo de flyback.** El pico de la bobina mata el transistor.
4. **Usar un MOSFET no lógico con 3,3 V.** No enciende del todo y se calienta.
5. **No unir las masas.** La señal de control no tiene referencia.
6. **Confundir el pinout.** En un TO-92, la disposición cambia según el modelo; mira la ficha.
7. **Elegir un transistor justo al límite de corriente.** Deja margen para el arranque y los picos.

## Preguntas frecuentes

### ¿Puedo controlar un relé de 5 V con un transistor de 3,3 V?

Sí, si el relé consume menos de lo que el transistor soporta y usas la resistencia de base adecuada. El relé se alimenta a 5 V; la señal de control puede ser de 3,3 V. Une las masas.

### ¿Qué diferencia hay entre saturación y amplificación?

En saturación el transistor está completamente encendido y se usa como interruptor. En amplificación trabaja en una zona intermedia y la salida reproduce la entrada. Para encender cargas, saturación.

### ¿Necesito un MOSFET o un BJT?

Para corrientes pequeñas y montajes educativos, un BJT es suficiente y barato. Para corrientes altas, PWM o eficiencia, un MOSFET lógico suele ser mejor. Para cargas inductivas, en ambos casos añade flyback.

### ¿Por qué el transistor se calienta si debería estar apagado?

Puede estar recibiendo corriente de base por una entrada flotante, tener una fuga, estar mal conectado o estar en un montaje de emisor seguidor. Mide la tensión base-emisor y revisa la configuración.

## Resumen

El transistor como interruptor permite que una señal débil controle una carga. En un **NPN de bajo lado**, la carga va al colector, el emisor a GND y la base recibe la señal con una resistencia. Calcula la base con `Ib = Ic / hFE` y deja margen para saturar. En cargas inductivas, añade siempre un **diodo de flyback**.

Para corrientes altas usa un **MOSFET logic level**, con resistencia de puerta y pull-down. Y antes de conectar, comprueba pinout, masas y corriente máxima. Un transistor mal montado dura segundos; uno bien calculado dura años.

## Sigue con

- [Diodos: polaridad y comprobación](/electronica-basica/23-diodos-polaridad-comprobacion/) para entender el flyback.
- [Relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) para controlar cargas aisladas.
- [Control de un motor DC con L298N](/electronica-basica/32-control-motor-dc-l298n/) para mover cargas mayores.
- [Pulsadores y pull-up/pull-down](/electronica-basica/22-pulsadores-pull-up-pull-down/) para que la señal de control no quede flotando.
