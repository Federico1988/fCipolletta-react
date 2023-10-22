import { Center } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const { id } = useParams(); //Esto es category/:id

  const products = [{ id: "1", category: "1", name: "Partitura 1", description: "Esta es la primer partitura de la lista, gran obra para principiantes", stock: "330", price: "1000" },
  { id: "2", category: "1", name: "Partitura 2", description: "Esta es la segunda partitura de la lista, y es para estudiantes mas avanzados", stock: "210", price: "1200" },
  { id: "3", category: "2", name: "Audio de partitura 1", description: "Este audio es el audio de la partitura 1, a mitad de velodidad", stock: "330", price: "500" },
  { id: "4", category: "2", name: "Audio de partitura 2", description: "Este es el audio correspondiente a la segunda partitura, a 100% de velocidad", stock: "200", price: "1800" },
  { id: "6", category: "3", name: "Video super video", description: "Un Super video, con imagenes insipidoras y anecdoticas", stock: "20", price: "2200" },
  { id: "7", category: "3", name: "Otro super video", description: "Otro gran video, digno de ser visto", stock: "600", price: "2300" }
  ];

  /*   const showProducts = new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products)
        }, 3000)
      }
      else {
        reject("No hay productos en la lista");
      }
  
    });
  
    showProducts.then((result) => {
      console.log(result)
    })
      .catch((error) => {
        console.log(error);
      }) */

  console.log(id);
  const filteredProduct = id ? products.filter((product) => product.category == id) : products;
  console.log(filteredProduct);



  return (
    <>
      <Center p="1.5rem">
        <ItemList products={filteredProduct}></ItemList>
      </Center>
    </>
  )
}

export default ItemListContainer