class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleFormSubmit(name, description) {
    console.log('form works!')
  };

  componentDidMount() {
    fetch('/api/v1/items.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ items: data }) });
  }
  render() {
    return (
      <div>
        <NewItem handleFormSubmit={this.handleFormSubmit}/>
        <AllItems items={this.state.items}/>
      </div>
    );
  }
}
