import React from "react";
import '../../App.css';
import { Link } from 'react-router-dom';

class Productos extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            productos: [],
            datosCargados: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
            "https://d5tbh7mth6.execute-api.us-east-1.amazonaws.com/getProducts")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    productos: json,
                    datosCargados: true
                    
                });
            })
    }
    render() {
        const { datosCargados, productos } = this.state;
        console.log("mensaje pa testing ", productos);
        if (!datosCargados) return <div>
            <h1> Cargando... </h1> </div>;

        return (
            <div className="container-fluid col-10">
            <div className="row">
                 {
                    productos.body.productos.map((producto) => (
                        <ol className="col-2 " key={producto.id} >
                            <section class="mx-auto my-5 tarjetaProducto" >

                                <div class="card">
                                    <div class="bg-image hover-overlay ripple sectionTarjeta" data-mdb-ripple-color="light">
                                        <img src={producto.image_url} class="img-fluid" />
                                        <a href="#!">
                                            <div class="mask maskTarjeta" ></div>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title font-weight-bold"><a>{producto.name}</a></h5>

                                        <p class="mb-2">${producto.price}</p>
                                        <p class="card-text">
                                            {producto.description}
                                        </p>
                                        <hr class="my-4" />
                                        
                                        
                                        <Link class="btn btn-link link-secondary p-md-1 mb-0" activeClassName="activeRouteHeader" to={`../producto/id/${producto.id}`}>Ver Producto</Link>
                                    </div>
                                </div>

                            </section>
                        </ol>
                    ))}
                </div>
            </div>
        );
    }
}

export default Productos;