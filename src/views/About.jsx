import { ref } from '@vue/composition-api'

export default ({
  setup: () => {
    const count = ref(0)
    const handleClick = () => {
      count.value++
    }
    return () => (
      <div>
        <div>count: {count.value}</div>
        <button onClick={handleClick}>click me</button>
      </div>
    )
  }
})
