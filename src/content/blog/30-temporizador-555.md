---
title: "Temporizador con 555: montaje monoestable paso a paso"
description: "Aprende a usar el 555 como temporizador: patillas, fórmula T = 1,1 RC, montaje monoestable y cómo evitar disparos falsos."
pubDate: 2026-11-18
category: "Proyectos"
tags: ["555", "temporizador", "monoestable", "condensador", "proyecto"]
section: "electronica-basica"
cover: "../../assets/covers/30-temporizador-555.webp"
coverAlt: "Ilustración del circuito integrado 555 con resistencia, condensador y LED temporizado"
draft: false
---

El **NE555** es uno de los circuitos integrados más conocidos de la electrónica. Con una resistencia, un condensador y una alimentación puede encender un LED durante unos segundos, generar pulsos o hacer parpadear una salida. No necesita programación y es barato.

En este proyecto lo usamos en modo **monoestable**: cada pulsación genera un pulso de duración fija. Al soltar el pulsador, la salida sigue activa el tiempo calculado y luego se apaga sola. Es la base de un temporizador de luces, un aviso o un relé retardado.

<figure>
  <img src="/images/diagrams/temporizador-555.svg" alt="Circuito monoestable con 555, pulsador, resistencia, condensador electrolítico y LED de salida" />
  <figcaption>El condensador fija el tiempo. El pulsador dispara el ciclo; la salida permanece activa hasta que el condensador se carga.</figcaption>
</figure>

## Qué hace el modo monoestable

En modo monoestable, la salida está en reposo en nivel bajo. Cuando llega un pulso de disparo, la salida sube y se mantiene alta durante un tiempo. Después vuelve a bajar y espera otro disparo.

La duración se calcula con:

**T = 1,1 × R × C**

Donde:

- `T` es el tiempo en segundos.
- `R` es la resistencia en ohmios.
- `C` es la capacidad en faradios.

Ejemplo: `R = 100 kΩ` y `C = 100 µF`.

- `R = 100.000 Ω`.
- `C = 0,0001 F`.
- `T = 1,1 × 100.000 × 0,0001 = 11 s`.

Con esos valores, cada pulsación enciende la salida unos **11 segundos**.

## Patillas del 555

El encapsulado DIP de 8 patillas se numera mirando la muesca o el punto de referencia:

1. **GND:** masa.
2. **TRIG:** disparo, activo en nivel bajo.
3. **OUT:** salida.
4. **RESET:** reinicio, activo en nivel bajo. Debe estar a Vcc para funcionar.
5. **CONT:** control de tensión, normalmente se deja con un condensador de 10 nF a GND.
6. **THR:** umbral.
7. **DIS:** descarga.
8. **VCC:** alimentación, de 4,5 a 16 V en el NE555 clásico.

No conectes la alimentación al revés. Un 555 invertido puede calentarse mucho y destruirse. Comprueba la muesca antes de insertarlo.

## Lista de materiales

- 1 NE555.
- 1 resistencia de **100 kΩ**.
- 1 condensador electrolítico de **100 µF** a 16 V o más.
- 1 condensador cerámico de **10 nF**.
- 1 pulsador NO.
- 1 resistencia de **10 kΩ** para el pull-up del disparo.
- 1 LED.
- 1 resistencia de **330 Ω** para el LED.
- Fuente de **9 V** o 5 V.
- Protoboard y cables.

Para tiempos más cortos, baja R o C. Para tiempos más largos, súbelos. Un condensador electrolítico tiene tolerancia y fugas; para tiempos precisos usa uno de más calidad o un circuito con cristal.

## Cálculo del tiempo

La fórmula es aproximada. La tolerancia del condensador electrolítico puede ser del 20 % o más. Si necesitas 10 segundos exactos, mide y ajusta.

Tabla rápida con `C = 100 µF`:

| Resistencia | Tiempo aproximado |
|---|---|
| 10 kΩ | 1,1 s |
| 47 kΩ | 5,2 s |
| 100 kΩ | 11 s |
| 220 kΩ | 24 s |
| 470 kΩ | 52 s |

No uses resistencias gigantes ni condensadores de miles de microfaradios sin comprobar la corriente de fuga. El 555 puede tardar en reiniciarse o dispararse solo.

## Montaje paso a paso

1. Coloca el 555 en la protoboard atravesando el canal central.
2. Conecta la patilla 1 a **GND**.
3. Conecta la patilla 8 a **+Vcc**.
4. Une la patilla 4 (`RESET`) a **+Vcc**.
5. Conecta un condensador de **10 nF** entre la patilla 5 y GND.
6. Conecta la resistencia de **100 kΩ** entre Vcc y la patilla 7.
7. Une la patilla 7 a la patilla 6.
8. Conecta el condensador de **100 µF** entre la patilla 6 y GND, con el positivo hacia la patilla 6.
9. Conecta el pulsador entre la patilla 2 y GND.
10. Pon una resistencia de **10 kΩ** entre la patilla 2 y Vcc.
11. Conecta el LED y su resistencia de 330 Ω entre la patilla 3 y GND.

La resistencia de 10 kΩ en `TRIG` mantiene el disparo en alto mientras el pulsador está abierto. Al pulsar, `TRIG` baja y arranca el ciclo.

## Conexión del LED

La salida del 555 puede entregar o absorber corriente. Para un LED pequeño:

- Patilla 3 → resistencia de 330 Ω → ánodo del LED.
- Cátodo del LED → GND.

Con una fuente de 9 V y un LED rojo de 2 V:

- `R = (9 − 2) / 0,015 = 467 Ω`.
- Un valor de **470 Ω** es más conservador.

Si usas 5 V, 330 Ω suele estar bien para un LED rojo. Para un LED azul o blanco, calcula con su caída real.

No conectes un LED directo entre la salida y GND. La corriente puede superar el límite del LED y del integrado.

## Probar el circuito

1. Alimenta con 9 V.
2. Comprueba que el LED está apagado.
3. Pulsa el botón una vez.
4. El LED debe encenderse y quedarse unos 11 segundos.
5. Al terminar, debe apagarse aunque sigas pulsando.
6. Suelta y espera unos segundos antes de volver a disparar.

Si el LED se enciende y se apaga inmediatamente, revisa el condensador y la patilla 6. Si nunca se enciende, revisa `RESET`, `TRIG` y la alimentación. Si se queda encendido para siempre, el condensador puede estar abierto o la patilla 6 mal conectada.

## Qué hace cada componente

- **R de 100 kΩ:** limita la corriente de carga del condensador y fija el tiempo.
- **C de 100 µF:** almacena la carga que determina el tiempo.
- **Pulsador:** lleva `TRIG` a GND y dispara.
- **R de 10 kΩ en TRIG:** evita disparos falsos cuando el pulsador está abierto.
- **C de 10 nF en CONT:** estabiliza la referencia interna.
- **RESET a Vcc:** evita que el integrado se reinicie solo.

Si `RESET` queda flotando, el 555 puede comportarse de forma impredecible. No lo dejes sin conexión.

## Variante astable: hacer parpadear un LED

En modo **astable**, el 555 genera pulsos continuos. Se usan dos resistencias, `R1` y `R2`, y un condensador:

- `R1` entre Vcc y la patilla 7.
- `R2` entre la patilla 7 y la patilla 6.
- Condensador entre la patilla 6 y GND.
- La patilla 2 se une a la 6.

La frecuencia aproximada es:

**f = 1,44 / ((R1 + 2 × R2) × C)**

Con `R1 = 1 kΩ`, `R2 = 10 kΩ` y `C = 10 µF`:

- `f = 1,44 / ((1.000 + 20.000) × 0,00001) = 6,9 Hz`.

El LED parpadeará unas siete veces por segundo. Para un parpadeo lento, sube el condensador o las resistencias.

## Cuándo usar un 555 y cuándo no

El 555 es excelente para:

- Temporizadores sencillos.
- Parpadeos.
- Generar pulsos.
- Proyectos sin microcontrolador.

No es la mejor opción para:

- Tiempos muy precisos.
- Temporizadores de días.
- Circuitos de bajo consumo.
- Lógica compleja.

Para tiempos largos, un microcontrolador o un reloj dedicado es más práctico. Para aprender, el 555 enseña mucho con muy poco.

## Errores frecuentes

1. **Conectar el 555 al revés.** Revisa la muesca y la patilla 1.
2. **Dejar RESET flotando.** Únelo a Vcc.
3. **Poner el electrolítico al revés.** Puede dañarse o calentarse.
4. **Olvidar la resistencia del LED.** La salida puede sufrir.
5. **Usar un condensador con fugas.** El tiempo se alarga o el circuito se dispara solo.
6. **No poner pull-up en TRIG.** El pulsador deja la entrada flotando.
7. **Esperar un tiempo exacto con componentes baratos.** Ajusta midiendo.
8. **Alimentar con una tensión fuera del rango.** Revisa la ficha del 555.

## Preguntas frecuentes

### ¿Puedo usar 5 V en lugar de 9 V?

Sí, el NE555 funciona desde 4,5 V. Cambia la resistencia del LED para mantener una corriente segura. El tiempo no depende de la tensión de alimentación.

### ¿Por qué se dispara solo?

Puede ser ruido en `TRIG`, una resistencia de pull-up demasiado alta, un condensador con fugas o una masa mal conectada. Baja la resistencia de pull-up y revisa el cableado.

### ¿Cómo consigo un tiempo de una hora?

Con `R = 1 MΩ` y `C = 3.300 µF` sale un tiempo muy largo, pero la precisión y la estabilidad empeoran. Para una hora, usa un microcontrolador o un temporizador dedicado.

### ¿Puedo controlar un relé con el 555?

Sí, pero la bobina consume más de lo que conviene conectar directamente. Usa un transistor y un diodo de flyback. Tienes el cálculo en [el transistor como interruptor](/electronica-basica/24-transistor-como-interruptor/).

## Resumen

El 555 en modo monoestable genera un pulso de duración `T = 1,1 × R × C`. El pulsador dispara, el condensador carga y la salida se apaga al llegar al umbral. Con `100 kΩ` y `100 µF` obtienes unos 11 segundos.

Respeta el pinout, no dejes `RESET` flotando y calcula la resistencia del LED. Cuando lo tengas funcionando, prueba la variante astable: con dos resistencias más tendrás un parpadeo continuo.

## Sigue con

- [Condensadores: tipos y códigos](/electronica-basica/21-condensadores/) para elegir el condensador de tiempo.
- [Diodos: polaridad y comprobación](/electronica-basica/23-diodos-polaridad-comprobacion/) para proteger relés y bobinas.
- [El transistor como interruptor](/electronica-basica/24-transistor-como-interruptor/) para controlar cargas mayores.
- [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/) para calcular la resistencia de salida.
- [Semáforo con LEDs y temporizador](/electronica-basica/33-semaforo-leds-temporizador/) para combinar el 555 con un contador.
