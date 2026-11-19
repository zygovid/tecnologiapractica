---
title: "Proyecto: fuente ajustable para protoboard con módulo buck"
description: "Monta una fuente ajustable de baja tensión para protoboard usando un módulo buck: materiales, cableado, ajuste, pruebas y seguridad."
pubDate: 2026-11-20
category: "Proyectos"
tags: ["proyecto", "fuente", "buck", "protoboard", "alimentación"]
section: "electronica-basica"
cover: "../../assets/covers/40-fuente-ajustable-protoboard.webp"
coverAlt: "Ilustración de una fuente ajustable con módulo buck alimentando una protoboard a 5 V"
draft: false
---

Tener una alimentación cómoda y controlada ahorra tiempo y errores cuando estás probando circuitos. En este proyecto montarás una **fuente ajustable de baja tensión para protoboard** a partir de un adaptador de corriente continua (por ejemplo 12 V) y un **módulo buck** que reduzca y regule la tensión de salida. El objetivo es disponer de 5 V (o el valor que necesites dentro del rango seguro) medidos y verificados antes de conectar tus montajes.

Es un proyecto pensado para **baja tensión DC** (5–12 V). No incluye ni debe usarse con 230 V AC. Si necesitas repasar la base, revisa [cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) y la guía del [módulo buck LM2596](/electronica-basica/36-modulo-buck-lm2596/).

<figure>
  <img src="/images/diagrams/fuente-ajustable-protoboard.svg" alt="Adaptador de 12 V conectado a un módulo buck que alimenta los raíles de una protoboard" />
  <figcaption>Ajusta la salida en vacío, mide con el multímetro y solo después conecta la protoboard y la carga.</figcaption>
</figure>

## Qué vas a conseguir

Al terminar tendrás:
- Una entrada de baja tensión desde un adaptador DC.
- Una salida regulable (por ejemplo 5 V) mediante un módulo buck.
- Conexión a los raíles de una protoboard con masa común clara.
- Un procedimiento de verificación para evitar aplicar tensiones incorrectas.

No es una fuente de laboratorio profesional: es una herramienta práctica de aprendizaje para prototipos de bajo consumo.

## Materiales y herramientas

| Elemento | Especificación orientativa | Función |
|---|---|---|
| Adaptador DC | 12 V, 1 A (o según necesidad) | Entrada de baja tensión |
| Módulo buck | LM2596 u equivalente ajustable | Reducir y ajustar tensión |
| Protoboard | Tamaño medio | Distribución de alimentación |
| Cables Dupont o rígidos | Adecuados a la corriente | Conexiones |
| Multímetro | Modo voltímetro DC | Ajuste y verificación |
| Interruptor (opcional) | Para baja tensión DC | Corte cómodo |
| Conector jack o bornes | Compatible con el adaptador | Entrada segura |

Si quieres añadir margen frente a errores, puedes incorporar ideas de [protecciones básicas de fuente](/electronica-basica/39-protecciones-fuente-diodo-fusible/), como un PTC o un diodo contra inversión según el caso.

## Esquema de bloques

1. **Adaptador 12 V DC** → proporciona la entrada.
2. **Módulo buck** → reduce a la tensión deseada (por ejemplo 5 V).
3. **Protoboard** → recibe +V y GND en sus raíles.
4. **Carga** → tus circuitos de prueba.

La masa (GND) debe ser común en todo el sistema. Revisa la continuidad de los raíles de la protoboard, ya que algunos tienen interrupciones centrales.

## Paso a paso del montaje

### 1. Preparación y seguridad

- Trabaja con el adaptador **desconectado** de la red mientras haces el cableado de baja tensión.
- Comprueba que el adaptador entrega la tensión indicada en su etiqueta (por ejemplo 12 V DC) y la polaridad del conector.
- Asegura que la zona de trabajo esté seca y ordenada.

### 2. Conexión de entrada al buck

- Identifica los bornes IN+ e IN− del módulo.
- Conecta el positivo del adaptador a IN+ y el negativo a IN−.
- Verifica dos veces la polaridad antes de alimentar. Invertirla puede dañar el módulo.

### 3. Ajuste de la salida en vacío

- Conecta el multímetro en voltímetro DC a OUT+ y OUT− del módulo.
- No conectes aún la protoboard ni ninguna carga.
- Alimenta el módulo y ajusta el potenciómetro lentamente hasta obtener, por ejemplo, **5,00 V**.
- Desconecta la alimentación y vuelve a comprobar visualmente las conexiones.

Este paso es crítico: evita aplicar por accidente 12 V a un circuito de 5 V.

### 4. Conexión a la protoboard

- Identifica el raíl positivo y el negativo de la protoboard.
- Lleva OUT+ del buck al raíl positivo y OUT− al raíl negativo.
- Comprueba con continuidad que no hay cortocircuito entre ambos raíles.
- Si la protoboard tiene raíles partidos, puentea las secciones si lo necesitas, pero verifícalo antes.

Puedes apoyarte en [protoboard paso a paso](/electronica-basica/19-protoboard/) para evitar errores de conexión.

### 5. Pruebas con carga

- Alimenta de nuevo y mide la tensión en los raíles de la protoboard (deben seguir siendo ~5 V).
- Conecta una carga pequeña conocida, por ejemplo un LED con resistencia adecuada (ver [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/)).
- Mide otra vez la tensión: una caída ligera puede ser normal por cables, pero una caída grande indica problema.
- Toca con precaución el módulo tras unos minutos: si se calienta mucho, reduce la carga o revisa la ventilación.

## Cálculo rápido de consumo y margen

Antes de conectar un montaje, estima su corriente total. Ejemplo: tres LEDs a 15 mA cada uno consumen ~45 mA, muy dentro de lo razonable. Un relé puede añadir 70 mA o más. Consulta [ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/) para dimensionar.

No te fíes de la corriente máxima anunciada del módulo sin considerar disipación y calidad. Deja margen y observa la temperatura.

## Mejoras opcionales

- **Interruptor DC** en la línea positiva para cortar sin desenchufar.
- **Indicador LED** con resistencia en la salida (teniendo en cuenta el consumo).
- **Conectores o bornes** firmes para evitar tirones en la protoboard.
- **Segunda salida**: algunos montajes usan otro regulador para 3,3 V desde los 5 V, siempre que la corriente y la disipación lo permitan.
- **Protecciones**: diodo contra inversión en la entrada o PTC según el riesgo, como se describe en [protecciones básicas](/electronica-basica/39-protecciones-fuente-diodo-fusible/).

## Errores frecuentes

1. **No ajustar la salida en vacío.** Es el error más peligroso para tus circuitos.
2. **Invertir la polaridad de entrada o salida.** Revisa cada conexión.
3. **No compartir masa común.** La carga no tendrá referencia correcta.
4. **Confiar en raíles de protoboard sin comprobar continuidad.** Puede haber interrupciones o falsos contactos.
5. **Cargar el módulo por encima de su capacidad real.** Cae la tensión y sube la temperatura.
6. **Usar cables finos para corrientes altas.** Calentamiento y caída de tensión.
7. **Trabajar cerca de líquidos o con manos húmedas.** Aunque sea baja tensión, evita riesgos innecesarios.
8. **Intentar usar esta fuente con 230 V.** Nunca lo hagas: este proyecto es solo para DC de baja tensión.

## Preguntas frecuentes

### ¿Puedo usar una fuente de 9 V en lugar de 12 V?

Sí, si el módulo buck acepta esa entrada y puedes ajustar la salida deseada con margen. Comprueba el rango de entrada del módulo concreto.

### ¿Puedo obtener 3,3 V con el mismo montaje?

Depende del rango de ajuste del módulo. Si lo consigues, verifica la tensión bajo carga. Para cargas sensibles puede ser preferible un regulador de 3,3 V dedicado.

### ¿Por qué baja la tensión cuando conecto mi circuito?

Puede deberse a exceso de consumo, cables inadecuados, mala conexión, límite del módulo o caída en la fuente de entrada. Mide en distintos puntos para localizar el problema.

### ¿Es seguro dejarlo conectado sin supervisión?

Para prototipos, lo prudente es no dejar montajes experimentales alimentados sin vigilancia, especialmente si incluyen cargas que se calientan o pueden fallar.

### ¿Puedo alimentar motores desde esta fuente?

Solo si el motor es pequeño, de baja tensión compatible y la corriente total está dentro del margen. Los motores tienen picos de arranque; considera una alimentación separada y medidas de protección.

## Resumen

Este proyecto te da una fuente ajustable de baja tensión para protoboard basada en un módulo buck: ajustas en vacío, mides con el multímetro y alimentas tus circuitos con más control. La clave está en la verificación paso a paso, la masa común y el respeto a los límites de corriente y temperatura.

Es una base excelente para seguir practicando con montajes de 5 V y 12 V, y para integrar buenas prácticas de alimentación aprendidas en las guías de esta sección.

## Sigue con

- [Módulo buck LM2596](/electronica-basica/36-modulo-buck-lm2596/) para entender el ajuste y los límites.
- [Cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) para distribuir la energía correctamente.
- [Protecciones básicas de fuente](/electronica-basica/39-protecciones-fuente-diodo-fusible/) para mejorar la seguridad del montaje.
- [Pilas y autonomía en prototipos](/electronica-basica/38-pilas-y-autonomia/) si quieres una versión portátil.
- [Cómo medir corriente con el multímetro](/electronica-basica/20-medir-corriente-multimetro/) para comprobar el consumo real.
