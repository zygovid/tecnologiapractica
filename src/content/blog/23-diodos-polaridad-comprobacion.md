---
title: "Diodos: polaridad, tipos y cómo comprobarlos con el multímetro"
description: "Aprende cómo funciona un diodo, cómo identificar ánodo y cátodo, qué tipos existen y cómo comprobarlo en modo diodo sin equivocarte."
pubDate: 2026-11-16
category: "Componentes"
tags: ["diodos", "polaridad", "multímetro", "1N4007", "flyback"]
section: "electronica-basica"
cover: "../../assets/covers/23-diodos-polaridad-comprobacion.webp"
coverAlt: "Ilustración de un diodo con ánodo, cátodo y símbolo eléctrico"
draft: false
---

El **diodo** es uno de los componentes más sencillos y más útiles de la electrónica. Deja pasar la corriente en un sentido y la bloquea en el contrario. Esa idea tan simple sirve para rectificar una fuente, proteger una bobina, evitar que una pila se descargue por donde no debe o separar dos circuitos.

El problema aparece cuando lo colocas al revés: el circuito no funciona y, en algunos casos, el componente se calienta. En esta guía verás cómo identificar el **ánodo** y el **cátodo**, qué tipos de diodo existen y cómo comprobarlo con el multímetro antes de soldarlo.

<figure>
  <img src="/images/diagrams/diodos.svg" alt="Diodo con ánodo y cátodo, símbolo esquemático y prueba en modo diodo" />
  <figcaption>La corriente convencional entra por el ánodo y sale por el cátodo. La banda del encapsulado marca el cátodo.</figcaption>
</figure>

## Qué hace un diodo

Un diodo es una unión de materiales semiconductores. Cuando la tensión del ánodo es mayor que la del cátodo, entra en **polarización directa** y conduce. Cuando ocurre al contrario, entra en **polarización inversa** y bloquea.

No es un interruptor perfecto. En directa deja caer una pequeña tensión, llamada **caída directa** o `Vf`. En inversa aguanta hasta un límite, llamado **tensión inversa máxima**. Si lo superas, puede romperse.

En un diodo de silicio común, la caída directa ronda **0,6–0,7 V**. En un diodo Schottky baja a **0,2–0,4 V**. En un LED depende del color y suele estar entre **1,8 y 3,3 V**.

## Ánodo y cátodo: cómo no confundirlos

El **ánodo** es la entrada de la corriente convencional. El **cátodo** es la salida. En el símbolo del esquema, el triángulo apunta hacia el cátodo y la línea vertical representa esa salida.

En un diodo rectificador de agujero pasante, como el **1N4007**, el cátodo se marca con una **banda gris o blanca**. Esa banda es la referencia más fiable.

En un LED:

- La patilla **larga** suele ser el ánodo.
- El lado **plano** del encapsulado suele ser el cátodo.
- La banda del cuerpo también marca el cátodo.
- En LED SMD, busca la marca o consulta la ficha; no lo adivines.

En un diodo SMD, la banda del encapsulado indica el cátodo. Si no hay marca visible, usa el multímetro en modo diodo antes de montarlo.

> **Regla práctica:** la banda es el cátodo. Si el diodo tiene banda, ya tienes la mitad del trabajo hecho.

## Tipos de diodo que conviene conocer

| Tipo | Uso típico | Caída directa aproximada |
|---|---|---|
| Rectificador (1N4007) | Fuentes, protección general | 0,7 V |
| Señal (1N4148) | Circuitos rápidos y de baja corriente | 0,7 V |
| Schottky (1N5819) | Baja caída, fuentes conmutadas | 0,3 V |
| Zener | Regular o limitar tensión | Directa normal; inversa controlada |
| LED | Indicación y iluminación | 1,8–3,3 V según color |
| Puente rectificador | Convertir alterna en continua | Dos diodos en serie por camino |

El **1N4007** es el comodín para experimentos: aguanta 1 A y 1.000 V. El **1N4148** es más pequeño y rápido, pero solo para corrientes bajas. No los intercambies sin mirar la ficha.

Un **diodo Zener** se usa al revés: se conecta para que trabaje en ruptura inversa y mantenga una tensión aproximadamente constante. No es una fuente de alimentación por sí solo; necesita una resistencia y un circuito que no consuma demasiado.

Un **puente rectificador** contiene cuatro diodos y se usa en fuentes lineales. Si ves cuatro patillas con marcas `~`, `+` y `-`, no es un diodo normal.

## Polarización directa e inversa

Imagina una pila de 5 V, una resistencia de 330 Ω y un diodo de silicio en serie. Si el ánodo va hacia el positivo, el diodo conduce. La corriente no es exactamente `5 / 330`, porque en el diodo caen unos 0,7 V. El cálculo aproximado sería:

- Tensión en la resistencia: 5 − 0,7 = **4,3 V**.
- Corriente: 4,3 / 330 = **0,013 A**, unos **13 mA**.

Si giras el diodo, el circuito queda abierto y no circula corriente apreciable. Esa es la base de la protección de polaridad: si alguien conecta la pila al revés, el diodo bloquea.

En un LED, la caída es mayor. Por eso el cálculo de la resistencia limitadora se hace con `R = (Vfuente − Vf) / I`. Tienes el desarrollo completo en [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/).

## Para qué se usa un diodo en un proyecto

### Protección contra polaridad invertida

Un diodo en serie con la alimentación evita que el circuito reciba tensión al revés. A cambio, introduce una caída de tensión y disipa algo de calor. Para corrientes pequeñas es una solución muy simple.

### Diodo de rueda libre o flyback

Una bobina, como la de un relé o un motor, genera un pico de tensión cuando se corta la corriente. Ese pico puede destruir el transistor que la controla. Un diodo colocado **en paralelo con la bobina**, en polarización inversa durante el funcionamiento normal, ofrece un camino a esa energía.

Es obligatorio en relés y muy recomendable en motores. Lo verás en [relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) y en [control de un motor DC](/electronica-basica/32-control-motor-dc-l298n/).

### Rectificación

En una fuente de alimentación, los diodos convierten la corriente alterna en pulsos continuos. Después un condensador suaviza esos pulsos. No es el primer montaje que deberías hacer si vas a trabajar con 230 V, pero entender el diodo ayuda a leer el esquema.

### Separación de circuitos

Un diodo permite que una señal vaya en un sentido y no vuelva por otro. Se usa en lógica de botones, alarmas y circuitos de prioridad.

## Cómo comprobar un diodo con el multímetro

La prueba básica se hace **sin alimentación** y, a ser posible, con el diodo fuera del circuito. Muchos multímetros tienen un modo **diodo**, representado con el símbolo `▷|`.

1. Apaga el circuito y desconecta la alimentación.
2. Pon el multímetro en modo diodo.
3. Toca el ánodo con la punta roja y el cátodo con la negra.
4. Lee la caída directa: un diodo de silicio sano suele dar entre **0,5 y 0,8 V**.
5. Invierte las puntas. Debe mostrar **OL** o un valor muy alto, sin conducir.
6. Si da continuidad en ambos sentidos, está en corto.
7. Si no conduce en ningún sentido, está abierto.

La lectura exacta depende del multímetro y del diodo. Un valor de 0,4 V puede ser normal en un Schottky. Un LED puede dar 1,8 V o más y, además, encenderse débilmente con la corriente de prueba.

En modo continuidad, un diodo sano no debería pitar en ambos sentidos. Si pita siempre, sospecha de un corto. Si no pita nunca, puede estar abierto o puedes estar usando una escala que no corresponde.

## Cómo comprobar un LED

El LED se prueba igual, pero con más cuidado:

- Muchos multímetros no tienen suficiente tensión en modo diodo para encender LEDs azules o blancos.
- Si el LED se enciende muy débilmente, la prueba es válida.
- Respeta la polaridad: rojo al ánodo y negro al cátodo.
- No uses el modo resistencia en una escala que entregue demasiada corriente.

Si el LED no enciende, no lo descartes de inmediato. Prueba con otra escala o con una resistencia y una pila de 3 V. Si sigue sin dar caída directa, probablemente esté abierto.

## Cómo comprobar un Zener

Un Zener se comporta como un diodo normal en directa. En inversa, con el multímetro en modo diodo, puede aparecer `OL` porque la tensión de prueba no llega a su ruptura. Para comprobarlo de verdad necesitas una fuente limitada en corriente y una resistencia.

No pruebes un Zener con una fuente de tensión directa sin resistencia: puedes destruirlo. Para empezar, limítate a comprobar que en directa conduce y en inversa no está en corto.

## Errores frecuentes

1. **Montarlo al revés.** La banda es el cátodo; el triángulo del símbolo apunta al cátodo.
2. **Olvidar la caída directa.** En un circuito de 5 V no es lo mismo calcular con 5 V que con 4,3 V.
3. **Usar un 1N4148 para un motor o un relé.** No soporta la corriente ni los picos.
4. **No poner diodo de flyback en una bobina.** El transistor puede morir al cortar la corriente.
5. **Probar el diodo con el circuito encendido.** La lectura no significa nada y puedes dañar el multímetro.
6. **Confundir un Zener con un rectificador.** El Zener trabaja en inversa de forma controlada; no es un diodo normal.
7. **Comprar diodos sin mirar la corriente y la tensión.** El encapsulado no siempre indica la potencia.

## Preguntas frecuentes

### ¿Qué diferencia hay entre ánodo y cátodo?

El ánodo es la entrada de corriente convencional y el cátodo la salida. En directa, el ánodo está a más tensión que el cátodo.

### ¿Puedo sustituir un 1N4007 por un 1N4148?

Solo si la corriente y la tensión son muy bajas. El 1N4148 soporta mucha menos corriente. Para un relé o una fuente, usa un 1N4007 o el equivalente indicado en la ficha.

### ¿Por qué el multímetro marca OL en los dos sentidos?

Puede ser un diodo abierto, una punta mal colocada, una escala incorrecta o un LED que necesita más tensión. Comprueba la continuidad de las puntas y prueba con otro componente.

### ¿Un diodo se puede probar en el circuito?

A veces, pero las lecturas pueden estar afectadas por otros componentes. Para una comprobación fiable, desconecta al menos una patilla.

## Resumen

Un diodo conduce en un sentido y bloquea en el otro. La **banda** marca el cátodo, y en directa cae una tensión que depende del tipo: unos 0,7 V en silicio, 0,3 V en Schottky y más en LEDs. Se comprueba en modo diodo, sin alimentación, buscando una caída directa y bloqueo en inversa.

Si el diodo va a proteger una bobina, colócalo en paralelo y con la polaridad correcta. Si va en serie con la alimentación, acepta su caída. Y si dudas del componente, mide antes de soldar.

## Sigue con

- [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/) para calcular la resistencia con la caída del LED.
- [Relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) para usar el diodo de flyback correctamente.
- [Luz nocturna con LDR y relé](/electronica-basica/29-luz-nocturna-ldr-rele/) para ver un diodo trabajando en un proyecto real.
- [Cómo leer un esquema eléctrico](/electronica-basica/28-leer-esquema-electrico/) para identificar el símbolo y la polaridad.
