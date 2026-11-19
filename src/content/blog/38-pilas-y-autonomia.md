---
title: "Pilas y autonomía en prototipos: elegir pack y calcular duración"
description: "Guía práctica para alimentar montajes con pilas: tipos comunes, packs en serie, caída de tensión, cálculo de autonomía y buenas prácticas."
pubDate: 2026-11-19
category: "Montaje"
tags: ["pilas", "baterías", "autonomía", "alimentación", "consumo"]
section: "electronica-basica"
cover: "../../assets/covers/38-pilas-y-autonomia.webp"
coverAlt: "Ilustración de cuatro pilas AA en serie con un cálculo de autonomía para un circuito de bajo consumo"
draft: false
---

Alimentar un prototipo con pilas lo hace portátil y lo aísla de fuentes de red, pero introduce dos retos: la **tensión baja con el uso** y la **autonomía limitada**. Un circuito que funciona perfecto con un cargador USB puede apagarse antes de tiempo o comportarse de forma errática con un pack de pilas si no has estimado el consumo y el margen de tensión.

En esta guía verás qué opciones son habituales en electrónica básica de baja tensión, cómo combinar pilas en serie, cómo estimar la duración y qué precauciones tomar. Todo el enfoque es para montajes de **5 V o 12 V** como los de esta sección, sin manipular celdas sueltas ni trabajar con la red eléctrica.

<figure>
  <img src="/images/diagrams/pilas-y-autonomia.svg" alt="Cuatro pilas AA en serie alimentando una carga con un ejemplo de cálculo de autonomía" />
  <figcaption>La autonomía teórica es capacidad dividida entre consumo, pero la tensión disponible cae a medida que las pilas se descargan.</figcaption>
</figure>

## Opciones habituales para prototipos

| Opción | Tensión aproximada | Ventajas | Limitaciones |
|---|---|---|---|
| 4 × AA alcalinas | ~6 V en serie | Fácil de conseguir, bajo coste | Tensión cae con carga y descarga |
| 4 × AA NiMH recargables | ~4,8 V en serie | Recargables, buen pico | Tensión nominal menor |
| 8 × AA | ~12 V en serie | Útil para relés o motores de 12 V | Más volumen y peso |
| Pila de 9 V | 9 V | Compacta | Poca capacidad, resistencia interna alta |
| Power bank USB | 5 V | Cómodo y recargable | Algunos se apagan con consumos muy bajos |

La tensión nominal no es constante. Una pila alcalina nueva puede dar algo más de 1,5 V en vacío, pero bajo carga y al descargarse baja. Por eso es importante medir **en carga** y no solo en vacío.

## Pilas en serie: sumar tensiones

Al conectar pilas en serie (positivo de una con negativo de la siguiente) se suman las tensiones:

- 4 × 1,5 V = 6 V nominales.
- 8 × 1,5 V = 12 V nominales.

La capacidad en mAh, en cambio, no aumenta por ponerlas en serie si son iguales: está limitada por la pila más débil del conjunto. Usa siempre pilas del mismo tipo, marca y estado de carga.

No es buena idea mezclar pilas nuevas con usadas ni tipos distintos en el mismo pack. Puede provocar desequilibrios, fugas o peor rendimiento.

## Calcular la autonomía aproximada

Una estimación sencilla es:

`Autonomía (h) ≈ Capacidad (mAh) / Consumo (mA)`

Ejemplo: un pack con capacidad útil equivalente a 2000 mAh alimentando un circuito que consume 100 mA:

`2000 / 100 = 20 horas` teóricas.

En la práctica será menos por varios motivos:
- La capacidad depende de la corriente de descarga.
- La tensión cae y el circuito puede dejar de funcionar antes de agotar la energía.
- Hay pérdidas en reguladores o convertidores si los usas.
- Los picos de consumo (motores, relés) reducen la duración efectiva.

Para estimar el consumo, suma las cargas y, cuando sea posible, mide con el multímetro como se explica en [cómo medir corriente con el multímetro](/electronica-basica/20-medir-corriente-multimetro/). Relaciona tensión, corriente y potencia con [ley de Ohm y potencia](/electronica-basica/17-ley-de-ohm/).

## Caída de tensión y regulación

Si tu circuito necesita 5 V estables, un pack de 6 V con pilas alcalinas puede bajar por debajo de lo necesario al descargarse o bajo picos. Opciones habituales:

- **Usar un regulador:** por ejemplo un [7805](/electronica-basica/35-regulador-7805/) si hay margen de entrada suficiente, teniendo en cuenta la disipación.
- **Usar un convertidor buck:** útil si partes de una tensión mayor y quieres eficiencia, como se ve en [módulo buck LM2596](/electronica-basica/36-modulo-buck-lm2596/).
- **Diseñar el circuito para un rango:** algunos montajes toleran variaciones, otros no.

No alimentes módulos de 3,3 V directamente desde un pack sin regulación adecuada. Un divisor de tensión no sirve para alimentar cargas variables; repasa [divisor de tensión y potenciómetros](/electronica-basica/25-divisor-tension-potenciometros/).

## Consumo en reposo y picos

Al calcular autonomía, diferencia entre:
- **Consumo medio:** lo que determina la duración en uso normal.
- **Picos:** arranque de motores, conmutación de relés, ráfagas de LEDs.

Los picos pueden provocar caídas momentáneas de tensión aunque la media sea baja. Si un relé o motor hace que el circuito se reinicie, considera una fuente con más margen, condensadores de desacoplo o alimentación separada para la parte de potencia, manteniendo masa común. Para cargas inductivas, revisa [relés y optoacopladores](/electronica-basica/27-reles-y-optoacopladores/).

## Buenas prácticas con pilas

- **Portapilas adecuado:** evita cables sueltos que hagan cortocircuito.
- **Polaridad clara:** marca positivo y negativo antes de conectar.
- **Interruptor en el positivo:** facilita cortar la alimentación sin desmontar.
- **Retira las pilas** si el montaje va a estar guardado mucho tiempo (riesgo de fugas en alcalinas).
- **No cargues pilas no recargables.**
- **Recicla** las pilas usadas en puntos adecuados.

Si usas packs o módulos recargables comerciales, sigue las instrucciones del fabricante y emplea cargadores apropiados. No intentes montar ni modificar packs de celdas sin el conocimiento y las protecciones necesarias.

## Medir antes de confiar

Antes de dar por bueno un montaje a pilas:

1. Mide la tensión del pack en vacío.
2. Conecta la carga y mide la tensión bajo funcionamiento.
3. Activa los elementos que más consumen (motor, relé) y observa si hay caídas.
4. Comprueba si el regulador o convertidor mantiene la salida.
5. Estima la autonomía con una prueba controlada si el proyecto lo requiere.

Una [protoboard bien alimentada](/electronica-basica/26-alimentar-protoboard/) y con masa común correcta evita muchos falsos problemas.

## Errores frecuentes

1. **Calcular autonomía solo con la capacidad nominal.** Ignora caídas de tensión y picos.
2. **Mezclar pilas nuevas y usadas.** Reduce rendimiento y puede ser inseguro.
3. **Usar una pila de 9 V para cargas medias.** Tiene poca capacidad y alta resistencia interna.
4. **No medir bajo carga.** En vacío puede parecer correcto y fallar al funcionar.
5. **Olvidar el consumo del regulador.** La conversión también tiene pérdidas.
6. **Hacer cortocircuitos accidentales con cables sueltos.** Las pilas pueden entregar mucha corriente.
7. **Dejar pilas dentro de montajes guardados.** Riesgo de fugas.
8. **Alimentar 3,3 V sin regulación desde un pack variable.** Puede dañar el módulo.

## Preguntas frecuentes

### ¿Puedo usar pilas recargables NiMH en lugar de alcalinas?

Sí, pero ten en cuenta que la tensión nominal por celda es menor (aprox. 1,2 V). Un pack de 4 NiMH da ~4,8 V, lo que puede no ser suficiente para un 7805 o para circuitos que exijan 5 V estables sin regulación adecuada.

### ¿Por qué mi circuito funciona al principio y luego falla?

Las pilas se descargan y su tensión baja, sobre todo bajo carga. Mide la tensión en el momento del fallo y compara con el mínimo que necesita tu circuito o regulador.

### ¿Es mejor una pila de 9 V o cuatro AA?

Para la mayoría de montajes de protoboard con consumo moderado, cuatro AA suelen ofrecer más capacidad y mejor comportamiento bajo carga que una pila de 9 V rectangular típica.

### ¿Puedo conectar pilas en paralelo para más autonomía?

Solo con precaución y pilas en el mismo estado de carga y tipo; de lo contrario pueden circular corrientes entre ellas. Para principiantes, es más sencillo usar un pack en serie adecuado o una solución comercial.

### ¿Cómo alimento algo que necesita 12 V y también lógica de 5 V?

Usa una fuente de 12 V para la parte de potencia y regula o convierte a 5 V para la lógica, con masa común cuando corresponda. Es el enfoque del [proyecto de fuente ajustable para protoboard](/electronica-basica/40-fuente-ajustable-protoboard/).

## Resumen

Alimentar con pilas exige pensar en **tensión bajo carga**, **consumo medio y picos** y **autonomía realista**. Elige un pack adecuado, evita mezclar pilas, calcula una estimación de duración y comprueba el comportamiento con el multímetro antes de confiar en el montaje.

Combinando pilas con una buena distribución en protoboard, regulación cuando haga falta y protecciones básicas, podrás hacer prototipos portátiles fiables en baja tensión.

## Sigue con

- [Cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) para masas y distribución.
- [Regulador lineal 7805](/electronica-basica/35-regulador-7805/) para estabilizar 5 V desde un pack.
- [Módulo buck LM2596](/electronica-basica/36-modulo-buck-lm2596/) para convertir con eficiencia.
- [Alimentación por USB para prototipos](/electronica-basica/37-alimentacion-usb-prototipos/) como alternativa con power bank.
- [Protecciones básicas de fuente](/electronica-basica/39-protecciones-fuente-diodo-fusible/) para evitar daños por errores.
