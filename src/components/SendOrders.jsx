import React, { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const SendOrders = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(null);
    const db = getFirestore();
    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }
    const order = {
        nombre,
        email
    }
    const ordersCollection = collection(db, "Mi orden");
    return (
        <div>
            <h1>Formulario de Compra</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Ingrese el Nombre' onChange={(e) => setNombre(e.target.value)} />
                <input type="email" placeholder='Ingrese el email' onChange={(e) => setEmail(e.target.value)} />
                <button type='sumbit'>Enviar</button>
            </form>
        </div>
    )
}

export default SendOrders