import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'fx-counter',
  styleUrl: 'fx-counter.less',
  shadow: true
})
export class Counter {
  @State() value: number = 1;

  handleChange(factor) {
    this.value = this.value + factor;
  }

  render() {
    return (<div>
      <button onClick={() => this.handleChange(1)}>+</button>
      <input type="text" value={this.value}/>
      <button onClick={() => this.handleChange(-1)}>-</button>
    </div>);
  }
}
