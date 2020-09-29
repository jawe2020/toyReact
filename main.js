import { render, Component, createElement } from "./toyReact";

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2,
    };
  }
  render() {
    return (
      <div>
        <h1>my component</h1>
        <span>a: {this.state.a.toString()}</span>
        <span>b: {this.state.b.toString()}</span>
        <button
          onclick={() => {
            this.setState({ a: this.state.a + 1 });
          }}
        >
          Click to add
        </button>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="b">
    <div>abc</div>
    <div>123</div>
    <div>test</div>
  </MyComponent>,
  document.body
);
