export function Sum({numbers}) {
    let value = 0
    numbers.forEach(num => {
        value += num
    });
  return <div>
  <h2>Array inputs sum result:</h2>
  <h1> {value} </h1>
  </div>
}

Sum.defaultProps = {
    numbers: [23, 23, 23]
}