# 🧠 Juego de Memotest  
**Materia:** Prácticas Profesionalizantes I  
**Grupo:** ABZ  

**Integrantes:**  
- Maximiliano Aguilera  
- Tobías López Ramírez  
- Ezequiel Delipetro  
- Franco Hoyos  
- Federico Torres  
- Julián Sánchez  

---

## 📋 Descripción  
Este proyecto es un **juego de Memotest** desarrollado en **JavaScript**, como trabajo práctico de la materia **Prácticas Profesionalizantes I**.  
El objetivo del juego es encontrar las parejas de colores iguales antes que el otro jugador. Participan **dos jugadores** que se turnan para seleccionar fichas.

---

## 🕹️ Funcionamiento  
- Se genera un tablero con fichas de colores ocultas.  
- Cada color tiene su **par**, y las fichas se mezclan aleatoriamente al iniciar el juego.  
- En cada turno, el jugador puede **dar vuelta dos fichas**:
  - Si las fichas coinciden en color, el jugador suma un punto y mantiene el turno.
  - Si no coinciden, se vuelven a tapar y el turno pasa al otro jugador.  
- El juego finaliza cuando **uno de los jugadores alcanza 6 aciertos**.  
- Gana el jugador que **llega primero a los 6 aciertos**.

---

## ⚙️ Tecnologías utilizadas  
- **HTML5** — estructura de la página.  
- **CSS3** — estilos y diseño visual del tablero.  
- **JavaScript (ES6)** — lógica principal del juego.  
- **Lodash** — se utiliza la función `_.shuffle()` para mezclar aleatoriamente las fichas.  

---

## 🚀 Cómo jugar  
1. Abrir el archivo `index.html` en un navegador.  
2. Se mostrará el tablero del juego y los contadores de cada jugador.  
3. Hacer clic sobre las fichas para ir descubriéndolas.  
4. Jugar por turnos hasta que uno de los jugadores alcance los **6 aciertos**.  
5. Aparecerá un mensaje indicando el ganador y el juego se reiniciará automáticamente.  

---

## 💡 Detalles importantes  
- Cada ficha tiene un color asignado mediante un atributo `data-color`.  
- El código controla los turnos, los aciertos y evita que se seleccionen más de dos fichas a la vez.  
- El contador de cada jugador se actualiza automáticamente en pantalla.  
- El juego se reinicia automáticamente cuando un jugador gana.  

---

## 👩‍💻 Autores  
**Grupo ABZ**  
Integrantes:  
- Maximiliano Aguilera  
- Tobías López Ramírez  
- Ezequiel Delipetro  
- Franco Hoyos  
- Federico Torres  
- Julián Sánchez  

Trabajo práctico realizado para la materia *Prácticas Profesionalizantes I*.

---
