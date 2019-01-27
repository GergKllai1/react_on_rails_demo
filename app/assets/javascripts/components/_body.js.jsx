class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/items.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ items: data }) });
  }
  render() {
    return (
      <div>
        <NewItem />
        <AllItems items={this.state.items}/>
      </div>
    );
  }
}
