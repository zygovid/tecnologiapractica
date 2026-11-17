---
title: "LED y resistencia limitadora: cómo elegirla sin quemar el LED"
description: "Calcula la resistencia correcta para un LED, entiende la caída de tensión y evita el error más común de los principiantes."
pubDate: 2026-11-30
category: "Circuitos"
tags: ["LED", "resistencia", "ohm", "electrónica"]
section: "electronica-basica"
cover: "../../assets/covers/14-led-resistencia.webp"
coverAlt: "Ilustración de un LED rojo conectado a una resistencia y una fuente de 5 voltios"
draft: false
---

Si acabas de empezar, ver encender tu primer **LED** es todo un logro. También es muy fácil quemarlo en un segundo: basta con conectarlo directo a 5 V. La pieza que lo evita es la **resistencia limitadora**. Aquí verás qué hace, cómo calcularla y qué errores conviene no repetir.

<figure>
  <img src="/images/diagrams/led-resistencia.svg" alt="Circuito con fuente de 5 voltios, resistencia de 150 ohmios y LED rojo, con la fórmula de cálculo" />
  <figcaption>Con 5 V y un LED rojo de 2 V, una resistencia de 150 Ω limita la corriente a unos 20 mA.</figcaption>
</figure>

## Qué es un LED

Un **LED** es un diodo emisor de luz: deja pasar la corriente solo en un sentido y, al hacerlo, emite luz. Como es un **diodo**, tiene dos patillas distintas. La patilla larga es el **ánodo** (por ahí entra la corriente) y la corta es el **cátodo**. Si lo conectas al revés no se rompe: sencillamente no enciende.

El LED empieza a conducir solo al alcanzar una tensión mínima llamada **caída de tensión directa (Vf)**. Esa cifra depende del color. Una vez superada, el LED no pone apenas freno: deja pasar toda la corriente que le ofrezcas. Ahí es donde entra la resistencia.

## Por qué necesitas una resistencia

Conecta un LED rojo a 5 V sin resistencia y ocurre esto: el LED solo "quita" unos 2 V, quedan 3 V sin frenar y la corriente se dispara. El resultado suele ser un chispazo y un LED muerto en segundos.

La **resistencia limitadora** va **en serie** con el LED, antes o después da igual. Se queda con la tensión sobrante y mantiene la corriente en un valor seguro. Es como un grifo: regula el chorro para que la planta reciba justo lo que necesita.

## La corriente típica: 20 mA

Un LED pequeño de 5 mm suele funcionar bien con **20 mA** (0,020 A). Esa es la cifra de referencia. También puedes usar **10 o 15 mA**: verás un brillo un poco más suave, gastarás menos y alargarás la vida del componente. Los LED de alta potencia funcionan con cientos de miliamperios y necesitan otro enfoque.

> **Consejo:** Si dudas, calcula primero para 10 o 15 mA. Si el LED se ve tenue, baja la resistencia. Es mucho más seguro ir de menos a más.

## La caída de tensión según el color

La **Vf** depende del material del LED, que es lo que da el color. No hace falta memorizarla: con dos valores aproximados resuelves casi todo.

| Color | Vf aproximada | Detalle |
|---|---|---|
| Rojo | 1,8 – 2,0 V | El más común |
| Ámbar / amarillo | 2,0 – 2,2 V | Parecido al rojo |
| Verde clásico | 2,0 – 2,2 V | El verde normal |
| Azul / blanco / verde brillante | 3,0 – 3,3 V | Necesita más tensión |
| Infrarrojo | 1,2 – 1,5 V | Mandos a distancia |

Usa **2 V** para rojo, amarillo y verde clásico, y **3 V** para azul y blanco. Si tienes el datasheet, mejor: usa su valor exacto.

## La fórmula

Todo sale de la ley de Ohm:

**R = (Vs − Vf) / I**

**Vs** es la tensión de alimentación, **Vf** la caída del LED y **I** la corriente deseada **en amperios**. El resultado está en ohmios (Ω). Sigue siempre los mismos pasos:

1. **Anota Vs.** Lo que da la fuente, la pila o la salida de tu placa.
2. **Anota Vf.** Saca el valor de la tabla o del datasheet.
3. **Resta:** Vs − Vf. Esa tensión la absorberá la resistencia.
4. **Convierte la corriente a amperios:** 20 mA = 0,020 A.
5. **Divide** el paso 3 entre el paso 4. Ya tienes los ohmios.

## Ejemplo: 5 V y LED rojo

Con una fuente de **5 V**, un LED rojo y 20 mA:

- Vs = 5 V, Vf = 2 V, I = 0,020 A.
- **R = (5 − 2) / 0,020 = 3 / 0,020 = 150 Ω**.

Ese es el valor del dibujo y un clásico de los kits de iniciación. Si pones un LED blanco de 3 V, el cálculo cambia: R = (5 − 3) / 0,020 = **100 Ω**. El color importa. Si bajas a 10 mA con el rojo, R = 3 / 0,010 = 300 Ω, y usarás una resistencia de 330 Ω.

## Valores normalizados

No existe una resistencia de cada valor. Se fabrican **series normalizadas**, la más común la **E12**: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68 y 82, multiplicados por 1, 10, 100... De ahí salen 100 Ω, 150 Ω, 220 Ω, 330 Ω o 470 Ω.

Cuando tu cálculo no coincida, coge el valor normalizado más cercano y, si dudas entre dos, **elige el mayor**. Una resistencia algo más grande solo baja un poco el brillo; una más pequeña sube la corriente y acorta la vida del LED. Si calculas 125 Ω, usa 150 Ω.

## La potencia de la resistencia

Además de los ohmios, mira los vatios. La potencia que disipa es **P = (Vs − Vf) × I**. En el ejemplo: 3 V × 0,020 A = **0,06 W**. Una resistencia corriente de **1/4 W** aguanta eso sin problema.

Preocúpate si subes la tensión: con 12 V y LED rojo, P = 10 V × 0,020 A = 0,2 W, muy cerca del límite de 1/4 W. Ahí monta una de **1/2 W** o reparte la caída entre varias en serie.

## Polaridad: ánodo y cátodo

El **ánodo** va al positivo (+) y el **cátodo** al negativo (−) o masa. Si lo inviertes, el LED no enciende, pero no se estropea. Ante cualquier duda, dale la vuelta: es el diagnóstico más rápido. Si las patillas están cortadas, busca la pequeña franja lateral: marca el cátodo.

## Errores frecuentes

1. **LED directo a la fuente.** Sin resistencia, se quema casi al instante.
2. **Dividir entre 20 en vez de 0,020.** La corriente va en amperios en la fórmula.
3. **Usar la Vf de otro color.** 2 V y 3 V no dan el mismo resultado.
4. **Bajar la resistencia para brillar más.** Ganarás poca luz y perderás vida útil.
5. **Olvidar la potencia con 12 V.** Los ohmios pueden estar bien y la resistencia quemarse igual.
6. **Colocar la resistencia "después" con miedo.** En serie, el orden no importa.

## Resumen

La idea es una sola: la resistencia se queda con la tensión que el LED no usa y frena la corriente. Con **R = (Vs − Vf) / I**, solo necesitas la fuente y el color. Para 5 V y LED rojo a 20 mA, el resultado es **150 Ω**, y 1/4 W basta.

Quédate con cuatro claves: **20 mA**, **2 V o 3 V según el color**, **valor normalizado mayor si dudas** y **ánodo al positivo**. Con eso ya puedes montar indicadores sin quemar un solo LED.
