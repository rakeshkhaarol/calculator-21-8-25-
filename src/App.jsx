//import area
import React, { useReducer } from 'react'

export const CLEAR = 'CLEAR'
export const SUBTRACTION = 'SUBTRACTION'
export const ADDITION = 'ADDITION'
export const MULTIPLICATION = 'MULTIPLICATION'
export const DIVIDE = 'DIVIDE'
export const RESULT = 'RESULT'
export const NUMBER = 'NUMBER'


let oldState = {
  result: 0,
  leftValue: '',
  operator: '',
  rightValue: '',
}

let reducerFunction = (oldState, action) => {
  let newState = oldState
  console.log('oldState----->>>>', oldState)
  console.log('action----->>>>', action)
  console.log('action.type----->>>>', action.type)
  switch (action.type) {
    case CLEAR:
      // alert('clear')
      return {
        result: 0,
        leftValue: '',
        operator: '',
        rightValue: '',
      }
      break;
    case DIVIDE:
      alert('divide')
      break;
    case MULTIPLICATION:
      alert('multiplication')
      break;
    case ADDITION:
      // alert('addition')
      return {
        ...newState,
        operator: '+'
      }
      break;
    case SUBTRACTION:
      alert('SUBTRACTION')
      break
    case RESULT:
      // alert('result')
      switch (newState.operator) {
        case '+':
          return {
            ...newState,
            result: parseInt(newState.leftValue) + parseInt(newState.rightValue)
          }
          break;

        default:
          break;
      }
      break;
    case NUMBER:
      if (newState.operator === '') {
        return {
          ...newState,
          leftValue: newState.leftValue + action.payload
        }
      } else {
        return {
          ...newState,
          rightValue: newState.rightValue + action.payload
        }
      }
      break
    default:
      break;
  }

  return newState;
}
//definetion area
function App() {
  //hooks area
  const [newState, dispatch] = useReducer(reducerFunction, oldState)


  //function definetion area



  //return statment
  return (

    <>
      {console.log('newState ----->>>>', newState)}
      <div className="container">
        con
        <form action="" name="calc" className="calculator">
          <input
            type="text"
            className="value"

            value={newState.result === 0 ? newState.leftValue + newState.operator + newState.rightValue : newState.result}

            readOnly
            name="txt"
          />

          <span className="num clear" onClick={() => { dispatch({ type: CLEAR }) }}><i>C</i></span>
          <span className="num" onClick={() => { dispatch({ type: DIVIDE }) }}><i>/</i></span>
          <span className="num" onClick={() => { dispatch({ type: MULTIPLICATION }) }}><i>*</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 7 }) }}><i>7</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 8 }) }}><i>8</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 9 }) }}><i>9</i></span>
          <span className="num" onClick={() => { dispatch({ type: SUBTRACTION }) }}><i>-</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 4 }) }}><i>4</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 5 }) }}><i>5</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 6 }) }}><i>6</i></span>
          <span className="num plus" onClick={() => { dispatch({ type: ADDITION }) }}><i>+</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 1 }) }}><i>1</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 2 }) }}><i>2</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 3 }) }}><i>3</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: 0 }) }}><i>0</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: '00' }) }}><i>00</i></span>
          <span className="num" onClick={() => { dispatch({ type: NUMBER, payload: '.' }) }}><i>.</i></span>

          <span className="num equal" onClick={() => { dispatch({ type: RESULT }) }}><i>=</i></span>
        </form>
      </div>
    </>
  )
}

export default App