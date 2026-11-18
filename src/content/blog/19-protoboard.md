---
title: "Protoboard paso a paso: cómo montar tu primer circuito sin soldar"
description: "Entiende cómo funcionan las conexiones internas de una protoboard y monta tu primer circuito con LED y resistencia sin soldar nada."
pubDate: 2026-11-12
category: "Montaje"
tags: ["protoboard", "breadboard", "primer circuito", "LED", "principiantes"]
section: "electronica-basica"
cover: "../../assets/covers/19-protoboard.webp"
coverAlt: "Ilustración de una protoboard con un LED, una resistencia y cables de colores"
draft: false
---

La **protoboard**, también llamada **breadboard**, es una placa con agujeros que permite montar circuitos sin soldar. Es la herramienta ideal para probar una idea, cambiar una resistencia o comprobar si un LED enciende antes de pasar a una placa definitiva.

Su aspecto engaña: por fuera solo ves agujeros, pero por dentro hay tiras metálicas que conectan unas filas con otras. Si no sabes cómo están unidas, es fácil montar algo que parece correcto y no funciona. Aquí tienes las conexiones internas, un primer circuito y una lista para localizar fallos.

<figure>
  <img src="/images/diagrams/protoboard.svg" alt="Esquema de una protoboard con filas conectadas, canal central y raíles de alimentación" />
  <figcaption>Las filas de cinco agujeros están conectadas por dentro; el canal central separa los dos lados.</figcaption>
</figure>

## Cómo está conectada por dentro

Una protoboard típica tiene tres zonas:

| Zona | Conexión interna | Uso |
|---|---|---|
| Filas centrales | Cinco agujeros seguidos, en horizontal | Componentes y cables de señal |
| Canal central | No conecta nada | Separa los dos lados; se usa para chips DIP |
| Raíles laterales | Una línea completa, normalmente marcada con + y − | Alimentación y masa |

La regla más importante: **cada fila de cinco agujeros es un único nodo**. Si metes dos patillas en la misma fila, quedan unidas. Por eso un LED no debe tener sus dos patillas en la misma fila: lo estarías cortocircuitando.

El **canal central** divide la placa en dos mitades. Los agujeros de la izquierda no se conectan con los de la derecha. Eso permite colocar un chip con patillas a ambos lados sin que se toquen entre sí.

Los **raíles** suelen recorrer toda la placa, pero no siempre. En muchas protoboards grandes el rail positivo y el negativo están partidos por la mitad. Si no estás seguro, compruébalo con el multímetro en continuidad.

## Materiales para el primer montaje

Para el circuito de esta guía necesitas:

- Una protoboard.
- Una fuente de **5 V** o una pila de 4,5–5 V. También sirve un portapilas USB.
- Un LED rojo de 5 mm.
- Una resistencia de **330 Ω**.
- Dos cables Dupont macho-macho o un par de cables rígidos.

No uses una fuente de más tensión para este primer montaje. Y no conectes nunca la red eléctrica a una protoboard: no está pensada para 230 V.

## Montar el LED paso a paso

1. **Coloca el LED.** Mete el ánodo (patilla larga) en una fila libre y el cátodo (patilla corta) en otra fila distinta. Si las patillas están cortadas, busca la franja plana del cuerpo: marca el cátodo.
2. **Coloca la resistencia.** Conecta un extremo a la misma fila del ánodo y el otro a una fila libre. La resistencia va en serie; el orden respecto al LED da igual.
3. **Lleva el positivo.** Conecta el rail de +5 V a la fila libre de la resistencia. Usa un cable rojo si puedes.
4. **Lleva la masa.** Conecta el rail de 0 V o GND a la fila del cátodo. Usa un cable negro.
5. **Revisa antes de encender.** Comprueba que el LED no está puenteado, que la resistencia está en serie y que + y − no se tocan.
6. **Enciende.** El LED debe iluminarse. Si no lo hace, apaga y revisa la lista de fallos.

Para entender por qué hace falta la resistencia, mira el cálculo en [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/). Si usas una fuente de 5 V y un LED rojo, 330 Ω es un valor seguro y habitual.

## Los raíles no siempre son continuos

Este es uno de los fallos más frustrantes. En una protoboard grande, los raíles de alimentación pueden estar divididos en dos mitades. Si conectas la fuente en el extremo izquierdo y el circuito en el derecho, puede que no llegue tensión.

La solución es rápida:

1. Pon el multímetro en **continuidad**.
2. Toca con una sonda un agujero del rail y con la otra el otro extremo.
3. Si no pita, el rail está partido.
4. Une las dos mitades con un cable del mismo color.

Haz esta prueba antes de dar por hecho que la placa está rota.

## Colocar chips y componentes

Los chips **DIP** se colocan atravesando el canal central: las patillas de un lado quedan en un lado y las del otro en el otro. Nunca los montes con todas las patillas en la misma mitad, porque unirías pines que no deben tocarse.

Para resistencias, condensadores y LEDs, cada patilla debe ir a una fila distinta. Si necesitas unir dos puntos, usa un cable corto entre sus filas. Evita cables largos y enredados: además de estorbar, aumentan las posibilidades de una conexión falsa.

## Buenas prácticas

- **Trabaja con la fuente apagada** mientras montas o cambias cables.
- **Usa colores:** rojo para positivo, negro para masa y otros colores para señales.
- **Cables cortos.** Un cable largo y doblado puede hacer mal contacto o engancharse.
- **Cambia una cosa a la vez.** Si mueves cinco cables y falla, no sabrás cuál fue.
- **No fuerces los componentes.** Las patillas gruesas abren los contactos y luego todo falla.
- **No alimentes motores o relés directamente desde la protoboard.** Usa una etapa de potencia.

## Lista para localizar fallos

Si el circuito no funciona:

1. **¿La fuente está encendida y da la tensión esperada?** Mídela en los raíles.
2. **¿Los raíles están unidos?** Comprueba continuidad de extremo a extremo.
3. **¿El LED está al revés?** Gíralo; no se estropea por invertirlo.
4. **¿La resistencia está en serie?** Si está en paralelo con el LED, no limita la corriente.
5. **¿Hay un cable en la fila equivocada?** Revisa fila por fila.
6. **¿Las patillas están bien metidas?** A veces una pata se queda fuera sin que se note.
7. **¿La resistencia es la correcta?** Mídela o comprueba el código de colores.
8. **¿El LED está quemado?** Prueba otro o compruébalo con el multímetro.

## Límites de la protoboard

La protoboard es para pruebas, no para un producto final. Sus contactos tienen resistencia y no están pensados para corrientes altas. Como referencia, no le pases varios amperios ni la uses para motores, calentadores o relés de potencia.

Tampoco es buena idea para circuitos de radiofrecuencia o señales muy rápidas: la capacidad parásita y los cables largos degradan la señal. Para eso necesitas una placa soldada.

Y, por supuesto, **nunca para 230 V**. Para trabajar con red eléctrica usa material homologado, caja, bornes y las precauciones adecuadas.

## Errores frecuentes

1. **Poner las dos patillas del LED en la misma fila.** Queda cortocircuitado y no enciende.
2. **Creer que todos los agujeros de una columna están unidos.** Las columnas no son nodos; las filas sí.
3. **No comprobar los raíles partidos.** La mitad de la placa se queda sin alimentación.
4. **Usar cables demasiado largos.** Aumentan el desorden y los falsos contactos.
5. **Conectar un motor a la protoboard.** Puede quemar los contactos o la fuente.
6. **Montar con la alimentación puesta.** Un cable suelto puede tocar otro punto y dañar algo.

## Preguntas frecuentes

### ¿Puedo usar una protoboard con 12 V?

Sí, para circuitos de baja tensión y poca corriente. Revisa que la fuente y los componentes lo admitan. No la uses para 230 V.

### ¿Cómo sé qué fila es cuál?

Las filas suelen estar numeradas o marcadas con letras en los bordes. Si no lo están, cuenta desde una esquina y mantén el mismo criterio.

### ¿Hace falta soldar algo?

No. La gracia de la protoboard es que puedes montar y desmontar sin soldadura. Cuando el circuito funcione, puedes pasarlo a una placa perforada o a un PCB.

## Resumen

La protoboard conecta **cinco agujeros por fila**, separa las dos mitades con el canal central y usa raíles para alimentación. Monta el LED con su resistencia en serie, revisa los raíles y no la uses para potencia.

Si algo falla, no cambies todo a la vez: comprueba tensión, continuidad, orientación del LED y colocación de cada patilla. Casi siempre el problema está en una fila equivocada o en un cable que no hace contacto.

## Sigue con

- [LED y resistencia limitadora](/electronica-basica/14-led-resistencia/) para calcular la resistencia.
- [Cables y conectores básicos](/electronica-basica/16-conectores-basicos/) para elegir los cables.
- [Pulsadores y pull-up/pull-down](/electronica-basica/22-pulsadores-pull-up-pull-down/) para añadir una entrada.
