import { Center, VStack, Box, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const { id } = useParams(); //Esto es category/:id

  /*const products = [{ id: "1", category: "cat1", name: "Partitura 1", description: "Esta es la primer partitura de la lista, gran obra para principiantes", stock: 33, price: "1000" },
  { id: "2", category: "cat1", name: "Partitura 2", description: "Esta es la segunda partitura de la lista, y es para estudiantes mas avanzados", stock: 21, price: "1200" },
  { id: "3", category: "cat2", name: "Audio de partitura 1", description: "Este audio es el audio de la partitura 1, a mitad de velodidad", stock: 33, price: "500" },
  { id: "4", category: "cat2", name: "Audio de partitura 2", description: "Este es el audio correspondiente a la segunda partitura, a 100% de velocidad", stock: 10, price: "1800" },
  { id: "6", category: "cat3", name: "Video super video", description: "Un Super video, con imagenes insipidoras y anecdoticas", stock: 2, price: "2200" },
  { id: "7", category: "cat3", name: "Otro super video", description: "Otro gran video, digno de ser visto", stock: 60, price: "2300" }
  ];*/

  /*const showProducts = new Promise((resolve, reject) => {
   if (products.length > 0) {
     setTimeout(() => {
       resolve(products)
     }, 3000)
   }
   else {
     reject("No hay productos en la lista");
   }
 
 });*/

  //showProducts.then((result) => {
  //  console.log(result)
  //})
  //  .catch((error) => {
  //    console.log(error);
  //  });

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'estudios');
    getDocs(itemsCollection).then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setProductos(docs);
    });


}, [])


  const filteredProduct = id ? productos.filter((product) => product.category == id) : productos;
  //console.log(filteredProduct);

  return (
    <>
      <Box p="1.5rem" align='left' spacing='10'>
        <Text fontSize="30px" margin='20px'>Categoría: {setCategoryName(id)}</Text>
        <ItemList products={filteredProduct}></ItemList>
      </Box>
    </>
  )
}

function setCategoryName(categoryId) {
  switch (categoryId) {
    case undefined:
      return "Todos";
    case "cat1":
      return "Partituras";
    case "cat2":
      return "Audios";
    case "cat3":
      return "Videos";

  }
}

export default ItemListContainer