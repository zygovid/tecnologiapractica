---
title: "Cables y conectores básicos para proyectos: Dupont, JST, clemas y terminales"
description: "Compara los conectores más usados en proyectos de electrónica y aprende a elegir el correcto según cableado, corriente y resistencia."
pubDate: 2026-12-02
category: "Montaje"
tags: ["conectores", "cables", "dupont", "jst", "electrónica"]
section: "electronica-basica"
cover: "../../assets/covers/16-conectores-basicos.webp"
coverAlt: "Ilustración comparativa de conectores Dupont, JST, clema y terminal"
draft: false
---

Un mal conector puede arruinar un montaje que por lo demás está perfecto: cables que se sueltan, contactos que calientan o una batería conectada al revés. Elegir bien entre **Dupont**, **JST**, **clemas** y **terminales** no es cuestión de moda, sino de mirar corriente, espacio y cuántas veces vas a desconectar.

<figure>
  <img src="/images/diagrams/conectores-basicos.svg" alt="Comparativa visual de conectores Dupont, JST, clema de tornillo y terminal krimpado" />
  <figcaption>Dupont para pruebas, JST para baterías, clemas para bornes y terminales krimpados para uniones fijas.</figcaption>
</figure>

## Conector y terminal no son lo mismo

Un **conector** es la pareja de piezas que permite unir y separar dos cables o un cable y una placa: una parte macho y otra hembra. Un **terminal** es la pieza metálica que se coloca en el extremo del cable para que pueda enchufarse o atornillarse. En la práctica se usan juntos: pones un terminal krimpado al cable y ese terminal entra dentro de un conector. Un conector se desenchufa mil veces; el terminal se queda en el cable hasta que lo cortas.

## Criterios para elegir

Antes de comprar, responde a cinco preguntas:

1. **¿Cuánta corriente circula?** Una señal de sensor gasta poco; un motor o una tira LED pueden pedir varios amperios.
2. **¿Qué tensión hay?** Para baja tensión en proyectos caseros casi todo sirve, pero no mezcles conectores de 5 V con alimentación de red.
3. **¿Hay vibración o movimiento?** En un coche, un dron o una máquina, un Dupont se sale. Busca conectores con **retención** o tornillo.
4. **¿Vas a desconectar a menudo?** Si es así, prioriza un enchufe cómodo y deja espacio para los dedos.
5. **¿La polaridad es crítica?** Si invertir dos cables rompe algo, usa un conector con forma o llave que solo encaje en un sentido.

> **Consejo:** Cuando dudes entre dos tamaños, coge el más grande. Un conector algo sobredimensionado cuesta poco más y falla menos.

## Dupont: ideal para probar

Los conectores **Dupont** son esos pines de **2,54 mm** que ves en las placas de prototipado. Van en macho o hembra y se venden en tiras o ya montados en cables. Son baratos y perfectos para cambiar conexiones mientras pruebas.

Sus límites están claros: no tienen apenas retención y están pensados para **señales y corrientes bajas**, del orden de 1 A o menos. No los uses para alimentar un motor, ni dejes un cable Dupont colgando dentro de una caja que va a moverse.

## JST: el rey de las baterías

La familia **JST** agrupa conectores pequeños con enchufe y retención. Los más vistos en proyectos son **JST-PH de 2,0 mm** y **JST-XH de 2,5 mm**. Se ven en baterías Li-Ion y módulos que se desenchufan para cargar.

Su ventaja sobre el Dupont es que **encajan con un clic** y no se salen con una vibración suave. Además, el cuerpo tiene una forma que evita insertarlo al revés. Aguantan unos 1-3 A según modelo. Compra siempre macho y hembra de la misma serie: un PH no encaja en un XH aunque se parezcan.

## Clemas de tornillo

Una **clema** es un borne con un **tornillo** que prensa el cable. La más habitual en electrónica es la de **5,08 mm de paso**, montada en placa o sobre carril. Pelas, introduces, aprietas: solo necesitas un destornillador.

Son prácticas para bornes de alimentación y cajas que se abren a menudo. Admiten más corriente que un Dupont, típicamente **10-15 A** en las de tamaño corriente. El punto débil es el tornillo: con vibración puede aflojarse. En ese caso, usa una clema con muelle o asegura el cable con una arandela.

## Faston y terminales krimpados

El **Faston** es un terminal plano de **6,3 mm** (0,25") que se enchufa en una pestaña metálica. Lo ves en interruptores, relés, altavoces y fuentes. El **krimpado** consiste en prensar el metal del terminal alrededor del conductor con unas pinzas específicas. Bien hecho, el contacto es tan bueno que casi forma una sola pieza con el cable. No improvises con unos alicates normales: dejan un contacto flojo que se calienta.

## Cable: AWG y mm² sin líos

El grosor del cable se indica en **AWG** (American Wire Gauge) o en **mm²**. La regla que confunde a todos: en AWG, **cuanto menor es el número, más grueso es el cable**. Así, 24 AWG es fino y 16 AWG es mucho más robusto.

| Cable | Sección aproximada | Uso típico |
|---|---|---|
| 24 AWG | 0,2 mm² | Señales, Dupont, sensores |
| 22 AWG | 0,3 mm² | Cableado general de placa |
| 18 AWG | 0,8 mm² | Alimentación de varios A |
| 16 AWG | 1,3 mm² | Motores y tiras LED |

Cuanto más largo el cable, más grueso conviene: la resistencia del cobre hace perder tensión.

## Colores y polaridad

Por costumbre, el **rojo** marca el positivo y el **negro** el negativo o masa. En CC también verás marrón para positivo y azul para negativo. Es una ayuda, no una garantía.

Antes de cerrar una caja, comprueba con el **multímetro en continuidad** qué patilla del conector corresponde a cada cable. Busca además las marcas **+** y **−** grabadas en el plástico. Si el conector tiene una muesca o una forma especial, úsala: es la mejor protección contra un enchufe dado la vuelta.

## Crimpear o soldar

**Soldar** funde estaño para unir el cable a una superficie, típicamente una placa de circuito. Da un contacto excelente y es lo normal en PCB. **Crimpear** no funde nada: prensa el metal. Es lo correcto para terminales Faston, conectores JST y cualquier cable que vaya a sufrir vibración.

La soldadura puede agrietarse si el cable se mueve mucho; un buen crimpeado aguanta mejor el tirón. Como regla práctica: **suelda en la placa, crimpea en el cable**. Y recuerda tirar suavemente de cada unión antes de darla por terminada.

## Tabla comparativa

| Opción | Mejor para | Corriente orientativa | Ventaja | Límite |
|---|---|---|---|---|
| Dupont 2,54 mm | Prototipos y pruebas | ~1 A | Muy fácil de cambiar | Se sale con movimiento |
| JST PH / XH | Baterías y módulos | 1-3 A | Encaje con retención | Series distintas no encajan |
| Clema de tornillo | Bornes y cajas | 10-15 A | Se conecta con destornillador | El tornillo puede aflojarse |
| Faston 6,3 mm | Relés, interruptores | 10-20 A | Contacto firme y rápido | Necesita pinza de crimpado |

Estas cifras son orientativas: mira siempre la ficha del fabricante cuando la corriente sea importante.

## Errores frecuentes

1. **Usar Dupont para alimentar un motor.** Se calienta y se desconecta.
2. **Mezclar series JST.** PH y XH no son intercambiables aunque parezcan iguales.
3. **Pelar demasiado cable.** El cobre expuesto puede tocar el vecino y hacer un corte.
4. **Crimpear con alicates normales.** La unión queda floja y falla con el tiempo.
5. **Olvidar la retención.** Si algo va a vibrar, elige tornillo o conector con clic.

## Resumen

Elige el conector por el uso, no por costumbre. **Dupont** para probar sobre la mesa, **JST** para baterías y módulos que se desenchufan, **clemas** para bornes con tornillo y **Faston krimpado** para uniones firmes. Fíjate también en el grosor del cable: en AWG, **menos número significa más sección**.

Antes de cerrar el proyecto, revisa tres cosas: que el conector aguante la corriente, que la polaridad esté bien marcada y que cada cable resista un tirón suave. Con eso evitarás la mayoría de fallos de montaje.
