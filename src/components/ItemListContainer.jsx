import { Center, VStack, Box, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams, Link } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const { id } = useParams();


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