---
title: "Protecciones básicas de fuente: diodo, fusible PTC y desacoplo"
description: "Cómo proteger montajes de baja tensión con diodo contra inversión de polaridad, fusible rearmable PTC y condensadores de desacoplo."
pubDate: 2026-11-19
category: "Montaje"
tags: ["protección", "diodo", "fusible", "PTC", "desacoplo"]
section: "electronica-basica"
cover: "../../assets/covers/39-protecciones-fuente-diodo-fusible.webp"
coverAlt: "Ilustración de una cadena de protección con diodo, fusible PTC y condensador de desacoplo"
draft: false
---

En electrónica básica es fácil cometer errores de conexión: invertir la polaridad, provocar un cortocircuito accidental o generar picos al conmutar una carga. No siempre se puede evitar el fallo humano, pero sí reducir sus consecuencias con **protecciones sencillas**. Tres elementos muy útiles en montajes de baja tensión son el **diodo contra inversión de polaridad**, el **fusible rearmable PTC** y los **condensadores de desacoplo**.

Estas medidas no convierten un montaje en indestructible ni sustituyen un diseño cuidadoso, pero añaden margen de seguridad y ayudan a que los errores sean menos costosos. En esta guía verás para qué sirve cada una, cómo se colocan y qué limitaciones tienen.

<figure>
  <img src="/images/diagrams/protecciones-fuente.svg" alt="Cadena de protección con diodo contra polaridad inversa, fusible rearmable y condensador de desacoplo" />
  <figcaption>Las protecciones se colocan estratégicamente: antes de la carga y cerca de los circuitos sensibles al ruido.</figcaption>
</figure>

## Diodo contra inversión de polaridad

Conectar una fuente al revés es un error clásico. Un diodo en serie con la alimentación puede evitar que la corriente circule en sentido inverso hacia el circuito.

### Cómo funciona

- En polaridad correcta, el diodo conduce y deja pasar la corriente (con una caída de tensión).
- En polaridad invertida, el diodo bloquea y el circuito no recibe alimentación.

### Compromisos

- **Caída de tensión:** un diodo de silicio puede caer ~0,7 V; un Schottky suele caer menos (por ejemplo ~0,2–0,4 V según modelo y corriente).
- **Disipación:** la potencia perdida es `Vd × I`. A corrientes altas hay que tenerla en cuenta.
- **No protege frente a todo:** un cortocircuito en polaridad correcta seguirá siendo un problema.

Elige un diodo con corriente y tensión adecuadas para tu montaje. Si necesitas repasar cómo identificar y comprobar diodos, consulta [diodos: polaridad y comprobación](/electronica-basica/23-diodos-polaridad-comprobacion/).

## Fusible rearmable PTC

Un PTC (coeficiente de temperatura positivo) aumenta su resistencia cuando pasa demasiada corriente y se calienta. Eso limita la corriente en caso de sobrecarga o cortocircuito. Al enfriarse, puede volver a su estado de baja resistencia (según el modelo y las condiciones).

### Ventajas y límites

- **Ventaja:** evita tener que cambiar un fusible tradicional en cada prueba.
- **Límite:** el tiempo de actuación no es instantáneo y no sustituye a un diseño correcto.
- **Selección:** debe elegirse según la corriente de funcionamiento normal (hold) y la de disparo (trip), además de la tensión máxima.

Un PTC es útil como protección adicional en prototipos de baja tensión, pero no garantiza que ningún componente se dañe en un fallo grave.

## Condensadores de desacoplo

Los circuitos integrados y los módulos digitales pueden generar picos rápidos de consumo. Los condensadores de desacoplo, colocados **lo más cerca posible** de las patillas de alimentación del componente, ayudan a estabilizar la tensión local.

### Valores habituales

- **100 nF (0,1 µF) cerámico:** muy común cerca de cada CI.
- **Electrolíticos** (por ejemplo 10–100 µF) en la entrada de un módulo o placa: ayudan con variaciones más lentas.

No todos los montajes necesitan los mismos valores, pero poner un 100 nF cerca de un integrado es una buena práctica general. Si tienes dudas sobre tipos y polaridad, repasa [condensadores: tipos y códigos](/electronica-basica/21-condensadores/).

## Protección frente a cargas inductivas

Relés, motores y solenoides generan picos de tensión al desconectarse. Una medida imprescindible es el **diodo de flyback** (o rueda libre) en paralelo con la bobina, en la polaridad adecuada para no conducir en funcionamiento normal.

Sin esta protección, los picos pueden dañar transistores, circuitos integrados o contactos. Encontrarás el detalle de aplicación en [relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) y en proyectos como el [control de un motor DC con L298N](/electronica-basica/32-control-motor-dc-l298n/).

## Combinar protecciones en un montaje

Un ejemplo de cadena sencilla para una entrada de alimentación de baja tensión:

1. **Conector o cable de entrada** claramente marcado.
2. **Diodo en serie** para inversión de polaridad (si la caída es aceptable).
3. **PTC** para limitar sobrecorrientes.
4. **Condensador de entrada** para estabilizar.
5. **Regulador o convertidor** (por ejemplo [7805](/electronica-basica/35-regulador-7805/) o [buck LM2596](/electronica-basica/36-modulo-buck-lm2596/)).
6. **Condensadores de salida y desacoplo** cerca de la carga.

No todas las etapas son necesarias en todos los casos. Añade lo que tenga sentido según el riesgo, la corriente y el valor de los componentes que quieres proteger.

## Comprobaciones antes de encender

Las protecciones ayudan, pero no sustituyen la revisión previa:

- Verifica polaridad con el multímetro o inspección visual.
- Comprueba continuidad entre positivo y negativo para detectar cortos.
- Mide la tensión de salida de la fuente o regulador en vacío antes de conectar la carga.
- Conecta la carga por etapas si es compleja.
- Observa temperatura y comportamiento en los primeros minutos.

Estas prácticas encajan con lo visto en [cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/).

## Limitaciones importantes

- **No protegen contra sobretensiones grandes** ni contra conexión a 230 V.
- **No corrigen un diseño incorrecto** (corrientes excesivas, disipación insuficiente).
- **Un diodo en serie reduce la tensión disponible.**
- **Un PTC no actúa al instante** como un interruptor perfecto.
- **Los condensadores deben tener tensión y polaridad adecuadas.**

Trabaja siempre en baja tensión (5–12 V) y nunca uses la protoboard para la red eléctrica.

## Errores frecuentes

1. **Colocar el diodo al revés.** Bloquea la alimentación en polaridad correcta.
2. **Elegir un PTC con corriente de disparo demasiado alta.** No protegerá cuando haga falta.
3. **Olvidar el diodo de flyback en bobinas.** Riesgo de picos destructivos.
4. **Poner condensadores electrolíticos invertidos.** Pueden fallar.
5. **Confiar solo en las protecciones y no revisar el montaje.** La prevención empieza en el cableado.
6. **Usar un diodo con corriente insuficiente.** Se sobrecalienta o se daña.
7. **Colocar el desacoplo lejos del integrado.** Pierde efectividad.
8. **Pensar que un PTC evita cualquier daño.** Solo limita en ciertos escenarios.

## Preguntas frecuentes

### ¿Qué diodo uso para proteger contra inversión de polaridad?

Depende de la tensión y la corriente. Para baja corriente, un diodo rectificador o Schottky adecuado puede servir. Prioriza que soporte la corriente de tu carga y que la caída de tensión sea aceptable.

### ¿Dónde coloco el PTC?

Normalmente en serie con la línea positiva de entrada, antes del regulador o de la carga que quieres proteger, según el diseño.

### ¿Un condensador de 100 nF siempre es necesario?

No es obligatorio en todos los montajes, pero es una práctica muy recomendable cerca de circuitos integrados y módulos digitales. Ayuda a reducir problemas de ruido y estabilidad.

### ¿Estas protecciones sirven para 230 V?

No. Este artículo trata solo de **baja tensión continua** en montajes de electrónica básica. La red eléctrica requiere otras medidas, componentes y competencias.

### ¿Puedo prescindir del diodo de flyback si uso un relé de módulo?

Muchos módulos ya lo incluyen, pero no todos. Revisa el esquema o la documentación del módulo antes de asumirlo.

## Resumen

Las protecciones básicas —diodo contra inversión, fusible PTC y desacoplo— reducen el riesgo de daños por errores comunes y mejoran la estabilidad de los montajes de baja tensión. Cada una tiene un propósito y unas limitaciones: elige e instala según tu circuito.

Combinadas con buenas prácticas de alimentación, medición y revisión previa, hacen que aprender y prototipar sea más seguro y menos frustrante.

## Sigue con

- [Cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) para la base de distribución.
- [Regulador lineal 7805](/electronica-basica/35-regulador-7805/) y [módulo buck LM2596](/electronica-basica/36-modulo-buck-lm2596/) para las etapas de conversión.
- [Diodos: polaridad y comprobación](/electronica-basica/23-diodos-polaridad-comprobacion/) para elegir y verificar D1.
- [Condensadores: tipos y comprobación](/electronica-basica/21-condensadores/) para el desacoplo correcto.
- [Fuente ajustable para protoboard](/electronica-basica/40-fuente-ajustable-protoboard/) para aplicar estas ideas en un proyecto.
