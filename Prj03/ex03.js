var n1 = 1545.5

console.log(n1.toFixed(2))

console.log(n1.toFixed(2).replace('.',','))

console.log(n1.toLocaleString('pt-br', {style: 'currency',currency: 'BRL'}))

console.log(n1.toLocaleString('pt-br', {style: 'currency',currency: 'USD'}))
