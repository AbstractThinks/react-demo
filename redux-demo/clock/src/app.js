import React, {Component}from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware,createStore } from 'redux'
// import Counter from './components/Counter'
import counter from './reducer';
import createLogger from 'redux-logger';

const store = createStore(
        counter,
        applyMiddleware(createLogger())
)

class Counter extends Component {


  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

const render = () => {
        ReactDOM.render(
                <Counter
                        value={store.getState()}
                        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                />,
                document.getElementById('root'));
}

render()
store.subscribe(render);
