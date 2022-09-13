export function Sum({numbers}) {
    let value = 0
    numbers.forEach(num => {
        value += num
    });
  return <h1>Array inputs sum result: {value}</h1>;
}

Sum.defaultProps = {
    numbers: [23, 23, 23]
}