import { Center } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {

  
        const [productos, setProductos] = useState([]);
        useEffect(() => {
          const db = getFirestore();
          const itemsCollection = collection(db, 'estudios');
          getDocs(itemsCollection).then((snapshot) => {
              const docs = snapshot.docs.map((doc) => doc.data());
              setProductos(docs);
          });
      
    
    }, [])
    return (
      <>
        <Center p="1.5rem">
          <ItemDetail productos={productos}></ItemDetail>
        </Center>
      </>
    )

}
