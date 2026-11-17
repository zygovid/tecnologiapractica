---
title: "Qué es un PLC y cómo elegir el primero"
description: "Guía práctica para entender qué hace un PLC, en qué se diferencia de un ordenador y qué criterios usar para elegir tu primer controlador industrial."
pubDate: 2026-11-17
section: "automatizacion"
draft: true
category: "PLC"
tags: ["PLC", "principiantes", "automatización"]
---

Un **PLC** (Programmable Logic Controller, o controlador lógico programable) es un ordenador industrial diseñado para resistir el entorno de una planta: polvo, vibraciones, humedad, temperaturas amplias y funcionamiento continuo. Su trabajo es leer entradas (sensores, pulsadores), ejecutar un programa y activar salidas (motores, válvulas, luces).

## ¿En qué se diferencia de un ordenador normal?

| Característica | PLC | Ordenador |
|---|---|---|
| Arranque | Inmediato, arranca en el programa | Segundos o minutos |
| Entorno | Industrial, sin ventilador | Oficina, requiere refrigeración |
| E/S | Integradas y modularles | Requiere tarjetas externas |
| Fiabilidad | Diseñado para 24/7 | Uso intermitente |
| Programación | Ladder, ST, FBD | Lenguajes generales |

Un PLC no "piensa" como un PC. Ejecuta un bucle cíclico: **leer entradas → ejecutar programa → actualizar salidas → repetir**. Ese ciclo se llama *scan time* y suele estar entre 1 y 20 ms.

## Qué necesitas para empezar

No compres el PLC más caro. Para aprender, busca un modelo con:

- **Al menos 8 entradas digitales y 6 salidas digitales** (suficiente para practicar).
- **Salidas de relé o transistor**: las de relé son más lentas pero admiten CA y CC; las de transistor son rápidas y solo CC.
- **Entradas analógicas** (1 o 2) para practicar con sensores 0-10 V o 4-20 mA.
- **Software de programación gratuito o con licencia de prueba**, y cable de programación incluido o barato.

> **Consejo:** Para casa o taller, un PLC compacto de gama baja de cualquier fabricante conocido es más que suficiente. Lo importante no es la marca, sino que encuentres documentación y tutoriales en español o inglés.

## Errores típicos del principiante

1. **Conectar una salida directamente a una bobina de alto consumo.** Usa siempre un contactor o relé intermedio.
2. **Olvidar la fuente de alimentación correcta.** Muchos PLCs funcionan a 24 V CC; verifica la tensión antes de alimentar.
3. **No entender el común (COM).** En entradas PNP y NPN, el cableado cambia por completo. Domina esto antes de seguir.
4. **Programar sin un plano.** Dibuja primero en papel qué entra, qué sale y qué lógica quieres.

## Un primer ejercicio sencillo

Programa esto: *"Si pulso el botón de marcha, el motor arranca y se mantiene hasta que pulso el de parada"*.

Es el clásico **circuito de enclavamiento (latch)**. Aprenderás a usar contactos NA (normalmente abiertos), NC (normalmente cerrados) y una bobina con auto-mantenimiento. Es la base de casi cualquier lógica industrial.

## Siguiente paso

Cuando domines el latch, pasa a los **temporizadores (TON)** y luego a los **contadores (CTU)**. Con esos tres bloques ya puedes resolver el 70 % de las tareas básicas de automatización.
