import { render, Component, createElement } from "./toyReact";

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      a: 11111,
      b: 22222,
    };
  }
  render() {
    return (
      <div>
        <h1>my component</h1>
        <span>{this.state.a.toString()}</span>
        <span>{this.state.b.toString()}</span>
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
