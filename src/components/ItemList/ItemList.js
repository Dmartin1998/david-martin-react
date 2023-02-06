
const ItemList = ({ productos }) => {

    return (
        <div className="container my-5">
            <h2>Nuestros Productos</h2>
            <hr />

            <section className="row my-4">
                {productos.map((prod =>
                    <div key={prod.id} className="col-4">
                        <h3>{prod.name}</h3>
                        <img  src={prod.image} />
                        <p>Desc. {prod.description}</p>
                        <p>Precio: U$D: {prod.price}</p>
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                ))}
            </section> 
        </div>
    )
}

export default ItemList