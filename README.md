
# E-Commerce para Comision 60815 de Federico Cipolletta

Descripcion de componentes

| Componente | Descripcion |
| ----------- | ----------- |
| Navbar | NavBar con marca, categorias y cartwidget, setea la categria que muestra ItemListContainer |
| ItemListContainer | Muestra la lista de productos (Completa si no hay categoria definida, sino filtra por categoria)|
| ItemList | Muestra lista de Items que recibe por parametro|
| ItemDetailContainer | Muestra ItemDetail del producto, filtrado por id |
| ItemDetail | Muestra detalle de Item que recibe por parametro|
| CartWidget | Muestra un carrito SVG y un numero |
| ItemCount | Contador para el ItemDetail. Chequea cero y no pasarse del stock |
