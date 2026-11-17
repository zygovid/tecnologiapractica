---
title: "Arduino vs PLC: cuándo usar cada uno en un proyecto real"
description: "Comparativa práctica entre Arduino y PLC para decidir qué controlador usar según el entorno, la fiabilidad y el presupuesto."
pubDate: 2026-11-22
category: "Robótica"
tags: ["arduino", "PLC", "robótica", "proyectos"]
---

Esta es una duda clásica: *"¿puedo usar Arduino en vez de un PLC?"*. La respuesta corta es **sí para prototipos, mejor un PLC para industria**. La respuesta larga depende de varios factores.

## Arduino: ventajas y límites

**Ventajas**
- Muy barato y fácil de conseguir.
- Gran cantidad de librerías y tutoriales.
- Ideal para sensores, robots pequeños, maquetas y proyectos DIY.
- Se programa en C/C++ con el IDE oficial.

**Límites**
- No está diseñado para entornos industriales (temperatura, humedad, vibración, ruido eléctrico).
- Sus entradas/salidas son de 5 V o 3,3 V: necesitas adaptadores para 24 V.
- No tiene una supervisión de watchdog tan robusta ni diagnóstico integrado.
- La alimentación y el reset son más delicados.

## PLC: ventajas y límites

**Ventajas**
- Entradas y salidas a 24 V CC directas.
- Construido para funcionar 24/7 en planta.
- Lenguajes normalizados (Ladder, ST, FBD) y depuración en línea.
- Módulos expansionables E/S, analógicas, comunicaciones.
- Diagnóstico de errores y sustitución rápida.

**Límites**
- Más caro, especialmente el software de programación.
- Curva de aprendizaje inicial mayor.
- Menos flexible para experimentar rápido.

## Tabla de decisión

| Situación | Elige |
|---|---|
| Maqueta o prototipo en casa | Arduino |
| Robot educativo | Arduino |
| Máquina en una planta | PLC |
| Entorno con 24 V CC y sensores industriales | PLC |
| Presupuesto muy ajustado y uso no crítico | Arduino |
| Necesitas cumplir normativa industrial | PLC |
| Producción continua 24/7 | PLC |

## El punto intermedio

Existen placas y módulos "industriales" con formato Arduino o Raspberry Pi, e incluso PLCs de bajo coste compatibles con Arduino. Son una opción razonable para **aprender** o para proyectos semiprofesionales, pero antes de usarlos en una máquina real, pregúntate:

- ¿Qué pasa si se cuelga a las 3 de la mañana?
- ¿Hay alguien capaz de sustituirlo en 10 minutos?
- ¿La instalación cumple la normativa eléctrica aplicable?

Si la respuesta a alguna es "no", invierte en un PLC.

## Mi recomendación para aprender

Empieza con **Arduino** para entender sensores, actuadores y lógica básica. Cuando ya sepas cablear un sensor y manejar un motor, da el salto a **PLC** y verás que la lógica es la misma, pero el entorno es mucho más robusto.

Aprender ambos no es excluyente: de hecho, un técnico que domina los dos mundos tiene más salidas profesionales.
