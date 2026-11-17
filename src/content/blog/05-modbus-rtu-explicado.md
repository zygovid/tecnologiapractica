---
title: "Modbus RTU explicado fácil: cableado y direcciones"
description: "Introducción práctica al protocolo Modbus RTU: cómo se cablea RS-485, qué son las direcciones esclavas y cómo leer un registro."
pubDate: 2026-11-21
category: "Comunicaciones"
tags: ["modbus", "rs485", "comunicaciones", "PLC"]
---

**Modbus RTU** es el protocolo de comunicación industrial más extendido. Es simple, abierto y funciona sobre RS-485 (o RS-232). Un maestro (normalmente un PLC o un PC) pregunta a uno o varios esclavos (sensores, variadores, contadores) y estos responden.

## Cómo funciona, en corto

1. El maestro envía una trama con: **dirección del esclavo + función + dirección de registro + datos + CRC**.
2. Solo el esclavo con esa dirección responde.
3. La respuesta contiene los datos solicitados y su propio CRC.

Es un protocolo **maestro-esclavo**: los esclavos nunca hablan si no se les pregunta.

## Direcciones esclavas

Cada dispositivo en el bus tiene una dirección de **1 a 247**. La 0 se reserva para broadcast y no suele usarse. Dos esclavos con la misma dirección hacen que el bus se comporte de forma errática: asegúrate de configurarlas antes de cablear todos los equipos.

## Funciones más comunes

| Código | Qué hace |
|---|---|
| 01 | Lee bobinas (salidas digitales) |
| 02 | Lee entradas digitales |
| 03 | Lee registros de mantenimiento (la más usada) |
| 04 | Lee registros de entrada (solo lectura) |
| 05 | Escribe una bobina |
| 06 | Escribe un registro |
| 16 | Escribe varios registros |

## Cableado RS-485 (lo importante)

RS-485 usa **dos cables diferenciales**, habitualmente llamados A y B (o D+ y D−, o DATA+ y DATA−).

- Conecta **A con A y B con B** en todos los dispositivos.
- Usa **cable apantallado de par trenzado** (típico: 2 × 0,5 mm² con malla).
- Conecta la **malla a tierra en un solo extremo** para evitar bucles de masa.
- En buses largos o con muchos dispositivos, instala una **resistencia de terminación de 120 Ω** en cada extremo del bus.
- Número máximo típico: 32 dispositivos por segmento (más con repetidores).
- Longitud máxima: hasta 1200 m a velocidades bajas (9600 baudios). A mayor velocidad, menor distancia.

> **Error frecuente:** invertir A y B. Si no hay comunicación, cambia ambos cables y vuelve a probar antes de buscar culpables más complejos.

## Parámetros de serie que deben coincidir

Todos los dispositivos del bus deben usar los mismos:

- Velocidad (baudios): 9600, 19200, 38400...
- Bits de datos: 8
- Paridad: ninguna, par o impar
- Bits de stop: 1 o 2

Si un solo dispositivo tiene la paridad distinta, el maestro recibirá errores de CRC o timeouts.

## Ejemplo de trama (lectura)

Pedir 2 registros empezando en la dirección 0 del esclavo 1:

```
01 03 00 00 00 02 C4 0B
```

- `01` → dirección del esclavo
- `03` → función "leer registros"
- `00 00` → dirección del primer registro
- `00 02` → cantidad de registros
- `C4 0B` → CRC

La respuesta sería algo como:

```
01 03 04 00 10 00 2A 3F 2D
```

Donde `04` indica 4 bytes de datos y `00 10` / `00 2A` son los dos registros (16 y 42 en decimal).

## Consejos de depuración

- Empieza con **9600 baudios** y distancias cortas.
- Usa un **convertidor USB-RS485** y un programa como Modbus Poll para probar un esclavo aislado antes de integrarlo.
- Si funciona el esclavo solo pero falla en el bus, sospecha de terminación, masa o direcciones duplicadas.
- Documenta en una tabla: dispositivo, dirección, baudios, registros usados y escala (por ejemplo, "registro 40001 = temperatura × 10").

Modbus es simple, pero implacable con los detalles. Cableado correcto y parámetros uniformes resuelven el 90 % de los problemas.
