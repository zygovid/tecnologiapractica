---
title: "Cómo cablear un sensor PNP o NPN a un PLC (paso a paso)"
description: "Entiende la diferencia entre sensores PNP y NPN, cómo identificarlos y cómo conectarlos correctamente a una entrada digital de PLC."
pubDate: 2026-11-19
section: "automatizacion"
draft: true
category: "Sensores"
tags: ["sensores", "PNP", "NPN", "cableado", "PLC"]
---

Uno de los bloqueos más habituales cuando empiezas es el cableado de sensores. PNP y NPN no son "tipos de conector", sino **formas de conmutar la señal**. Si los mezclas, el sensor simplemente no funciona (o peor: funciona mal de forma intermitente).

## Concepto clave: quién suministra el voltaje

- **PNP (source / positivo):** el sensor entrega +24 V a la entrada del PLC cuando se activa. El común de la entrada se conecta a 0 V.
- **NPN (sink / negativo):** el sensor lleva la entrada del PLC a 0 V cuando se activa. El común de la entrada se conecta a +24 V.

> Frase para recordar: **PNP suministra, NPN drena.**

## Cómo identificar un sensor

Mira la etiqueta o el datasheet. Busca las palabras **PNP** o **NPN**, y **NO (normalmente abierto)** o **NC (normalmente cerrado)**. Los colores de cables son orientativos, no normativos:

| Cable | PNP típico | NPN típico |
|---|---|---|
| Marrón | +24 V | +24 V |
| Azul | 0 V | 0 V |
| Negro | Salida (+24 V al activar) | Salida (0 V al activar) |

**Regla de oro:** verifica siempre con el datasheet del fabricante. El color puede variar.

## Cableado PNP a entrada de PLC

1. Marrón → +24 V de la fuente.
2. Azul → 0 V de la fuente.
3. Negro → entrada digital del PLC (I0.0, por ejemplo).
4. El **COM de las entradas** del PLC → 0 V.

Cuando el sensor detecta, la entrada recibe +24 V y el PLC ve un `1` lógico.

## Cableado NPN a entrada de PLC

1. Marrón → +24 V.
2. Azul → 0 V.
3. Negro → entrada digital del PLC.
4. El **COM de las entradas** del PLC → +24 V.

Cuando detecta, la entrada se lleva a 0 V y el PLC ve un `0`... pero como el COM está a +24 V, el PLC interpreta el cambio como activación. **Esto solo funciona si la entrada del PLC admite lógica NPN** (muchas entradas modernas son configurables o admiten ambos).

## Cómo saber si tu PLC admite ambos

Consulta la hoja de datos de la tarjeta de entradas. Busca *"sink/source"* o *"PNP/NPN compatible"*. Si solo indica uno, respétalo. Los PLCs de gama baja suelen ser **PNP (source)** por defecto.

## Comprobación con multímetro antes de conectar

1. Alimenta el sensor.
2. Mide entre el cable negro (salida) y el azul (0 V).
3. Sin objeto: PNP da ~0 V; NPN da ~24 V.
4. Con objeto: los valores se invierten.

Si la lectura no cambia, revisa la alimentación antes de seguir.

> **Seguridad:** corta la alimentación antes de cablear. Un corte entre +24 V y 0 V puede quemar la salida del sensor o la entrada del PLC. Usa fuentes con protección contra cortocircuito.

## Resumen

| | PNP | NPN |
|---|---|---|
| Al activar | Entrega +24 V | Lleva a 0 V |
| COM de entrada | 0 V | +24 V |
| Más común en Europa | ✅ | Menos |

Si aún tienes dudas, dibuja el esquema en papel y señala por dónde fluye la corriente. Si el camino es coherente, el cableado casi siempre lo es también.
