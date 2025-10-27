# Carta Restaurante

![Captura-carta](./public/Captura_ejemplo.png)

Proyecto sobre una carta de restaurante mediante conexión via API.

## API
La conexción con la API facilitada en el enunciado se hace mediante el fichero **`api.js`**. 

## Componentes empleados
En el proyecto se un total de 2 componentes *(padre e hijo)* que se emplearán en **`App.jsx`**.

### MenuItem
En este componente representa cada **'tarjeta'** de la carta correpondiente a cada plato. Simplemente se definen la imagen, descripción, categoría (por lo pronto única) y precio.

Este sería el componente **'hijo'** ya que será empleado en otro componente fuera de **`App.jsx`**

### MenuList
En este componente vamos a iterar sobre cada producto que se encuentra en la API. Se compone de una cabecera y de un contador que 'mide' la longitud del json.

Seguidamente recorremos ese json con un **'map'** y dentro de este se empleará el componente **'hijo'** (por lo que el componente de esta sección es el **'padre'**). El resultado sería una **'tarjeta'** con cada elemento recibido de la API. 

## App.jsx
Este es el fichero principal de la aplicación.

En el llamamos a la API mediante useEffect. Con un **'map'** se define el nombre de cada variable para las claves del json. A continuación se configura el error y el spinner de carga.

Una vez definida esta estructura se procede a construir el html clásico en dónde llamamos a las funciones de error/éxito y al componente **padre** anterior. 
