import { render, Component, createElement } from "./toyReact";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>my component</h1>
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
