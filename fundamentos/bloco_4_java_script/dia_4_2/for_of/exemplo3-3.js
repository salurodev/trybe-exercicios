//Por fim, com o for/of, nós conseguimos somar um valor a cada elemento do array e retorná-los da seguinte forma:



let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31