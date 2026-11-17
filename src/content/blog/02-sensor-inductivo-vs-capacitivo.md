---
title: "Sensor inductivo vs capacitivo: diferencias y cuándo usar cada uno"
description: "Comparativa clara entre sensores inductivos y capacitivos, con ejemplos prácticos para elegir el correcto en una línea de producción."
pubDate: 2026-11-18
category: "Sensores"
tags: ["sensores", "inductivo", "capacitivo", "automatización"]
---

Elegir mal un sensor es una de las causas más frecuentes de fallos intermitentes en una máquina. Los dos tipos más comunes en industria son el **inductivo** y el **capacitivo**, y aunque se parecen, detectan cosas distintas.

## Sensor inductivo

Detecta **objetos metálicos** sin contacto. Genera un campo electromagnético y reacciona cuando un metal se acerca.

- ✅ Detecta acero, aluminio, cobre, latón.
- ❌ Ignora plástico, madera, vidrio, líquidos.
- Alcance típico: 2-15 mm (según diámetro y material).
- No le afectan el polvo ni la suciedad superficial.
- Ideal para: contar piezas metálicas, detectar posición de un cilindro, finales de carrera.

**Matiz importante:** el acero se detecta a la distancia nominal. El aluminio y el cobre reducen el alcance (a veces a la mitad). Consulta el factor de corrección del fabricante.

## Sensor capacitivo

Detecta **cualquier material** con constante dieléctrica distinta del aire: plástico, papel, madera, líquidos, grano, polvo.

- ✅ Detecta metales y no metales.
- ✅ Puede "ver" a través de paredes finas de plástico (nivel en un depósito).
- ❌ Más sensible a la humedad y al polvo; requiere ajuste.
- Alcance típico: 2-25 mm, regulable con un tornillo.
- Ideal para: control de nivel, detectar botellas de plástico, detectar presencia de material a granel.

## Tabla rápida

| Situación | Sensor recomendado |
|---|---|
| Pieza de acero en una cinta | Inductivo |
| Botella de plástico | Capacitivo |
| Nivel de agua en un tanque | Capacitivo |
| Posición de un brazo metálico | Inductivo |
| Detectar una caja de cartón | Capacitivo |
| Entorno con mucho polvo metálico | Inductivo (mejor inmunidad) |

## Cómo elegir en 3 preguntas

1. **¿Qué material detecto?** Si es metal → inductivo. Si no → capacitivo.
2. **¿A qué distancia?** Mide el espacio real disponible y deja margen.
3. **¿Qué salida necesito?** PNP o NPN, y NA o NC. Esto debe coincidir con la entrada de tu PLC.

## Instalación práctica

- Usa soportes metálicos ajustables; nunca sueltes el sensor con una brida improvisada.
- Deja separación entre sensores inductivos cercanos (diámetro × 2 como mínimo) para evitar interferencias.
- En sensores capacitivos, ajusta el tornillo de sensibilidad con el material objetivo en posición y comprueba que no dispara con objetos lejanos.
- Alimenta con 24 V CC estables y respeta la corriente máxima de salida.

## Error común

Poner un sensor capacitivo donde bastaba uno inductivo "por si acaso detecta todo". El capacitivo es más caro, más delicado y más propenso a falsos disparos si hay humedad. **Elige el más simple que resuelva el problema.**
