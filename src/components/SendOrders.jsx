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
    return (<div style={{ textAlign: 'center', margin: '50px' }}>
        <h1 style={{ marginBottom: '20px' }}>Formulario de Contacto</h1>
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div style={{ marginBottom: '15px', width: '300px' }}>
                <label htmlFor="nombre" style={{ marginBottom: '5px', display: 'block' }}>
                    Nombre:
                </label>
                <input
                    type="text"
                    id="nombre"
                    placeholder="Ingrese el Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        boxSizing: 'border-box',
                    }}
                    required
                />
            </div>
            <div style={{ marginBottom: '15px', width: '300px' }}>
                <label htmlFor="email" style={{ marginBottom: '5px', display: 'block' }}>
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Ingrese el email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        boxSizing: 'border-box',
                    }}
                    required
                />
            </div>
            <div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        background: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Enviar
                </button>
            </div>
        </form>
    </div>
    )
}

export default SendOrders