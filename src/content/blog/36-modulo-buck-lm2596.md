---
title: "Módulo buck LM2596: reducir tensión con eficiencia en tus montajes"
description: "Guía práctica del convertidor reductor LM2596: ajuste de salida, conexión, medición, límites de corriente y seguridad en protoboard."
pubDate: 2026-11-19
category: "Montaje"
tags: ["buck", "LM2596", "alimentación", "convertidor", "regulador"]
section: "electronica-basica"
cover: "../../assets/covers/36-modulo-buck-lm2596.webp"
coverAlt: "Ilustración de un módulo buck LM2596 ajustando 12 V a 5 V medidos con multímetro"
draft: false
---

Cuando necesitas bajar tensión con más corriente o con menos calor que un regulador lineal, un **convertidor reductor o buck** es la herramienta adecuada. El módulo basado en el **LM2596** es muy popular en prototipos porque permite ajustar la salida con un potenciómetro y trabajar con entradas típicas de 12 V para obtener 5 V u otros valores dentro de su rango.

No es mágico: tiene límites de corriente, puede generar ruido eléctrico y requiere una puesta en marcha correcta. En esta guía aprenderás a conectarlo, ajustarlo con el multímetro antes de enchufar la carga y decidir cuándo es mejor que un [regulador 7805](/electronica-basica/35-regulador-7805/).

<figure>
  <img src="/images/diagrams/modulo-buck-lm2596.svg" alt="Módulo buck LM2596 conectado desde una fuente de 12 V a una salida ajustada y medida con multímetro" />
  <figcaption>Ajusta siempre la tensión de salida en vacío y verifícala con el multímetro antes de conectar el circuito.</figcaption>
</figure>

## Qué hace un convertidor buck

Un buck es un convertidor DC-DC **conmutado** que reduce tensión. A diferencia de un regulador lineal, no disipa toda la diferencia como calor: conmuta rápidamente y usa una bobina y condensadores para transferir energía con mayor eficiencia.

Ventajas principales:
- Menos calor para la misma potencia útil.
- Mejor aprovechamiento cuando la entrada es mucho mayor que la salida.
- Posibilidad de manejar corrientes mayores en muchos montajes.

Compromisos a tener en cuenta:
- Genera rizado y ruido de conmutación.
- La calidad varía mucho entre módulos baratos.
- La corriente máxima anunciada no siempre es real de forma continua.
- Ajustar mal el potenciómetro puede enviar demasiada tensión a la carga.

## Partes típicas de un módulo LM2596

| Elemento | Función | Qué debes revisar |
|---|---|---|
| Bornes IN+/IN− | Entrada de la fuente | Polaridad correcta |
| Bornes OUT+/OUT− | Salida regulable | Medir antes de usar |
| Potenciómetro | Ajuste de Vout | Varias vueltas, giro sensible |
| Bobina | Almacenamiento de energía | Puede calentarse |
| Condensadores | Filtrado | Estado y polaridad si son electrolíticos |
| IC y diodo | Conmutación | Parte interna del módulo |

Algunos módulos incluyen LED o voltímetro; otros no. No asumas protecciones que no estén documentadas.

## Puesta en marcha segura paso a paso

La regla más importante es **ajustar y medir la salida sin carga** antes de conectar tu prototipo.

1. **Desconecta todo.** Fuente apagada y sin carga en la salida.
2. **Comprueba la polaridad de entrada.** Invertir IN+ e IN− puede dañar el módulo.
3. **Gira el potenciómetro** con precaución (si no conoces su posición, ajusta despacio mientras mides).
4. **Conecta el multímetro** en voltímetro DC a OUT+ y OUT−.
5. **Enciende la fuente** (por ejemplo 12 V DC).
6. **Ajusta lentamente** hasta obtener la tensión deseada, por ejemplo 5,00 V.
7. **Apaga, conecta la carga** y vuelve a encender midiendo la salida. Una caída grande indica límite de corriente, cableado fino o módulo de baja calidad.
8. **Comprueba la temperatura** tras unos minutos a la corriente de trabajo.

Si vas a alimentar una [protoboard](/electronica-basica/19-protoboard/), revisa también la distribución de raíles y la masa común como se indica en [cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/).

## Por qué puede ser más eficiente que un lineal

Supón que necesitas 5 V y 1 A (5 W en la carga) desde 12 V:

- **Regulador lineal:** la entrada entrega aproximadamente 12 W y se pierden ~7 W en calor.
- **Buck:** con una eficiencia típica del 85–92 %, la entrada puede rondar 5,4–5,9 W.

No es un resultado perfecto en todos los casos, pero explica por qué el buck se calienta mucho menos en diferencias de tensión grandes. Para relacionar tensión, corriente y potencia, repasa [ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/).

## Límites reales de los módulos económicos

Muchos anuncios prometen corrientes altas. En la práctica:

- La corriente continua segura suele ser menor sin buena disipación.
- A mayor diferencia entre entrada y salida, más esfuerzo térmico.
- La bobina puede saturar y la tensión cae bajo carga.
- El rizado de salida puede afectar a circuitos sensibles.

Para LEDs, sensores y pequeñas cargas lógicas funciona bien. Para corrientes altas sostenidas, elige un convertidor de calidad conocida y respeta sus especificaciones.

## Ruido y desacoplo

Al conmutar, el buck introduce ruido. Buenas prácticas:

- Mantén cortos los cables de entrada y salida.
- Asegura una masa común bien definida.
- Añade condensadores de desacoplo cerca de cargas sensibles.
- Separa, si es posible, la alimentación de potencia y la de señal en montajes con motores.

Si tu circuito incluye cargas inductivas, combina esto con las medidas de [relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) y [protecciones básicas de fuente](/electronica-basica/39-protecciones-fuente-diodo-fusible/).

## Ajuste a 3,3 V y otros valores

Muchos módulos permiten bajar a valores bajos, pero no todos regulan igual en todo el rango. Si necesitas 3,3 V:

- Ajusta con precisión y mide bajo carga.
- Comprueba que la tensión se mantiene estable con tu consumo.
- Considera un regulador dedicado si la carga es muy sensible.

Nunca alimentes un dispositivo de 3,3 V con 5 V por un ajuste incorrecto: un giro accidental del potenciómetro puede dañarlo.

## Seguridad y alcance

- Trabaja solo con **baja tensión continua** (por ejemplo 5–24 V DC según el módulo).
- **No uses estos módulos con 230 V AC** ni los conectes a la red eléctrica.
- Comprueba que no haya cortocircuitos en la salida antes de encender.
- Si huele a quemado o se calienta en exceso, desconecta inmediatamente.

Para verificar consumos y detectar caídas, usa el multímetro como se indica en [cómo medir corriente con el multímetro](/electronica-basica/20-medir-corriente-multimetro/).

## Errores frecuentes

1. **Conectar la carga antes de ajustar la salida.** Puedes aplicar una tensión excesiva.
2. **Invertir la polaridad de entrada.** Daño inmediato en muchos módulos.
3. **Fiarse solo del voltímetro integrado.** Contrasta con un multímetro externo.
4. **Usar cables demasiado finos.** Provocan caída de tensión y calentamiento.
5. **Creer que la corriente máxima es continua y garantizada.** La tensión cae o el módulo se calienta.
6. **No compartir masa con el circuito de control.** Señales erráticas o sin referencia.
7. **Tapar el módulo e impedir la disipación.** Reduce la corriente o mejora ventilación.
8. **Ignorar el rizado en cargas sensibles.** Añade filtrado o usa otra solución.

## Preguntas frecuentes

### ¿Puedo usar un buck para cargar baterías?

No como cargador controlado por sí solo. La carga de baterías requiere control de corriente y tensión según su química. Un buck ajustable no sustituye a un cargador adecuado.

### ¿Siempre es mejor que un 7805?

No. Para corrientes pequeñas y poca diferencia de tensión, el 7805 es simple y silencioso. Para mayor eficiencia o más corriente, el buck suele ser mejor opción.

### ¿Por qué baja la tensión al conectar un motor?

Los motores piden picos de corriente al arrancar. La fuente, el módulo o el cableado pueden no soportarlo. Separa alimentación, añade margen y revisa protecciones.

### ¿Puedo subir tensión con este módulo?

No. El LM2596 en configuración buck solo reduce tensión. Para subirla necesitas un convertidor elevador (boost).

### ¿Necesito disipador?

Depende del módulo y la potencia. Algunos incluyen disipador; con cargas altas puede ser insuficiente. Observa la temperatura en funcionamiento real.

## Resumen

El módulo buck LM2596 es una forma práctica de obtener tensiones menores con buena eficiencia en prototipos de baja tensión. El procedimiento clave es ajustar en vacío, medir con multímetro, conectar la carga y verificar de nuevo. Respeta polaridad, corriente y temperatura, y ten en cuenta el ruido de conmutación.

Bien utilizado, te permitirá alimentar montajes de 5 V o 3,3 V desde fuentes de 12 V con mucho menos calor que un regulador lineal.

## Sigue con

- [Regulador lineal 7805](/electronica-basica/35-regulador-7805/) para comparar con la alternativa lineal.
- [Cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) para distribuir tensiones correctamente.
- [Protecciones básicas de fuente](/electronica-basica/39-protecciones-fuente-diodo-fusible/) para proteger entrada y carga.
- [Pilas y autonomía en prototipos](/electronica-basica/38-pilas-y-autonomia/) si tu fuente será portátil.
- [Fuente ajustable para protoboard](/electronica-basica/40-fuente-ajustable-protoboard/) para montar un sistema completo.
