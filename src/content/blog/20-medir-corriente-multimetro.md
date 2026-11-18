---
title: "Cómo medir corriente con un multímetro sin quemar el fusible"
description: "Aprende a medir corriente en serie con el multímetro, elegir el borne correcto y evitar el error que funde fusibles y arruina montajes."
pubDate: 2026-11-13
category: "Herramientas"
tags: ["multímetro", "corriente", "amperios", "medidas", "fusible"]
section: "electronica-basica"
cover: "../../assets/covers/20-medir-corriente-multimetro.webp"
coverAlt: "Ilustración de un multímetro midiendo corriente en serie con una resistencia y una fuente"
draft: false
---

Medir **corriente** es distinto de medir tensión. Para la tensión pones las sondas **en paralelo** con el componente; para la corriente tienes que **abrir el circuito** y hacer que pase por el multímetro. Si lo haces en paralelo con una fuente, provocas un cortocircuito y puedes fundir el fusible del aparato.

La buena noticia es que el procedimiento es siempre el mismo. Con un poco de orden y una comprobación previa, puedes medir el consumo de un LED, de un módulo o de un circuito completo sin sustos.

<figure>
  <img src="/images/diagrams/medir-corriente.svg" alt="Esquema de un multímetro conectado en serie para medir la corriente de una resistencia y un LED" />
  <figcaption>El multímetro forma parte del circuito: la corriente entra por el borne de mA o A y sale por COM.</figcaption>
</figure>

## Corriente y tensión no se miden igual

La **tensión** es una diferencia entre dos puntos. El multímetro la mide sin interrumpir el circuito, tocando ambos puntos. La **corriente** es el flujo que pasa por un conductor. Para medirla, ese flujo tiene que atravesar el instrumento.

Por eso el multímetro en modo corriente tiene una resistencia interna muy baja: se comporta casi como un cable. Si lo conectas entre + y − de una fuente, esa resistencia baja deja pasar toda la corriente posible y el fusible salta.

> **Regla de oro:** para medir corriente, abre el circuito y conecta el multímetro **en serie**. Nunca lo pongas en paralelo con una fuente de tensión.

## Los bornes del multímetro

La mayoría de multímetros tienen tres o cuatro bornes:

| Borne | Para qué sirve | Cuándo usarlo |
|---|---|---|
| COM | Común o masa | Siempre, con la sonda negra |
| VΩmA | Tensión, resistencia, continuidad y corriente baja | Medidas de mA o µA |
| 10A o 20A | Corriente alta | Solo si esperas más de 200 mA |
| VΩ | Tensión y resistencia en algunos modelos | Medidas sin corriente |

Mira siempre las letras y el límite impreso junto al borne. En algunos modelos el borne de 10 A no tiene fusible y en otros sí. No supongas: consulta el manual.

## Preparar la medida

Antes de tocar nada:

1. **Apaga la fuente** y desconecta la alimentación.
2. **Elige el modo de corriente continua (DC)** si vas a medir pilas, fuentes o placas. Usa AC solo para alterna.
3. **Selecciona un rango** por encima de lo que esperas. Si no sabes, empieza por el rango más alto y baja.
4. **Conecta la sonda negra en COM.**
5. **Conecta la sonda roja** en mA si esperas menos de 200 mA, o en 10 A si esperas más.
6. **Comprueba el estado del fusible** si el aparato no mide o marca cero raro.

En multímetros de gancho o pinza, la corriente se mide abrazando el cable, sin abrirlo. Es otra herramienta, no el mismo procedimiento.

## Medir corriente paso a paso

Ejemplo: una fuente de **5 V** y una resistencia de **330 Ω** en serie.

1. **Calcula lo que esperas.** I = V / R = 5 / 330 = **15,2 mA**. Así sabes que el borne de mA es el adecuado.
2. **Apaga la fuente.**
3. **Abre el circuito.** Desconecta un extremo de la resistencia o del cable que va a la fuente.
4. **Conecta el multímetro en serie.** La corriente debe entrar por el borne rojo de mA y salir por COM. Une el punto abierto con las dos sondas: un extremo del circuito a una sonda y el otro extremo a la otra.
5. **Enciende la fuente.**
6. **Lee el valor.** Debería rondar 15 mA. Si marca negativo, has invertido las sondas; no pasa nada, el valor absoluto es el mismo.
7. **Apaga y restaura** el circuito original.

Con un LED rojo en serie, la corriente será menor porque el LED se queda con unos 2 V. En el ejemplo de 5 V y 330 Ω, la corriente ronda los **9 mA**, no los 15 mA. Es normal: el LED no es una resistencia lineal.

## Si el valor no coincide

Puede haber varias explicaciones:

- **La resistencia tiene tolerancia.** Un 5 % en 330 Ω son unos 16 Ω arriba o abajo.
- **La fuente no da exactamente 5 V.** Mide la tensión real.
- **El LED tiene otra caída.** El color y el modelo cambian la Vf.
- **El multímetro tiene un fusible o una resistencia interna.** En rangos bajos, la caída del propio instrumento puede afectar.
- **Hay otro consumo en el circuito.** Estás midiendo la corriente total, no solo la de una rama.

Para medir solo una rama, ábrela y coloca el multímetro dentro de esa rama. No lo pongas entre dos puntos que ya están unidos por otro camino.

## El error que funde el fusible

El fallo clásico es poner el multímetro en modo corriente y conectarlo **entre + y −** de la fuente, como si fuera un voltímetro. El instrumento se convierte en un camino de muy baja resistencia y la fuente entrega toda la corriente que puede.

Consecuencias:

- Salta el **fusible** del multímetro.
- La fuente puede limitar corriente o protegerse.
- Si el multímetro es barato y el fusible no está, pueden dañarse pistas o el propio aparato.

Si el fusible salta, **no lo puentees con un cable**. Sustitúyelo por uno del mismo tipo, tensión y corriente. Un fusible de mayor valor elimina la protección.

## Medir corriente alta

Para corrientes de varios amperios, usa el borne de **10 A o 20 A** y respeta el tiempo máximo de medida que indique el manual. Muchos multímetros solo aguantan esa corriente durante unos segundos.

Si vas a medir motores, baterías o fuentes de laboratorio, una **pinza amperimétrica** es más segura y cómoda: no hay que abrir el circuito y no se funde un fusible por un descuido.

## Errores frecuentes

1. **Conectar el multímetro en paralelo.** Es el error más peligroso en modo corriente.
2. **Usar el borne de 10 A para una señal de 5 mA.** La resolución será peor y puedes no ver nada.
3. **Medir alterna en modo continua.** El valor será incorrecto.
4. **Olvidar cambiar las sondas al medir tensión después.** Vuelve a revisar bornes y modo.
5. **Puentear un fusible.** Eliminas la protección y puedes dañar el instrumento.
6. **Medir con el circuito en marcha y las manos cerca de la red.** Para baja tensión, con cuidado; para red eléctrica, usa personal cualificado y material adecuado.

## Preguntas frecuentes

### ¿Por qué me sale un valor negativo?

Porque la corriente entra por el borne COM en lugar del borne de mA. El circuito funciona igual; solo has invertido la polaridad de las sondas. Cambia las puntas si quieres verlo positivo.

### ¿Puedo medir la corriente de una pila con el multímetro directamente?

No. Si pones el multímetro en modo corriente entre los dos polos de la pila, la estás cortocircuitando. Para medir el consumo, abre el circuito y pon el instrumento en serie con la carga.

### ¿Qué pasa si la corriente supera el rango?

El multímetro puede mostrar un valor fuera de escala, protegerse o fundir el fusible. Empieza siempre por el rango más alto si no conoces la corriente.

## Resumen

Para medir corriente: **apaga, abre el circuito, pon el multímetro en serie, elige el borne correcto y enciende**. La corriente debe pasar por el instrumento. Nunca lo conectes en paralelo con una fuente.

Antes de medir, calcula el valor esperado con la [ley de Ohm](/electronica-basica/17-ley-de-ohm/). Así sabes qué borne usar y puedes detectar un resultado absurdo antes de dañar algo.

## Sigue con

- [Cómo usar un multímetro digital](/electronica-basica/11-multimetro-digital/) para tensión, continuidad y resistencia.
- [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/) para calcular la corriente de un LED.
- [Protoboard paso a paso](/electronica-basica/19-protoboard/) para preparar el circuito de prueba.
