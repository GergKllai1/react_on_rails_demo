class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }
  handleFormSubmit(name, description) {
    let body = JSON.stringify({
      item: { name: name, description: description }
    });
    fetch("http://localhost:3000/api/v1/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(item => {
        this.addNewItem(item);
      });
  }

  addNewItem(item) {
    this.setState({
      items: this.state.items.concat(item)
    });
  }

  componentDidMount() {
    fetch("/api/v1/items.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ items: data });
      });
  }
  render() {
    return (
      <div>
        <NewItem handleFormSubmit={this.handleFormSubmit} />
        <AllItems items={this.state.items} />
      </div>
    );
  }
}
