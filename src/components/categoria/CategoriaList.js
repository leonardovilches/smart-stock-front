import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';

class CategoriaList extends Component {

  constructor(props) {
    super(props);
    this.state = {categorias: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/categorias')
      .then(response => response.json())
      .then(data => this.setState({categorias: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/categoria/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedCategorias = [...this.state.categorias].filter(i => i.id !== id);
      this.setState({categorias: updatedCategorias});
    });
  }

  render() {
    const {categorias, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const categoriaList = categorias.map(categoria => {
      //const address = `${categoria.address || ''} ${categoria.city || ''} ${categoria.stateOrProvince || ''}`;
      return <tr key={categoria.id}>
        <td style={{whiteSpace: 'nowrap'}}>{categoria.nome}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/categorias/" + categoria.id}>Editar</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(categoria.id)}>Deletar</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
            <Card body inverse style={{ backgroundColor: '#343a40', borderColor: '#343a40' }}>
                <CardHeader style={{ borderColor: '#D3D3D3' }} tag='h4'>
                    Categorias
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/categorias/new">Add Categoria</Button>
                    </div>
                </CardHeader>
                <CardBody>
                    <Table style={ {color: '#FFF'}}>
                        <thead>
                            <tr>
                                <th width="20%">Nome</th>
                                <th width="10%">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoriaList}
                        </tbody>
                    </Table>
                </CardBody>
                <CardFooter style={{ borderColor: '#D3D3D3' }} className="text-muted" tag='h6'>Paginas</CardFooter>
            </Card> 
        </Container>
      </div>
    );
  }
}

export default CategoriaList;