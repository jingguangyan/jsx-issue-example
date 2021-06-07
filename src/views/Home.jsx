export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    handleClick () {
      this.count++
    }
  },
  render () {
    return (
      <div class="home">
        <div>{this.count}</div>
        <a-button onClick={this.handleClick}>click me</a-button>
      </div>
    )
  }
}
