function grahamScan(pontos) {
    // Encontra o ponto com menor coordenada y
    const pontoInicial = pontos.reduce((a, b) => a.y < b.y ? a : b);
  
    // Ordena os pontos restantes em ordem anti-horária em relação ao ponto inicial
    const pontosOrdenados = pontos.filter((ponto) => ponto !== pontoInicial).sort((a, b) => {
      const angulo = Math.atan2(b.y - pontoInicial.y, b.x - pontoInicial.x) - Math.atan2(a.y - pontoInicial.y, a.x - pontoInicial.x);
      if (angulo < 0) {
        return -1;
      } else if (angulo > 0) {
        return 1;
      } else {
        return b.x - a.x;
      }
    });
  
    // Cria uma pilha vazia
    const pilha = [];
  
    // Adiciona os três primeiros pontos à pilha
    pilha.push(pontoInicial);
    pilha.push(pontosOrdenados[0]);
    pilha.push(pontosOrdenados[1]);
  
    // Percorre os pontos restantes
    for (let i = 2; i < pontos.length; i++) {
      // Enquanto o próximo ponto não fizer um giro à esquerda em relação aos dois pontos anteriores, remova o ponto superior da pilha
      while (pilha.length >= 2 && pontosOrdenados[i].getTurn(pilha[pilha.length - 2], pilha[pilha.length - 1]) <= 0) {
        pilha.pop();
      }
  
      // Adiciona o ponto atual à pilha
      pilha.push(pontosOrdenados[i]);
    }
  
    // Retorna a pilha com os pontos da convex hull
    return pilha;
  }
  
  // Exemplo de uso
  const pontos = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
  ];
  
  const convexHull = grahamScan(pontos);
  
  console.log(convexHull); // [ { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: -1, y: 0 } ]