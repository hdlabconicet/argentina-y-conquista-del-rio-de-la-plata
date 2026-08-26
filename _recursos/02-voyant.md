---
layout: page
title: Análisis textual automatizado
permalink: /voyant/
type: extras
description: Estadísticas textuales y visualizaciones del texto realizadas con Voyant Tools
icon: bar-chart
---

Exploración del contenido de _Argentina y conquista del Río de la Plata_ con [Voyant Tools](https://voyant-tools.org/), una herramienta de lectura distante y análisis estadístico de textos digitales.

Las siguientes secciones presentan cuadros interactivos. En cada panel, deslice el cursor sobre la esquina derecha de la barra superior para mostrar las opciones. El ícono <i class="fa-solid fa-question" style="color:#157fcc;"></i> permite acceder a una explicación de la herramienta usada en cada panel. El ícono <i class="fa-solid fa-toggle-on" style="color:#157fcc;"></i> permite modificar las opciones de la herramienta.

## Nube de palabras

Palabras más frecuentes del texto de Del Barco Centenera. Deslice el cursor sobre las palabras para ver la frecuencia en el texto.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Cirrus/?stopList=keywords-2339058d6c28812286931f32c078a742&whiteList=&corpus=99a0a29ec0de60e854040e228c32cd44'></iframe>

Deslice la barra de términos para aumentar o disminuir la cantidad de palabras en la nube.

## Contextos

Contexto enunciativo de las palabras más frecuentes del texto. Puede modificar por frecuencia ascendente o descendente.

<iframe class="py-3" src="https://service.sadilar.org/voyant/tool/Contexts/?stopList=keywords-2339058d6c28812286931f32c078a742&query=gente*&corpus=99a0a29ec0de60e854040e228c32cd44"></iframe>

Modifique el término a consultar desde el menú inferior izquierdo.

## Tendencias

Evolución de la frecuencia de los principales términos de _Argentina y conquista del Río de la Plata_.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Trends/?stopList=keywords-2339058d6c28812286931f32c078a742&query=gente&query=tierra&query=mal&query=indios&query=r%C3%ADo&mode=document&corpus=99a0a29ec0de60e854040e228c32cd44'></iframe>

## Grafo de colocaciones

Deslice el cursor sobre las palabras de este grafo de colocaciones para consultar la frecuencia de cada par de términos.

<iframe class="py-3" src='https://service.sadilar.org/voyant/tool/Links/?stopList=keywords-ab2f91f2bad47f05820a089108decfb0&query=don&query=diego&query=pedro&query=francisco&query=gabriel&query=mendoza&context=9&corpus=99a0a29ec0de60e854040e228c32cd44'></iframe>

<div class="py-4 mt-4"><p>Visite <a href="https://service.sadilar.org/voyant/?stopList=keywords-ab2f91f2bad47f05820a089108decfb0&panels=cirrus%2Creader%2Ctrends%2Csummary%2Ccontexts&corpus=99a0a29ec0de60e854040e228c32cd44" target="_blank">este link</a> para descubrir <i>Argentina y conquista del Río de la Plata</i> a la luz de otras herramientas ofrecidas por Voyant Tools: <a href="https://service.sadilar.org/voyant/tool/Bubbles/?stopList=keywords-ab2f91f2bad47f05820a089108decfb0&corpus=99a0a29ec0de60e854040e228c32cd44" target="_blank">burbujas de términos</a>, <a href="https://service.sadilar.org/voyant/tool/TextualArc/?stopList=keywords-ab2f91f2bad47f05820a089108decfb0&view=bubblelines&corpus=99a0a29ec0de60e854040e228c32cd44" target="_blank">arco textual</a> y muchas más.</p></div>
