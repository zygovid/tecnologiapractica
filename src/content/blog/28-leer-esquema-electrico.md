---
title: "Cómo leer un esquema eléctrico: símbolos, referencias y conexiones"
description: "Aprende a interpretar un esquema eléctrico básico: símbolos, designadores, líneas, nudos, alimentación y contactos NO/NC sin perderte."
pubDate: 2026-11-17
category: "Fundamentos"
tags: ["esquema eléctrico", "símbolos", "circuito", "lectura", "conexiones"]
section: "electronica-basica"
cover: "../../assets/covers/28-leer-esquema-electrico.webp"
coverAlt: "Ilustración de un esquema eléctrico con resistencias, LED, transistor y etiquetas de referencia"
draft: false
---

Un **esquema eléctrico** es el mapa de un circuito. No muestra los componentes como son físicamente, sino cómo están conectados y qué función cumplen. Saber leerlo te permite montar un proyecto sin copiar cable por cable y detectar errores antes de encender.

Al principio parece un dibujo lleno de líneas. Con unas pocas reglas —símbolos, referencias, nudos y etiquetas— se vuelve bastante lógico. En esta guía verás cómo recorrerlo de izquierda a derecha, cómo distinguir una unión de un cruce y qué significan las etiquetas que más aparecen.

<figure>
  <img src="/images/diagrams/leer-esquema-electrico.svg" alt="Esquema eléctrico con símbolos de resistencia, LED, transistor, alimentación y masa" />
  <figcaption>Las líneas son conexiones; los nombres como R1, D1 o Q1 identifican cada componente. Un punto relleno indica unión.</figcaption>
</figure>

## Qué representa un esquema

Un esquema muestra **conexiones lógicas**, no la disposición física. Dos componentes pueden estar en extremos opuestos de una placa y aparecer juntos en el dibujo. Al revés, dos cables que se cruzan en el dibujo pueden no estar conectados.

La corriente convencional se representa saliendo del positivo y volviendo al negativo o masa. No hace falta seguirla electrón a electrón; basta con identificar caminos, entradas y salidas.

Un buen esquema incluye:

- Símbolos normalizados.
- Referencias únicas para cada componente.
- Valores o modelos.
- Etiquetas de alimentación y masa.
- Nombres de señales.
- Notas de polaridad cuando importa.

## Símbolos básicos

Estos son los que verás en casi cualquier montaje:

| Símbolo | Componente | Qué indica |
|---|---|---|
| Zigzag o rectángulo | Resistencia | Valor en ohmios |
| Dos líneas paralelas | Condensador | Valor en faradios; polaridad si es electrolítico |
| Triángulo con línea | Diodo | Ánodo y cátodo |
| Flechas salientes | LED | Diodo que emite luz |
| Tres patillas con flecha | Transistor | Base, colector, emisor o puerta, drenador, fuente |
| Círculo con bobina | Relé | Bobina y contactos |
| Línea con interruptor | Pulsador o interruptor | Contacto abierto o cerrado |
| `+5V`, `VCC`, `GND` | Alimentación | Nodo de tensión o referencia |

No memorices todos de golpe. Empieza por resistencia, LED, condensador, pulsador y transistor; son los que aparecen en los proyectos de esta sección.

## Referencias: R1, C2, Q1, D1

Los componentes llevan un **designador** y un número:

- `R` resistencia.
- `C` condensador.
- `D` diodo.
- `LED` o `D` para un LED.
- `Q` transistor.
- `U` circuito integrado.
- `SW` o `S` interruptor o pulsador.
- `K` relé.
- `J` conector.
- `F` fusible.

El número solo sirve para identificarlo. `R1` y `R2` pueden tener valores distintos; no asumas que son iguales. En una lista de materiales (BOM), cada referencia debe coincidir con el esquema.

## Líneas, nudos y cruces

Una línea es un conductor ideal. Para saber si dos líneas están conectadas:

- Un **punto relleno** en el cruce indica unión.
- Un cruce sin punto, normalmente, no es una unión.
- Un punto en forma de T suele indicar unión, aunque lo correcto es dibujar el punto.

No todas las convenciones son iguales. Si el esquema es antiguo o está mal dibujado, comprueba la lista de conexiones. En una protoboard, dos cables que se tocan no siempre hacen contacto; en el esquema, la unión debe estar clara.

## Alimentación y masa

Las etiquetas `VCC`, `+5V`, `+3V3`, `V+` y `GND` son **nodos globales**. No hace falta dibujar un cable desde cada punto de alimentación hasta la fuente: la etiqueta indica que están unidos.

Cuidado con:

- `GND` no siempre es tierra física; suele ser la referencia de 0 V.
- `VCC` puede ser 5 V, 3,3 V o 12 V según el circuito. No lo asumas.
- Dos etiquetas de masa con símbolos distintos pueden ser referencias separadas.
- En circuitos aislados, las masas no se unen.

Si un componente tiene una patilla a `GND` y otra a `+5V`, está alimentado entre 5 V y 0 V. Si solo tiene una etiqueta, revisa dónde cierra el circuito.

## Cómo recorrer un esquema

Un método que funciona:

1. Localiza la alimentación y la masa.
2. Identifica las entradas: pulsadores, sensores, conectores.
3. Sigue la señal desde la entrada hacia el procesamiento.
4. Localiza las salidas: LEDs, relés, motores, zumbadores.
5. Comprueba las resistencias limitadoras y los diodos de protección.
6. Revisa las polaridades de condensadores y LEDs.
7. Compara cada referencia con la lista de materiales.

No intentes entender todo a la vez. Divide el circuito en bloques: entrada, control, salida y alimentación.

## Contactos NO y NC

En un esquema, un contacto **NO** se dibuja abierto en reposo. Un contacto **NC** se dibuja cerrado. Al activar el componente, cambian de estado.

Esto importa en:

- Pulsadores de marcha y paro.
- Relés.
- Finales de carrera.
- Sistemas de seguridad.

Un contacto NC de emergencia se abre al pulsar. Si lo tratas como NO, el sistema hace lo contrario. Tienes más detalles en [pulsadores y pull-up/pull-down](/electronica-basica/22-pulsadores-pull-up-pull-down/).

## Polaridad de componentes

Algunos componentes funcionan igual en ambos sentidos; otros no:

- **Resistencia:** no tiene polaridad.
- **Condensador cerámico:** normalmente no tiene polaridad.
- **Condensador electrolítico:** tiene positivo y negativo.
- **Diodo y LED:** ánodo y cátodo.
- **Transistor:** patillas y tipo NPN/PNP o canal N/P.
- **Circuito integrado:** patilla 1 y orientación.

En el esquema, el condensador electrolítico suele llevar un `+` o una línea curva. El LED tiene el triángulo y la barra. El diodo también. Si no está claro, busca la ficha del componente.

## Ejemplo de lectura

Imagina un esquema con:

- Una entrada `+5V`.
- Un pulsador `SW1` entre `+5V` y una señal `START`.
- Una resistencia `R1` de 10 kΩ entre `START` y `GND`.
- Un LED `D1` con resistencia `R2` de 330 Ω desde `START` a `GND`.

La señal `START` está en nivel bajo mientras el pulsador está abierto, porque `R1` la lleva a GND. Al pulsar, `START` sube a 5 V y el LED se enciende. Es un pull-down con indicador visual.

Si en el esquema `R1` estuviera entre `START` y `+5V`, sería un pull-up: en reposo `START` estaría alto y al pulsar bajaría. El mismo dibujo, distinta conexión, comportamiento contrario.

## Esquema frente a diagrama de montaje

Un **esquema** muestra conexiones. Un **diagrama de montaje** muestra dónde va cada cosa físicamente. No son lo mismo.

Puedes tener un esquema correcto y un montaje desordenado. También puedes copiar un montaje sin entender el esquema y no saber por qué falla. Lo ideal es leer el esquema, montar por bloques y comprobar con el multímetro.

En una protoboard, las filas y los raíles introducen conexiones que no ves en el esquema. Revisa [protoboard paso a paso](/electronica-basica/19-protoboard/) para no crear puentes accidentales.

## Errores frecuentes

1. **Confundir un cruce con una unión.** Busca el punto.
2. **Asumir que VCC es 5 V.** Puede ser 3,3 V o 12 V.
3. **Ignorar la polaridad de un electrolítico.** Puede explotar o perder capacidad.
4. **No identificar el contacto NO/NC.** El circuito funciona al revés.
5. **Saltarse la lista de materiales.** Dos resistencias parecidas pueden tener valores distintos.
6. **Seguir la corriente por el camino equivocado.** Empieza por alimentación y masa.
7. **Copiar un esquema sin comprobar la ficha.** Un pinout puede cambiar entre encapsulados.

## Preguntas frecuentes

### ¿Hace falta saber dibujar esquemas?

No para empezar, pero ayuda. Si puedes dibujar un circuito simple, puedes explicarlo y revisarlo. Empieza copiando esquemas y corrigiendo los tuyos.

### ¿Qué significa una línea discontinua?

Puede indicar un conductor que no es un cable físico, una pantalla, una conexión opcional o una separación entre etapas. Depende de la convención del esquema. Busca la leyenda.

### ¿Cómo sé qué valor tiene un componente?

El esquema debe indicarlo junto al símbolo o en la lista de materiales. Si solo aparece `R1`, busca la tabla. No lo deduzcas por el tamaño.

### ¿Puedo leer un esquema de 230 V?

Puedes estudiarlo, pero no montarlo sin formación y medidas de seguridad. La lectura no elimina el riesgo eléctrico.

## Resumen

Leer un esquema es seguir conexiones, no adivinar. Identifica alimentación y masa, localiza entradas y salidas, respeta las referencias y comprueba polaridades. Un punto relleno une; un cruce sin punto normalmente no. Las etiquetas `VCC` y `GND` son nodos globales, no decoración.

Con estas reglas puedes convertir un dibujo en una lista de conexiones, montar por bloques y verificar cada paso. Es una habilidad que se practica: empieza con circuitos de cinco componentes y sube poco a poco.

## Sigue con

- [Cómo usar un multímetro digital](/electronica-basica/11-multimetro-digital/) para comprobar el montaje.
- [Código de colores de resistencias](/electronica-basica/12-codigo-colores-resistencias/) para identificar valores.
- [Ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/) para calcular los componentes del esquema.
- [Pulsadores y pull-up/pull-down](/electronica-basica/22-pulsadores-pull-up-pull-down/) para interpretar entradas.
- [Diodos: polaridad y comprobación](/electronica-basica/23-diodos-polaridad-comprobacion/) para no invertir el símbolo.
