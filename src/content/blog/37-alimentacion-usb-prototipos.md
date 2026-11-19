---
title: "Alimentación por USB para prototipos: qué puedes conectar y qué no"
description: "Cómo usar puertos y cargadores USB de 5 V para alimentar protoboard y módulos: corriente disponible, cables, riesgos y buenas prácticas."
pubDate: 2026-11-19
category: "Montaje"
tags: ["USB", "5V", "alimentación", "protoboard", "cargadores"]
section: "electronica-basica"
cover: "../../assets/covers/37-alimentacion-usb-prototipos.webp"
coverAlt: "Ilustración de un cargador USB alimentando una protoboard mediante un módulo breakout de 5 V"
draft: false
---

El conector USB es una de las formas más cómodas de conseguir **5 V** para experimentos: cargadores, power banks y puertos de ordenador están en todas partes. Para muchos montajes de electrónica básica es suficiente, pero no es una fuente infinita ni libre de problemas. La corriente disponible, la calidad del cable y el tipo de carga pueden marcar la diferencia entre un prototipo estable y uno que se reinicia o se comporta de forma extraña.

En esta guía verás cómo aprovechar el USB con criterio, cómo estimar qué puedes alimentar y qué precauciones tomar cuando tu circuito incluye relés, motores u otros elementos exigentes. Es un complemento directo a [cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/).

<figure>
  <img src="/images/diagrams/alimentacion-usb-prototipos.svg" alt="Cargador USB conectado a un breakout y a una protoboard con raíles de 5 V y masa" />
  <figcaption>El USB entrega 5 V, pero la corriente útil depende del cargador, del puerto y del cable empleado.</figcaption>
</figure>

## Qué ofrece realmente un USB

En el uso más común, USB proporciona 5 V y masa. La corriente que puedes extraer depende del origen:

| Fuente | Tensión nominal | Corriente orientativa | Uso recomendado |
|---|---:|---:|---|
| Puerto USB 2.0 de PC | 5 V | Hasta ~500 mA | Cargas pequeñas y pruebas rápidas |
| Puerto USB 3.x de PC | 5 V | Mayor margen según equipo | Similar, con precaución |
| Cargador USB | 5 V | 1 A, 2 A o según etiqueta | Prototipos con consumo conocido |
| Power bank | 5 V | Según modelo | Montajes portátiles |

Estas cifras son orientativas. Lo importante es **leer la etiqueta del cargador** y recordar que “5 V” no garantiza estabilidad perfecta bajo cualquier carga.

Los cargadores modernos pueden negociar tensiones mayores con dispositivos compatibles (por ejemplo USB Power Delivery). Para la electrónica básica de esta web, céntrate en **5 V conocidos y estables** y evita módulos dudosos.

## Cables: el detalle que se pasa por alto

No todos los cables USB son iguales:

- **Calidad y sección:** cables largos o finos provocan caída de tensión.
- **Estado:** conectores desgastados añaden resistencia y falsos contactos.
- **Tipo:** algunos priorizan carga, otros datos y carga; la calidad real varía.

Si al conectar la carga la tensión en la protoboard baja de 5 V a 4,6 V, el problema puede estar en el cable, en el cargador o en un consumo excesivo. Mide en el punto de carga con el multímetro.

## Qué puedes alimentar con comodidad

Con un cargador de 5 V y 1 A de calidad, suelen ir bien:

- LEDs con sus resistencias limitadoras.
- Sensores y módulos de bajo consumo.
- Circuitos lógicos sencillos y montajes con 555 de carga ligera.
- Pequeños módulos dentro de su corriente especificada.

Calcula siempre la suma. Una tira LED, varios relés o un motor pueden superar fácilmente lo esperado. Para dimensionar consumos, apóyate en [ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/) y verifica con [medición de corriente](/electronica-basica/20-medir-corriente-multimetro/).

## Qué evitar o tratar con cuidado

### Puertos USB de equipos valiosos

Un cortocircuito o un pico de corriente puede apagar el puerto o, en el peor caso, dañarlo. Para experimentar es más prudente usar un **cargador USB dedicado** o una fuente específica.

### Motores y cargas inductivas

Los motores generan picos al arrancar y ruido eléctrico. Aunque el consumo medio parezca bajo, el arranque puede tumbar los 5 V. En esos casos:
- Usa una fuente externa adecuada para el motor.
- Comparte masa común entre fuente del motor y circuito de control si es necesario.
- Añade protecciones donde corresponda (ver [relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/)).

### Relés y varias cargas simultáneas

La bobina de un relé puede consumir decenas de miliamperios. Varios relés o cargas combinadas pueden superar la capacidad del puerto. Alimenta la potencia por separado cuando haga falta.

## Montaje típico con breakout USB

Un módulo USB a pines o bornes facilita llevar 5 V y GND a la protoboard:

1. Revisa que el módulo indique claramente 5 V y GND.
2. Comprueba con continuidad que no hay cortocircuito entre 5 V y GND.
3. Conecta el cable USB a un cargador adecuado.
4. Mide 5 V en los raíles antes de insertar el circuito.
5. Añade la carga progresivamente y observa si la tensión se mantiene.

Recuerda que los raíles pueden tener interrupciones centrales; verifícalo como se indica en [protoboard paso a paso](/electronica-basica/19-protoboard/).

## Caídas de tensión y reinicios

Síntomas típicos de una alimentación insuficiente:
- Módulos o placas que se reinician al activar una carga.
- LEDs que pierden brillo al accionar un relé.
- Bajadas de 5 V a 4,5 V o menos bajo carga.

Soluciones habituales:
- Usar un cargador con más corriente disponible.
- Mejorar o acortar el cable.
- Separar la alimentación de potencia y la de control.
- Añadir condensadores de desacoplo con criterio.

Para mejorar la robustez frente a transitorios, consulta [protecciones básicas de fuente](/electronica-basica/39-protecciones-fuente-diodo-fusible/).

## Seguridad práctica

- No modifiques cargadores ni abras fuentes selladas.
- No uses el USB como salida de potencia ilimitada.
- Evita cortocircuitos: el cargador puede calentarse o desconectarse.
- Trabaja siempre en **baja tensión** (5 V DC). **No mezcles con 230 V AC en la protoboard.**
- Si algo huele a quemado o se calienta, desconecta.

## Errores frecuentes

1. **Asumir que todo USB entrega lo mismo.** La etiqueta del cargador manda.
2. **Usar un cable deficiente y culpar al circuito.** Mide la tensión en la carga.
3. **Alimentar motores desde el mismo 5 V que la lógica.** Provoca caídas y ruido.
4. **Probar cortos en el puerto del portátil.** Usa un cargador dedicado.
5. **Olvidar la masa común** al mezclar USB con otra fuente.
6. **No comprobar continuidad antes de enchufar.** Un puente puede hacer corto directo.
7. **Usar power banks que se apagan** con consumos muy bajos.
8. **Pensar que USB sirve para cualquier tensión.** Para 12 V u otros valores necesitas otra fuente o conversión.

## Preguntas frecuentes

### ¿Puedo alimentar una placa o módulo desde un cargador USB?

Sí, si proporciona 5 V estables y corriente suficiente. No conectes cargas adicionales grandes sin calcular el total.

### ¿Un power bank sirve para protoboard?

Sí, para montajes portátiles de bajo consumo. Algunos se apagan con corrientes muy pequeñas; prueba otro modelo si ocurre.

### ¿Puedo obtener 12 V desde un USB?

No directamente de la línea de 5 V estándar. Para 12 V, usa una fuente de 12 V adecuada o un convertidor dimensionado correctamente.

### ¿Por qué se apaga mi cargador?

Suele deberse a protección ante cortocircuito o sobrecarga. Desconecta, corrige el fallo y vuelve a probar.

### ¿Es seguro usar el USB de un televisor o consola?

Para pruebas puntuales de muy bajo consumo puede funcionar, pero no es ideal para experimentar con posibles cortos. Mejor un cargador dedicado.

## Resumen

La alimentación por USB es práctica para obtener 5 V en prototipos, pero exige conocer la corriente disponible, la calidad del cable y el tipo de carga. Úsala para consumos moderados, mide bajo carga y evita experimentar con cortocircuitos en equipos valiosos.

Cuando necesites más margen, otra tensión o mayor estabilidad, combina lo aprendido con un [regulador 7805](/electronica-basica/35-regulador-7805/), un [módulo buck LM2596](/electronica-basica/36-modulo-buck-lm2596/) o una fuente dedicada, siempre con masa común bien definida.

## Sigue con

- [Cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) para la base de cualquier montaje.
- [Regulador lineal 7805](/electronica-basica/35-regulador-7805/) para obtener 5 V desde 7–12 V.
- [Módulo buck LM2596](/electronica-basica/36-modulo-buck-lm2596/) para mayor eficiencia y ajuste.
- [Pilas y autonomía en prototipos](/electronica-basica/38-pilas-y-autonomia/) para alternativas portátiles.
- [Protecciones básicas de fuente](/electronica-basica/39-protecciones-fuente-diodo-fusible/) para reducir riesgos.
