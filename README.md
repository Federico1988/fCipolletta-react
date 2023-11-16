
# E-Commerce para Comision 60815 de Federico Cipolletta

Descripcion de componentes

| Componente | Descripcion |
| ----------- | ----------- |
| Navbar | NavBar con marca, categorias y cartwidget, setea la categria que muestra ItemListContainer |
| Item | Es el producto, con boton de ver detalle |
| Itemdetail | Es el producto, con detalles y botones de + - , y el contador para agregar al carrito |
| ItemCount | Contador para el ItemDetail. Chequea cero y no pasarse del stock |
| ItemListContainer | Muestra la lista de productos obtenida de la bd (Completa si no hay categoria definida, sino filtra por categoria)| por categoria)|
| ItemList | Muestra lista de Items que recibe por parametro|
| ItemDetailContainer | Muestra ItemDetail del producto, buscandolo en la bd y filtrado por id |
| ItemDetail | Muestra detalle de Item que recibe por parametro|
| CartWidget | Muestra un carrito SVG y un numero, que se actualiza segun la cantidad de productos agregados |
| Cart | Muestra el listado de compras, y el formulario. Sube el pedido a la base de datos (nombre, mail y lista de ids y cantidades de productos) |
| CartItem | Es el card que muestra el producto ya agregado al carrito, con la cantidad y el boton para eliminar |


Navegabilidad: 
![Gif Navegabilidad](https://github.com/Federico1988/fCipolletta-react/assets/26264807/99bdbd6f-0191-47e5-b36e-f551d9d22e50)
