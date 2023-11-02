import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const Collections = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'partituras');
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProductos(docs);
        });


    }, [])

    return (
        productos.map((p) => (
            <div>
                producto:{p.nombre}
                precio:{p.precio}
                categoria:{p.categoria}
            </div>
        ))

    )
}

export default Collections