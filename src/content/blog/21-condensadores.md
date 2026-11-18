---
title: "Condensadores: tipos, códigos y cómo comprobarlos"
description: "Aprende qué hace un condensador, cómo leer códigos como 104, distinguir los polarizados y comprobarlo con el multímetro."
pubDate: 2026-11-14
category: "Componentes"
tags: ["condensadores", "capacitancia", "electrolíticos", "multímetro", "componentes"]
section: "electronica-basica"
cover: "../../assets/covers/21-condensadores.webp"
coverAlt: "Ilustración de condensadores cerámicos y electrolíticos con el código 104"
draft: false
---

Un **condensador** almacena carga eléctrica durante un tiempo. En corriente continua se carga y, una vez lleno, deja de pasar corriente; en corriente alterna o ante un cambio rápido, se comporta de otra manera. Esa propiedad lo hace imprescindible para filtrar, desacoplar, temporizar y suavizar señales.

Su valor se mide en **faradios (F)**, una unidad enorme para la electrónica cotidiana. Por eso casi siempre verás **microfaradios (µF)**, **nanofaradios (nF)** o **picofaradios (pF)**. Y como muchos condensadores son pequeños, el valor va codificado con números.

<figure>
  <img src="/images/diagrams/condensadores.svg" alt="Tipos de condensadores y lectura del código 104 como 100 nanofaradios" />
  <figcaption>El código 104 significa 10 × 10⁴ pF, es decir, 100 nF o 0,1 µF.</figcaption>
</figure>

## Qué hace un condensador

Piensa en un depósito pequeño que se llena y se vacía. Al aplicar tensión, el condensador acumula carga; al quitar la fuente, puede devolverla al circuito. Cuanto mayor es su **capacidad**, más carga guarda para una misma tensión.

En un circuito puede cumplir varias funciones:

- **Desacoplar** una alimentación, absorbiendo ruido y cambios bruscos de corriente.
- **Filtrar** una señal, dejando pasar unas frecuencias y frenando otras.
- **Temporizar**, junto con una resistencia, mediante una constante de tiempo.
- **Acoplar** señales entre etapas, bloqueando la continua.
- **Suavizar** la salida de una fuente tras un rectificador.

No es lo mismo que una pila: un condensador se descarga muy rápido y no está pensado para entregar energía durante mucho tiempo.

## Unidades que hay que dominar

La conversión entre unidades es la principal fuente de errores:

- **1 F** = 1.000.000 µF.
- **1 µF** = 1.000 nF.
- **1 nF** = 1.000 pF.
- **1 µF** = 1.000.000 pF.

Un condensador de **100 nF** también se puede escribir como **0,1 µF**. Es el mismo valor. En esquemas antiguos verás **0,1 µF**; en componentes modernos, **104**.

## Tipos de condensadores

| Tipo | Polarizado | Valores típicos | Uso habitual |
|---|---|---|---|
| Cerámico | No | 1 pF – 1 µF | Desacoplo, filtros, alta frecuencia |
| De película | No | 1 nF – varios µF | Filtros, audio, temporización |
| Electrolítico | Sí | 1 µF – miles de µF | Filtrado de alimentación |
| De tantalio | Sí | 0,1 µF – decenas de µF | Desacoplo compacto |

Los **cerámicos** suelen ser pequeños, de color marrón o azul, y no tienen polaridad. Los **electrolíticos** son cilíndricos, con una franja que marca el negativo. Los **de tantalio** también son polarizados y, si se conectan al revés, pueden fallar de forma violenta. Respeta siempre la polaridad de estos dos últimos.

## Leer el código de 3 cifras

En muchos cerámicos verás un número de tres dígitos, como **104**, **103** o **223**. El código se interpreta en **picofaradios**:

- Las **dos primeras cifras** son el valor.
- La **tercera** es el número de ceros que se añaden.
- El resultado está en **pF**.

Ejemplos:

| Código | Cálculo | Resultado |
|---|---|---|
| 101 | 10 × 10¹ pF | 100 pF |
| 103 | 10 × 10³ pF | 10.000 pF = 10 nF |
| 104 | 10 × 10⁴ pF | 100.000 pF = 100 nF |
| 223 | 22 × 10³ pF | 22.000 pF = 22 nF |
| 474 | 47 × 10⁴ pF | 470.000 pF = 470 nF |

El código **104** es el más habitual: **100 nF**, también escrito **0,1 µF**. Se usa mucho como desacoplo junto a circuitos integrados.

A veces aparece una letra después del número, como **104K**. La letra indica la tolerancia: **J** = 5 %, **K** = 10 %, **M** = 20 %. La tensión máxima suele ir aparte, impresa en el cuerpo o en la ficha.

## Códigos en electrolíticos

En los electrolíticos no suele haber código de tres cifras. Verás el valor directamente, por ejemplo **470 µF**, y la tensión máxima, por ejemplo **25 V**. La franja clara o el símbolo **−** marca el terminal negativo.

Nunca conectes un electrolítico al revés. Puede calentarse, hincharse y, en el peor caso, reventar. Si el condensador está abombado por arriba o tiene fugas, no lo reutilices.

## Cómo comprobarlo con el multímetro

La forma directa es usar el modo **capacitancia (F)** si tu multímetro lo tiene:

1. **Desconecta la alimentación** y descarga el condensador.
2. **Sácalo del circuito** si puedes. En paralelo, otros componentes falsean la medida.
3. Pon el multímetro en **capacitancia**.
4. Conecta las sondas respetando la polaridad si es electrolítico.
5. Compara con el valor nominal y la tolerancia.

Si no tienes modo capacitancia, puedes hacer una prueba básica en **ohmios**:

- En un condensador descargado, el multímetro debe mostrar resistencia creciente mientras se carga.
- Si se queda en **0 Ω**, puede estar en corto.
- Si se queda en **OL** o infinito desde el principio, puede estar abierto.
- Esta prueba no da el valor exacto, solo una orientación.

Antes de medir, **descarga siempre** el condensador. En fuentes y equipos grandes puede quedarse cargado mucho tiempo después de apagar.

## La constante de tiempo RC

Cuando cargas un condensador a través de una resistencia, el tiempo depende de ambos. La constante de tiempo es:

**τ = R × C**

Con R en ohmios y C en faradios, τ sale en segundos. Tras **1 τ** el condensador ha alcanzado aproximadamente el **63 %** de la tensión; tras **5 τ**, cerca del **99 %**.

Ejemplo: R = 10 kΩ y C = 100 µF.

- τ = 10.000 × 0,0001 = **1 segundo**.
- En 5 segundos, el condensador está prácticamente cargado.

Ese principio se usa para temporizadores, antirrebote y filtros. Si cambias R o C, cambias el tiempo.

## Seguridad con condensadores grandes

Los condensadores de fuentes, flashes y variadores pueden almacenar energía peligrosa incluso desconectados. No los toques con las manos ni hagas puentes con destornilladores.

Para descargarlos, usa una **resistencia de descarga** adecuada entre sus terminales y espera. Después comprueba con el multímetro que la tensión es 0 V. Si no tienes experiencia con fuentes de red, no abras esos equipos.

## Errores frecuentes

1. **Confundir µF con nF.** Un factor de 1.000 cambia por completo el comportamiento.
2. **Leer 104 como 104 pF.** Son 100.000 pF, o sea, 100 nF.
3. **Invertir un electrolítico.** Puede hincharse o fallar.
4. **Usar un condensador por debajo de la tensión del circuito.** Mira siempre la tensión máxima.
5. **Medir dentro del circuito.** Otros componentes alteran la lectura.
6. **No descargarlo antes de tocarlo.** El riesgo aumenta con la capacidad y la tensión.
7. **Poner un cerámico donde hace falta uno electrolítico.** No todos los tipos sirven para lo mismo.

## Preguntas frecuentes

### ¿Puedo sustituir un condensador por otro de más capacidad?

A veces, pero no siempre. En filtros de alimentación suele ser aceptable dentro de un margen; en temporización cambia el tiempo; en filtros de audio puede alterar la respuesta. Respeta el tipo y la tensión.

### ¿Qué significa la tensión de 25 V?

Es la tensión máxima de trabajo. Un condensador de 25 V no debería usarse en un circuito de 30 V, aunque sea de la misma capacidad. Deja margen.

### ¿Cómo sé si un condensador está mal?

Visualmente, busca hinchazón, fugas o la parte superior abombada. Con el multímetro, un corto o una capacidad muy distinta del valor nominal son señales de fallo.

## Resumen

Un condensador guarda carga y se comporta de forma distinta según la frecuencia y el tiempo. Para leerlo, recuerda que el código de tres cifras está en **picofaradios**: **104 = 100 nF = 0,1 µF**.

Respeta la **polaridad** de electrolíticos y tantalio, comprueba la **tensión máxima** y descarga antes de medir. Con esas precauciones, es un componente sencillo de identificar y probar.

## Sigue con

- [Diodo, condensador y transistor con el multímetro](/electronica-basica/15-componentes-multimetro/) para las pruebas básicas.
- [Ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/) para entender la constante RC.
- [Protoboard paso a paso](/electronica-basica/19-protoboard/) para montar un filtro sencillo.
