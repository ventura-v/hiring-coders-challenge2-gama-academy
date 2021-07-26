import React from "react";

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        const { id, picture, name, description, price } = props.location.state.product;
        this.state = {
        id, 
        picture, 
        name, 
        description, 
        price
        };
    }

    update = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.picture === "" || this.state.description === "" || this.state.price === "") {
        alert("Todos os campos são obrigatórios!");
        return;
        }
        this.props.updateProduct(this.state);
        this.setState({ name: "", picture: "", description: "", price: "" });
        this.props.history.push("/");
    };
    render() {
        return (
        <div className="edit-container">
            <h1>Editar Produto</h1>
            <form className="edit-form" onSubmit={this.update}>
                <div className="field">
                    <label>Nome do Produto</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Nome do produto"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Descrição do Produto</label>
                    <input
                    type="text"
                    name="description"
                    placeholder="Descrição do produto"
                    value={this.state.description}
                    onChange={(e) => this.setState({ description: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Imagem do Produto</label>
                    <input
                    type="text"
                    name="picture"
                    placeholder="Imagem do produto"
                    value={this.state.picture}
                    onChange={(e) => this.setState({ picture: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Preço do Produto</label>
                    <input
                    type="number"
                    name="price"
                    placeholder="Preço do produto"
                    value={this.state.price}
                    onChange={(e) => this.setState({ price: e.target.value })}
                    />
                </div>
                <button className="btn-update">Atualizar Produto</button>
            </form>
        </div>
        );
    }
}

export default EditProduct;
