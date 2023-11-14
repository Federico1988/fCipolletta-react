
# E-Commerce para Comision 60815 de Federico Cipolletta

Descripcion de componentes

| Componente | Descripcion |
| ----------- | ----------- |
| Navbar | NavBar con marca, categorias y cartwidget, setea la categria que muestra ItemListContainer |
| ItemListContainer | Muestra la lista de productos obtenida de la bd (Completa si no hay categoria definida, sino filtra por categoria)|
| ItemList | Muestra lista de Items que recibe por parametro|
| ItemDetailContainer | Muestra ItemDetail del producto, buscandolo en la bd y filtrado por id |
| ItemDetail | Muestra detalle de Item que recibe por parametro|
| CartWidget | Muestra un carrito SVG y un numero, que se actualiza segun la cantidad de productos agregados |
| ItemCount | Contador para el ItemDetail. Chequea cero y no pasarse del stock |


Navegabilidad: 
![Gif Navegabilidad PreEntrega2](https://github.com/Federico1988/fCipolletta-react/assets/26264807/99bdbd6f-0191-47e5-b36e-f551d9d22e50)
