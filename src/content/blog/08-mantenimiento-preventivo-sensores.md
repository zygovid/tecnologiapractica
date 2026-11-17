---
title: "Mantenimiento preventivo de sensores y actuadores"
description: " Checklist práctico de mantenimiento para sensores, cilindros y actuadores industriales: qué revisar, cada cuánto y qué síntomas anticipan fallos."
pubDate: 2026-11-24
section: "automatizacion"
draft: true
category: "Mantenimiento"
tags: ["mantenimiento", "sensores", "actuadores", "fiabilidad"]
---

El mantenimiento preventivo no es perder tiempo: es **evitar paradas no planificadas**, que siempre salen más caras. Sensores y actuadores son los componentes que más sufren el desgaste y la suciedad en una máquina.

## Por qué fallan los sensores

Las causas más habituales son:

- **Suciedad o residuos** en la cara activa (polvo, aceite, virutas).
- **Desalineación** por vibraciones o golpes.
- **Conexiones flojas** por vibración o humedad.
- **Cables dañados** por rozaduras o flexión repetida.
- **Deriva de ajuste** en sensores capacitivos o analógicos.
- **Fuente de alimentación inestable**.

## Checklist de sensores (mensual o según entorno)

1. **Limpieza:** paño suave y, si hace falta, alcohol isopropílico. Nunca abrasivos en sensores ópticos.
2. **Fijación:** aprieta soportes y bridas con el par adecuado; busca marcas de movimiento.
3. **Distancia:** comprueba que el objeto sigue dentro del alcance nominal.
4. **Indicador LED:** la mayoría de sensores tienen un LED de estado; compruébalo con el objeto presente y ausente.
5. **Cable:** revisa fundas, conectores y curvaturas. Presta atención a las zonas de paso de cables.
6. **Señal al PLC:** verifica en el monitor de entradas que el cambio se refleja en el controlador.

## Checklist de actuadores

### Cilindros neumáticos

- Fugas de aire (escuchar con la máquina parada).
- Movimiento suave, sin tirones.
- Ajuste de amortiguación y velocidad.
- Estado de juntas tóricas y vástagos (rayaduras = entrada de suciedad).
- Presión de trabajo correcta y filtros secos.

### Motores y variadores

- Temperatura de carcasa (comparar con el valor habitual).
- Ruido y vibración anómalos.
- Ventilación limpia y sin obstrucciones.
- Corriente dentro del rango nominal.
- Conexiones apretadas (con la alimentación cortada).

## Síntomas que anticipan un fallo

| Síntoma | Posible causa |
|---|---|
| El sensor falla de forma intermitente | Conexión floja o suciedad |
| El cilindro va más lento | Falta de presión o fugas |
| El motor se calienta más de lo normal | Ventilación, sobrecarga o refuerzo alto |
| El variador dispara avería al frenar | Rampa corta o resistencia de frenado |
| Entrada del PLC parpadea | Sensor en el límite de alcance o cable con interferencias |

## Registro: la parte que más vale

Anota en una hoja o ficha digital:

- Fecha de revisión.
- Equipo y referencia del componente.
- Lecturas (temperatura, presión, corriente, distancia).
- Acciones realizadas.
- Firma del técnico.

Con tres o cuatro registros ya puedes detectar tendencias: un sensor que cada vez requiere más sensibilidad, un motor que sube 5 °C por revisión, un cilindro que pierde presión lentamente.

## Frecuencia orientativa

| Elemento | Frecuencia |
|---|---|
| Sensores en entorno limpio | Cada 6 meses |
| Sensores con polvo/aceite | Cada 1-3 meses |
| Cilindros neumáticos | Cada 3 meses |
| Motores | Cada 6 meses |
| Variadores (ventilación y bornes) | Cada 6 meses |
| Cableado y cuadros | Anual |

Ajusta la frecuencia a la criticidad de la máquina. En una línea que para toda la producción, "demasiado mantenimiento" casi nunca existe.
