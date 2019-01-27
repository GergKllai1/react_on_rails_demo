class AllItems extends React.Component {
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
    const items = this.state.items.map(item => {
      return (
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      );
    });

    return <div>{items}</div>;
  }
}
