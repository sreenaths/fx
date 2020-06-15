import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fx-counter',
  styleUrl: 'fx-counter.less',
  shadow: true
})
export class Counter {
  @Prop({ mutable: true }) values: Array<number> = [];

  handleChange(factor) {
    if(factor == 1) {
      this.values = [
        ...this.values,
        this.values.length
      ];
    } else {
      this.values = this.values.slice(0, -1);
    }
  }

  render() {
    return (<div>
      <button onClick={() => this.handleChange(1)}>+</button>
      <button onClick={() => this.handleChange(-1)}>-</button>
      {this.values.join(",")}
    </div>);
  }
}
