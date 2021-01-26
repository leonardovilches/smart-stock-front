import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../AppNavbar';

class CategoriaEdit extends Component {

  emptyItem = {
    name: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const categoria = await (await fetch(`/categorias/${this.props.match.params.id}`)).json();
      this.setState({item: categoria});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/categoria' + (item.id ? '/' + item.id : ''), {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/categorias');
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Editar Categoria' : 'Nova Categoria'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        <Form onSubmit={this.handleSubmit}>
           <Card body inverse style={{ backgroundColor: '#343a40', borderColor: '#343a40' }}>
                <CardHeader style={{ borderColor: '#D3D3D3' }} tag='h4'>{title}</CardHeader>
                <CardBody>
                    <FormGroup className="col-md-6 mb-3">
                        <Label for="nome">Nome</Label>
                        <Input type="text" name="nome" id="nome" value={item.nome || ''}
                            onChange={this.handleChange} autoComplete="nome"/>
                    </FormGroup>
                    <FormGroup className="col-md-6 mb-3"> 
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/categorias">Cancel</Button>
                    </FormGroup>
                </CardBody>
            </Card>          
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(CategoriaEdit);