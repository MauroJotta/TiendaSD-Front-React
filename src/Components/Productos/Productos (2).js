import React from "react";
import '../../App.css';
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
            <div>
                <h1>Productos:</h1>  {
                    console.log("SETEADO", productos),
                    productos.body.productos.map((producto) => (
                        <ol key={producto.id} >
                            <h6>  PRODUCTO: {producto.name}  </h6>
                            <p >{producto.image_url}</p>
                            <img src={producto.image_url}></img>
                            <p>${producto.price}</p>
                            QUE VIENE SIENDO: {producto.description}
                            
                        </ol>
                    ))
                }
            </div>
        );
    }
}

export default Productos;