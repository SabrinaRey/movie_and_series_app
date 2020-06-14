- Solo tenes un warning en la consola. Eso nunca es casual, revela que le prestaste atencion a la consola y trataste de dejar el codigo lo mas prolijo posible. Ese tipo de detalles, a los que me tenes acostumbrada, te distinguen y resaltan tu trabajo siempre. 

- Tu pagina a nivel visual es correctisima, cumplis muy bien los requerimientos del diseño y lo haces con un codigo prolijo y elegante. Tu html es muy semántico, tu estilado no tiene cosas repetidas o innecesarias, en definitiva, maquetas mucho mejor de lo que pensás. 

- Tu codigo es facil de leer, todo se sigue logicamente y es claro como cada componente se relaciona con otro y como la logica se va entrelanzando. Felicitaciones por eso: muchas veces una está tan preocupada en que algo funcione que deja relegado un aspecto igual de importante, el de asegurarse de que otros puedan entender el código. 

- Veo que aplicas muchas cosas que te habia mencionado en trabajos anteriores y eso es muy bueno: aprendés con cada feedback y vas mejorando tu código cada vez. 

- Tu tabulado es mucho mejor de lo que es habitual en personas con tu experiencia, y eso es muy notable. Una sola excepcion es GlobalStyles, donde usas cuatro espacios en lugar de dos. Solo lo menciono para que tengas en cuenta, pero en general el tabulado es algo con lo que se sufre al comienzo y es muy bueno ver como fuiste mejorandolo en tus trabajos. 

- El substring "https://api.themoviedb.org/3/" se repite muchas, muchas veces a lo largo del codigo, y es logico ya que es la base de todas las url de nuestra api. Lo habitual y preferible en este caso es convertirla en una variable global. Por ejemplo en la carpeta /assets podemos hacer un archivo (lo usual es que se llame constants.js) y ahi asignarles una variable a estos strings que se usan siempre. Luego se lo exporta, y se lo importa en donde se necesite. 
Podemos hacer lo mismo con la Api key asi no tenemos que declarar la variable apiKey en cada componente donde se usa (como nota, cuando una variable es global como en ese caso, privilegiamos escribirla en ALL_CAPS)

Por ejemplo:


```js 
export const API_URL = "https://api.themoviedb.org/3/";
export const API_KEY = process.env.REACT_APP_API_KEY;
```

Y al usar la variable escribimos: 

```js
API URL + 'trending/movie/week?api_key=' + API_KEY 
```

- Dejo algunas observaciones minimas a lo largo del codigo para ir mejorando. 

- Excelente trabajo, Sabri! 

