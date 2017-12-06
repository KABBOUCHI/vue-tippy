export default {
  name: 'HelloJsx',
  data () {
    return {
      msg: 'Hello JSX'
    }
  },
  render (h) {
    return (
      <div>
        <h1 class={this.msg !== 'nope' ? 'hello__title' : ''}>{ this.msg }</h1>
      </div>
    )
  }
}
