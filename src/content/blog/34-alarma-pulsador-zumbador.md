---
title: "Alarma con pulsador y zumbador: temporizador de aviso"
description: "Monta una alarma que suena al pulsar un botón durante unos segundos usando un 555, un transistor y un zumbador. Incluye pruebas y variantes."
pubDate: 2026-11-18
category: "Proyectos"
tags: ["alarma", "zumbador", "555", "pulsador", "proyecto"]
section: "electronica-basica"
cover: "../../assets/covers/34-alarma-pulsador-zumbador.webp"
coverAlt: "Ilustración de un pulsador que activa un zumbador mediante un temporizador 555"
draft: false
---

Una **alarma de aviso** puede ser tan simple como un pulsador que hace sonar un zumbador durante unos segundos. No necesita microcontrolador ni relé: un **555 en modo monoestable**, un transistor y un zumbador bastan.

Este proyecto sirve como aviso de puerta, temporizador de entrada, señal de prueba o base para una alarma más completa. La salida se activa una vez y se apaga sola, aunque el pulsador siga presionado.

<figure>
  <img src="/images/diagrams/alarma-pulsador.svg" alt="Circuito de alarma con pulsador, 555 monoestable, transistor y zumbador" />
  <figcaption>El pulsador dispara el 555. La salida activa el transistor, que enciende el zumbador durante el tiempo fijado por R y C.</figcaption>
</figure>

## Cómo funciona

El 555 está en reposo con la salida en bajo. Al pulsar el botón, la patilla de disparo baja y comienza el ciclo. La salida sube y el transistor enciende el zumbador. El condensador se carga a través de la resistencia; cuando llega al umbral, la salida baja y el zumbador se apaga.

La duración se calcula con:

**T = 1,1 × R × C**

Con `R = 470 kΩ` y `C = 22 µF`:

- `T = 1,1 × 470.000 × 0,000022`.
- `T ≈ 11,4 segundos`.

Puedes cambiar el tiempo con otro condensador o resistencia. Para una alarma de 30 segundos, usa `C = 47 µF` o sube R. Para un aviso corto, baja a `10 µF`.

## Lista de materiales

- 1 NE555.
- 1 resistencia de **470 kΩ**.
- 1 condensador electrolítico de **22 µF** a 16 V o más.
- 1 condensador cerámico de **10 nF**.
- 1 pulsador NO.
- 1 resistencia de **10 kΩ** para el pull-up del disparo.
- 1 transistor NPN 2N2222 o BC337.
- 1 resistencia de **1 kΩ** para la base.
- 1 diodo 1N4007.
- 1 zumbador activo de 5–9 V.
- Fuente de **9 V**.
- Protoboard y cables.

Comprueba que el zumbador es **activo**. Un zumbador pasivo necesita una señal alterna o PWM y no sonará con una salida continua. Si solo tienes uno pasivo, necesitas un 555 en modo astable o un microcontrolador.

## Montaje del 555

1. Patilla 1 a GND.
2. Patilla 8 a +9 V.
3. Patilla 4 (`RESET`) a +9 V.
4. Patilla 5 a GND con un condensador de 10 nF.
5. Resistencia de 470 kΩ entre +9 V y patilla 7.
6. Patilla 7 unida a patilla 6.
7. Condensador de 22 µF entre patilla 6 y GND, positivo hacia la patilla 6.
8. Pulsador entre patilla 2 y GND.
9. Resistencia de 10 kΩ entre patilla 2 y +9 V.
10. Patilla 3 es la salida.

La resistencia de 10 kΩ mantiene el disparo en alto mientras el botón está abierto. Al pulsar, baja a GND y arranca el ciclo.

## Etapa de salida

La salida del 555 puede entregar corriente, pero un zumbador puede consumir más de lo conveniente. Usa un transistor:

1. Patilla 3 → resistencia de 1 kΩ → base del transistor.
2. Emisor del transistor a GND.
3. Colector a un terminal del zumbador.
4. Otro terminal del zumbador a +9 V.
5. Diodo 1N4007 en paralelo con el zumbador, cátodo a +9 V.

El diodo protege el transistor del pico inductivo si el zumbador es magnético. Si el zumbador es piezoeléctrico, también es buena práctica dejarlo.

No conectes el zumbador directo a la salida si consume más de unos pocos miliamperios. Consulta la etiqueta o mide la corriente.

## Prueba paso a paso

1. Monta el 555 sin el zumbador.
2. Alimenta con 9 V.
3. Mide la patilla 3: debe estar en bajo.
4. Pulsa el botón y mide: debe subir a unos 9 V.
5. Suelta el botón: la salida debe seguir alta durante unos 11 segundos.
6. Comprueba que después baja sola.
7. Conecta la etapa de salida y el zumbador.
8. Repite la prueba.

Si la salida no sube, revisa `RESET`, la alimentación y el pulsador. Si se queda alta para siempre, el condensador puede estar abierto o la patilla 6 mal conectada. Si suena nada más encender, el disparo puede estar en bajo o el 555 está mal cableado.

## Ajustar el tiempo

Tabla orientativa con `R = 470 kΩ`:

| Condensador | Tiempo aproximado |
|---|---|
| 4,7 µF | 2,4 s |
| 10 µF | 5,2 s |
| 22 µF | 11,4 s |
| 47 µF | 24,3 s |
| 100 µF | 51,7 s |

La tolerancia del electrolítico puede ser del 20 %. Mide el tiempo real y ajusta. Para tiempos muy largos, la corriente de fuga del condensador hace que el circuito sea menos predecible.

## Variante con interruptor de puerta

Puedes sustituir el pulsador por un **interruptor de final de carrera** o un **contacto magnético**. Si la puerta se abre, el contacto cambia y dispara la alarma.

Para una alarma que avise al abrir:

- Usa un contacto **NC** en serie con la entrada de disparo.
- Ajusta el pull-up para que el disparo esté alto en reposo.
- Al abrir la puerta, el contacto se abre y el disparo baja.

Comprueba la lógica con el multímetro antes de conectar. Un contacto mal elegido puede dejar la alarma siempre activa o nunca activarse. Tienes más detalles en [pulsadores y pull-up/pull-down](/electronica-basica/22-pulsadores-pull-up-pull-down/).

## Variante con alarma continua

El circuito actual se apaga solo. Si quieres que la alarma siga sonando hasta que la resetees, necesitas un **latch**:

- Un SCR que se mantenga conduciendo hasta cortar la alimentación.
- Un relé con contacto de retención.
- Un microcontrolador que mantenga la salida activa.

Para empezar, el temporizador es más seguro y evita que el zumbador suene indefinidamente. Si lo conviertes en alarma continua, añade un botón de silencio y un indicador.

## Variantes

- **Aviso de nevera abierta:** contacto magnético y zumbador.
- **Temporizador de entrada:** pulsador exterior y zumbador interior.
- **Alarma con luz:** añade un LED o un relé para una lámpara de 12 V.
- **Doble tono:** usa un 555 astable para un zumbador pasivo.
- **Arduino:** lee el pulsador, activa el zumbador y muestra el estado en el monitor serie.

## Seguridad

- Trabaja con 9 V o 12 V.
- No conectes la red eléctrica a la protoboard.
- Si usas un relé para una carga de 230 V, debe ir en una caja y con instalación segura.
- No dejes la alarma conectada sin supervisión si el zumbador se calienta.
- Comprueba la polaridad del electrolítico y del zumbador.

## Errores frecuentes

1. **Usar un zumbador pasivo esperando un tono continuo.** Necesita una señal oscilante.
2. **Conectar el zumbador directo a la salida.** Puede consumir demasiado.
3. **Olvidar el diodo.** El transistor puede dañarse con el pico.
4. **Dejar RESET flotando.** El 555 se comporta de forma imprevisible.
5. **Poner el electrolítico al revés.** Puede calentarse o explotar.
6. **No poner pull-up en el disparo.** El pulsador deja la entrada flotando.
7. **Esperar un tiempo exacto.** Los electrolíticos tienen tolerancia.

## Preguntas frecuentes

### ¿Puedo usar un zumbador de 12 V con una fuente de 9 V?

Puede sonar más flojo o no sonar. Usa la tensión indicada por el fabricante. Si es de 12 V, alimenta la etapa con 12 V y revisa el 555.

### ¿Por qué suena al encender?

El disparo puede estar en bajo, el condensador puede estar descargado o el pulsador está mal cableado. Revisa la patilla 2 y el pull-up.

### ¿Cómo hago que dure un minuto?

Con `R = 470 kΩ` y `C = 120 µF` sale alrededor de 62 segundos. Ajusta midiendo. Para tiempos largos, usa un microcontrolador.

### ¿Puedo sustituir el pulsador por un sensor?

Sí, si el sensor entrega una señal compatible. Un sensor con salida a transistor puede necesitar una etapa de acondicionamiento. Mide su salida antes de conectarla.

## Resumen

La alarma temporizada usa un **555 monoestable** para generar un pulso de unos 11 segundos. El pulsador dispara, el condensador fija el tiempo y el transistor activa el zumbador. Con un diodo de flyback y una base limitada, el montaje es seguro y repetible.

Ajusta el tiempo, prueba cada etapa y elige un zumbador activo. Si quieres una alarma permanente, añade un latch o un microcontrolador con botón de silencio.

## Sigue con

- [Temporizador con 555](/electronica-basica/30-temporizador-555/) para entender el monoestable.
- [El transistor como interruptor](/electronica-basica/24-transistor-como-interruptor/) para la etapa de salida.
- [Pulsadores y pull-up/pull-down](/electronica-basica/22-pulsadores-pull-up-pull-down/) para elegir el contacto.
- [Cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) para una fuente estable.
- [Relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/) si añades una carga mayor.
