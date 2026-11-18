---
title: "Relés y optoacopladores: controlar cargas con aislamiento"
description: "Cómo funciona un relé, cómo conectarlo con transistor y diodo de flyback, y cuándo usar un optoacoplador para separar circuitos."
pubDate: 2026-11-17
category: "Montaje"
tags: ["relé", "optoacoplador", "aislamiento", "flyback", "230V"]
section: "electronica-basica"
cover: "../../assets/covers/27-reles-y-optoacopladores.webp"
coverAlt: "Ilustración de un módulo relé y un optoacoplador separando control y carga"
draft: false
---

Un **relé** permite que una señal de baja tensión controle un circuito de mayor tensión o corriente. Un **optoacoplador** hace algo parecido, pero sin contactos móviles: transmite una señal con luz y mantiene ambos lados aislados eléctricamente.

Son componentes muy útiles y también muy fáciles de conectar mal. Un relé mal montado puede destruir el transistor que lo controla; un optoacoplador mal polarizado no conmuta. Y trabajar con 230 V sin aislamiento no es un experimento: es un riesgo serio.

<figure>
  <img src="/images/diagrams/reles-optoacopladores.svg" alt="Circuito de control de un relé con transistor y diodo de flyback, junto a un optoacoplador" />
  <figcaption>El transistor activa la bobina; el diodo absorbe el pico. En el optoacoplador, el LED interno ilumina un fototransistor sin conexión eléctrica.</figcaption>
</figure>

## Qué es un relé

Un relé electromecánico tiene dos partes:

- **Bobina:** se alimenta con una tensión y genera un campo magnético.
- **Contactos:** se mueven cuando la bobina se activa.

Los contactos pueden ser:

- **NO (normalmente abierto):** cerrados solo cuando la bobina está activa.
- **NC (normalmente cerrado):** abiertos cuando la bobina está activa.
- **COM:** común, el terminal que se conecta a uno u otro.

Un relé de un polo y dos posiciones permite elegir entre dos caminos. Un relé de potencia puede conmutar varios amperios, pero sus contactos tienen límites de tensión, corriente y tipo de carga. No todos los relés sirven para alterna, para continua o para motores.

## Por qué un relé necesita un transistor

La bobina de un relé consume más corriente de la que una salida de microcontrolador puede entregar. Por eso se usa un transistor como interruptor:

1. La señal de control llega a la base a través de una resistencia.
2. El emisor va a GND.
3. El colector se conecta a un extremo de la bobina.
4. El otro extremo de la bobina va a su alimentación.
5. Un diodo de flyback se coloca en paralelo con la bobina.

Si conectas la bobina directamente a la salida de la placa, puedes dañarla. Si olvidas el diodo, el pico inductivo puede destruir el transistor. Tienes el cálculo en [el transistor como interruptor](/electronica-basica/24-transistor-como-interruptor/).

## El diodo de flyback, bien colocado

El diodo va **en paralelo con la bobina**, no en serie. Su cátodo debe apuntar al positivo de la alimentación de la bobina. En funcionamiento normal no conduce; cuando el transistor se apaga, la bobina genera un pico y el diodo le ofrece un camino.

Si lo pones al revés, puede crear un cortocircuito al activar el relé. Si lo pones en serie, el relé no funcionará o caerá tensión innecesaria.

En un **módulo relé** comercial, el diodo y el transistor suelen estar incluidos. No los añadas por fuera sin mirar el esquema del módulo. Muchos módulos tienen además un optoacoplador y permiten alimentar la bobina con `JD-VCC` separado.

## Módulos relé: ventajas y trampas

Un módulo relé de 5 V para Arduino suele incluir:

- Relé y bornera de contactos.
- Transistor de excitación.
- Diodo de flyback.
- Optoacoplador en algunos modelos.
- LED indicador.

Ventajas: cableado sencillo y menos piezas. Trampas:

- Algunos módulos activan con nivel bajo, no alto.
- La entrada puede necesitar 5 V aunque la placa sea de 3,3 V.
- El jumper `VCC-JD-VCC` cambia la alimentación de la bobina.
- Los contactos no están pensados para cualquier carga.
- La separación no es total si compartes masa.

Lee la serigrafía y la ficha antes de conectar. "Módulo relé de 5 V" no significa que puedas meter 230 V sin precauciones.

## Contactos: corriente, tensión y tipo de carga

La etiqueta del relé suele indicar algo como `10 A 250 VAC / 10 A 30 VDC`. Ese valor no es universal:

- Una carga resistiva es más fácil de conmutar.
- Un motor tiene pico de arranque.
- Una lámpara incandescente tiene corriente de arranque alta.
- Una carga capacitiva puede generar un pico al conectar.
- La corriente alterna y la continua no se comportan igual.

Deja margen. Si el relé es de 10 A, no lo uses al límite con un motor. Y no conmutes 230 V en una protoboard.

## Seguridad con 230 V

Trabajar con la red eléctrica puede causar descargas, incendios y la muerte. Si no tienes formación y herramientas adecuadas, no lo hagas.

Reglas mínimas:

- No uses protoboard para 230 V.
- Usa un módulo con aislamiento, caja, borneras y distancia de aislamiento.
- Desconecta la alimentación antes de tocar.
- No confíes en el color de los cables.
- Comprueba ausencia de tensión con un instrumento adecuado.
- Usa una fuente de baja tensión para aprender.

Para los proyectos de esta web, quédate en **12 V o 24 V**. El relé puede conmutar una tira LED de 12 V o un motor pequeño. La parte de 230 V queda fuera del alcance de un montaje de aprendizaje.

## Qué es un optoacoplador

Un optoacoplador contiene un **LED infrarrojo** y un **fototransistor** en el mismo encapsulado. La señal eléctrica se convierte en luz, atraviesa un aislamiento y vuelve a convertirse en señal. No hay conexión eléctrica entre entrada y salida.

Se usa para:

- Aislar una señal de control de una etapa ruidosa.
- Evitar bucles de masa.
- Detectar una entrada con otra referencia.
- Proteger una placa de picos en el lado de potencia.

El **PC817** es un optoacoplador común. Su entrada es un LED: necesita una resistencia limitadora. La salida es un fototransistor, que puede configurarse con pull-up o pull-down.

## Cómo conectar un PC817

Lado de entrada:

1. Arduino o señal de control → resistencia de **220–1 kΩ** → ánodo del LED interno.
2. Cátodo del LED interno → GND del control.

Lado de salida:

1. Colector del fototransistor → resistencia de pull-up a Vcc.
2. Emisor → GND del lado de salida.
3. La señal se toma en el colector.

Cuando el LED interno se enciende, el fototransistor conduce y lleva el colector hacia GND. La señal de salida se invierte: entrada alta, salida baja. Si necesitas la lógica contraria, cambia la configuración.

Calcula la resistencia de entrada como cualquier LED. Para 5 V, 1,2 V de caída y 10 mA:

- `R = (5 − 1,2) / 0,010 = 380 Ω`.
- Un valor de **330 Ω** o **470 Ω** funciona.

No pongas el LED interno directo a 5 V. No conectes la salida a 230 V. El aislamiento tiene un límite de tensión que debes respetar.

## Relé frente a optoacoplador

| Característica | Relé | Optoacoplador |
|---|---|---|
| Aislamiento | Galvánico por contacto | Óptico |
| Velocidad | Lenta | Rápida |
| Desgaste | Contactos mecánicos | Sin partes móviles |
| Corriente de carga | Alta | Baja, requiere etapa extra |
| Ruido | Clic audible | Silencioso |
| Uso típico | Encender cargas | Aislar señales |

Un relé sirve para conmutar una carga. Un optoacoplador sirve para transmitir una señal. No son intercambiables sin más.

## Comprobación y pruebas

Antes de conectar la carga:

1. Alimenta solo la bobina y escucha o siente el clic.
2. Mide continuidad entre COM y NO con el relé activado y desactivado.
3. Comprueba que el diodo está bien orientado.
4. Mide la tensión de la bobina cuando la señal está activa.
5. Conecta una carga de prueba de baja tensión, como una lámpara de 12 V.
6. Solo después pasa a la carga real, si está dentro de tus conocimientos.

Para el optoacoplador, mide la caída en el LED de entrada y la tensión en el colector de salida. Si no cambia, revisa la resistencia y la polaridad.

## Errores frecuentes

1. **Conectar la bobina directamente a la placa.** La salida no soporta la corriente.
2. **Olvidar el diodo de flyback.** El transistor muere al desactivar.
3. **Poner el diodo al revés.** Puede hacer un corto.
4. **Usar un módulo de nivel bajo esperando nivel alto.** La lógica se invierte.
5. **No respetar la corriente de contacto.** El relé se pega o se quema.
6. **Trabajar con 230 V en protoboard.** Riesgo eléctrico grave.
7. **Creer que el optoacoplador aísla cualquier tensión.** Tiene límites.
8. **Compartir masa cuando necesitas aislamiento.** El aislamiento deja de servir.

## Preguntas frecuentes

### ¿Puedo controlar un relé de 12 V con una placa de 3,3 V?

Sí, con un transistor y una alimentación de 12 V para la bobina. La base se controla con 3,3 V y se unen las masas del control y del transistor. La bobina no se alimenta desde la placa.

### ¿Qué relé necesito para una lámpara de 230 V?

Uno con contactos y aislamiento adecuados, montado en una caja y con instalación segura. Para aprender, usa 12 V. La respuesta corta es: no lo improvises en una protoboard.

### ¿Un optoacoplador puede alimentar un motor?

No directamente. La salida es una señal pequeña. Necesitas un transistor, un MOSFET o un driver para la carga.

### ¿Por qué el módulo relé se activa al encender?

Algunos módulos activan con nivel bajo y la entrada queda flotante al arrancar. Añade una resistencia pull-up o pull-down según la lógica del módulo.

## Resumen

Un relé permite conmutar cargas, pero necesita un transistor, una resistencia de base y un diodo de flyback. Un optoacoplador aísla señales con luz y no sustituye a un relé. En ambos casos, respeta la polaridad, la corriente y los límites de aislamiento.

Para tus primeros proyectos, usa relés de **5 V o 12 V** con cargas de baja tensión. La red eléctrica queda para instalaciones certificadas y personas con experiencia. Aprender electrónica no requiere arriesgar la vida.

## Sigue con

- [El transistor como interruptor](/electronica-basica/24-transistor-como-interruptor/) para calcular la base y la saturación.
- [Diodos: polaridad y comprobación](/electronica-basica/23-diodos-polaridad-comprobacion/) para orientar el flyback.
- [Cómo alimentar una protoboard](/electronica-basica/26-alimentar-protoboard/) para separar control y carga.
- [Luz nocturna con LDR y relé](/electronica-basica/29-luz-nocturna-ldr-rele/) para montar un relé en un proyecto seguro.
