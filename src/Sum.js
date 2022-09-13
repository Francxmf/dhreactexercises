export function Sum({numbers}) {
    let value = 0
    numbers.forEach(num => {
        value += num
    });
  return <h1>Array inputs sum result: {value}</h1>;
}