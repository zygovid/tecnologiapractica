---
title: "Cómo leer un esquema eléctrico industrial: símbolos básicos"
description: "Aprende a interpretar los símbolos y las zonas de un esquema eléctrico industrial paso a paso, desde la alimentación hasta la bobina."
pubDate: 2026-11-23
section: "automatizacion"
draft: true
category: "Electricidad"
tags: ["esquemas", "electricidad", "símbolos", "mantenimiento"]
---

Leer un esquema eléctrico es como leer un mapa: al principio parece un galimatías de líneas y códigos, pero conociendo la estructura y unos cuantos símbolos, se vuelve muy lógico.

## Cómo se organiza un esquema

Los esquemas industriales suelen seguir la norma **IEC 81346** y se dividen en zonas:

- **Eje vertical (números):** indica la posición vertical, de arriba abajo.
- **Eje horizontal (letras):** indica la columna, de izquierda a derecha.
- Así, una referencia como `/2+B3` te dice exactamente dónde mirar.

La lectura habitual va **de arriba abajo y de izquierda a derecha**, igual que un texto.

## Bloques típicos de un esquema de mando

1. **Alimentación:** línea de fase (L) y neutro (N), o +24 V y 0 V en corriente continua.
2. **Protecciones:** interruptor automático, fusible, guardamotor, relé térmico.
3. **Entradas / mando:** pulsadores, interruptores, finales de carrera, sensores.
4. **Lógica:** contactos auxiliares de relés, contactores o la entrada del PLC.
5. **Salidas:** bobinas de contactores, relés, válvulas, testigos.

## Símbolos que debes conocer

| Símbolo | Significado |
|---|---|
| `—| |—` | Contacto Normalmente Abierto (NA) |
| `—|/|—` | Contacto Normalmente Cerrado (NC) |
| `( )` | Bobina (relé, contactor) |
| `⊗` o lámpara | Testigo / indicador |
| `⏱` | Temporizador |
| Rectángulo con `M` | Motor |
|Triángulo / cuadrado con línea | Sensor |
| `⏚` | Tierra / masa |

**Convención clave:** los contactos se dibujan en su **estado de reposo** (sin alimentar, sin pulsar). Un contacto NA se muestra abierto; un NC se muestra cerrado.

## Códigos de identificación (referencias)

| Prefijo | Elemento |
|---|---|
| `Q` | Interruptor / protección (Q1, Q2...) |
| `F` | Fusible |
| `S` | Pulsador / interruptor / sensor (S1, S2...) |
| `K` | Relé / contactor (K1, K2...) |
| `M` | Motor |
| `H` | Testigo / alarma (H1...) |
| `T` | Transformador |
| `U` | Convertidor / fuente |

Cuando veas `K1` en cuatro sitios distintos, son **contactos auxiliares del mismo relé**, repartidos por el esquema para distintas funciones.

## Ejemplo: arranque con auto-mantenimiento

1. `Q1` (automático) alimenta el circuito.
2. `S1` (pulsador NA de marcha) en serie.
3. `S2` (pulsador NC de parada) en serie.
4. Un contacto **NA de K1** en paralelo con S1: es el auto-mantenimiento.
5. La **bobina K1** al final de la línea.

Al pulsar S1 se energiza K1; su contacto auxiliar se cierra y mantiene la alimentación aunque sueltes S1. Al pulsar S2 se corta el circuito y K1 cae.

## Consejos para leer rápido

- Empieza por la **salida** (la bobina) y ve hacia atrás hasta la alimentación. Así entiendes qué condiciones la activan.
- Subraya con el dedo el camino de la corriente; no saltes líneas.
- Si hay un contacto NC en el camino, pregúntate *"¿qué pasa si este dispositivo falla o se acciona?"*.
- Ten a mano la **lista de componentes** (BOM) para saber qué es cada referencia.

Dominar esquemas es una de las habilidades con mejor rentabilidad para un técnico: te permite diagnosticar averías sin desmontar media máquina.
