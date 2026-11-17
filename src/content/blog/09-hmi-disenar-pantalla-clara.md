---
title: "HMI: cómo diseñar una pantalla clara y útil"
description: "Principios prácticos de diseño HMI industrial: jerarquía visual, colores, alarmas y pantallas que ayuden al operario en lugar de confundirlo."
pubDate: 2026-11-25
category: "HMI"
tags: ["HMI", "SCADA", "diseño", "operación"]
---

Una HMI (Human-Machine Interface) no es una pantalla "bonita": es una herramienta para que un operario entienda el estado de la máquina y actúe rápido. Un mal diseño aumenta los errores y alarga los tiempos de parada.

## Principio 1: una pantalla, una idea

Cada pantalla debe tener un objetivo claro:

- **Vista general:** estado de toda la línea, resumen.
- **Detalle de estación:** una zona concreta con sus variables.
- **Alarmas:** qué ha fallado y dónde.
- **Parámetros:** ajustes protegidos por contraseña.
- **Diagnóstico:** señales internas para mantenimiento.

No mezcles todo en una sola pantalla. Si el operario tiene que buscar entre 40 botones, el diseño ha fallado.

## Principio 2: jerarquía visual

Ordena por importancia:

1. Estado de la máquina (marcha / parada / avería).
2. Alarmas activas.
3. Variables críticas (temperatura, presión, velocidad).
4. Contadores y datos secundarios.
5. Navegación.

Lo más importante, arriba y grande. Lo secundario, abajo y más pequeño.

## Principio 3: color con significado

Usa pocos colores y siempre con el mismo sentido:

| Color | Significado habitual |
|---|---|
| Verde | Marcha / normal / OK |
| Rojo | Avería / parada de emergencia |
| Ámbar | Advertencia / atención |
| Gris | Inactivo / deshabilitado |
| Azul | Información / navegación |

**Evita** el rojo y el verde para distinguir botones si el operario puede ser daltónico. Añade siempre texto o iconos: el color nunca debe ser la única señal.

## Principio 4: botones seguros

- El botón de **parada** debe ser visible, grande y estar siempre en el mismo sitio.
- Las acciones críticas (reset de avería, cambio de modo, purga) requieren **confirmación**.
- Los botones deshabilitados deben verse claramente deshabilitados, no simplemente "no hacer nada".
- Usa verbos: *"Arrancar"*, *"Reiniciar"*, no *"OK"*.

## Principio 5: alarmas útiles

Una alarma debe decir **qué pasa, dónde y qué hacer**:

- ❌ *"Error 23"*
- ✅ *"Presión baja en estación 2. Comprobar compresor y filtros."*

Además:

- Distingue entre **alarma** (requiere acción) y **aviso** (informativo).
- Registra fecha y hora de cada alarma.
- No bombardees al operario con alarmas repetitivas: usa histéresis y retardo.

## Principio 6: legibilidad

- Tamaño mínimo de texto: 14-16 px en pantallas industriales.
- Contraste alto entre texto y fondo.
- Fondo oscuro o neutro: reduce la fatiga visual en turnos largos.
- Evita animaciones innecesarias; que nada parpadee salvo una alarma crítica.

## Errores frecuentes

1. **Demasiados datos en pantalla.** Más información no es más claridad.
2. **Navegación profunda.** Que la pantalla crítica esté a un clic como máximo.
3. **Sin indicación de modo.** El operario debe saber siempre si está en automático, manual o mantenimiento.
4. **Textos técnicos internos.** Habla el lenguaje del operario, no el del programador.

## Checklist antes de entregar

- [ ] ¿Se entiende el estado de la máquina en menos de 3 segundos?
- [ ] ¿Las alarmas indican acción a tomar?
- [ ] ¿La parada está siempre accesible?
- [ ] ¿Los colores tienen un significado coherente?
- [ ] ¿Se ha probado con guantes y con poca luz?
- [ ] ¿El texto se lee a 1 metro de distancia?

Una buena HMI se nota porque **no se nota**: el operario solo ve lo que necesita, cuando lo necesita.
