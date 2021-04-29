import React, { Fragment } from 'react'
import Card from '../components/Card/Card';
import '../estilo/List.css'
const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=9af0b419'



class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            buscarTerm: "",
            error: ""
        }
    }

    async componentDidMount() {
        const res = await fetch(`${API}&s=batman`)
        const dataJson = await res.json()
        this.setState({
            data: dataJson.Search, error: " ", buscarTerm: " "
        })

    }


    async handleSubmit(e) {
        e.preventDefault();
        if (!this.state.buscarTerm) {
            return this.setState({ error: "ingrese una busqueda" })
        }
        const res = await fetch(`${API}&s=${this.state.buscarTerm}`)
        const data = await res.json()

        if(!data.Search){
           return this.setState({error:"no existe el resultado"})
        }
        
        this.setState({
            data: data.Search, error:""
        })
    }

    render() {

        return (
            <Fragment >
                <div className="vista">
                    <div className="buscador">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input
                            className="entrada"
                                type="text"
                                placeholder="buscar"
                                onChange={e => this.setState({ buscarTerm: e.target.value })}
                                autoFocus
                                value={this.state.buscarTerm} />
                        </form>
                        <p>{this.state.error ? this.state.error : ""}</p>
                    </div>
                    
                    <div className="card">
                    {this.state.data.map((movie,i) => {
                        return <Card movie={movie} key={i} />
                    })}
                    </div>
                    
                </div>

            </Fragment>


        )

    }
}

export default List;