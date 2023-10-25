function grahamScan(points) {
    if (points.length < 3) {
      return "O algoritmo de Graham requer pelo menos 3 pontos.";
    }
  
    function orientacao(p, q, r) {
      const val = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
      return val === 0 ? 0 : val > 0 ? 1 : 2;
    }
  
    // Encontre o ponto com a menor coordenada y (e mais à esquerda, em caso de empate)
    const pontoInicial = points.reduce((min, ponto) => {
      return ponto[1] < min[1] || (ponto[1] === min[1] && ponto[0] < min[0]) ? ponto : min;
    });
  
    // Classifique os pontos com base nas coordenadas polares em relação ao ponto inicial
    points.sort((p, q) => {
      const orient = orientacao(pontoInicial, p, q);
      if (orient === 0) {
        return distanciaQuadrada(pontoInicial, q) - distanciaQuadrada(pontoInicial, p);
      }
      return orient === 2 ? -1 : 1;
    });
  
    const pilha = [pontoInicial, points[0], points[1]];
  
    for (let i = 2; i < points.length; i++) {
      while (pilha.length > 1 && orientacao(pilha[pilha.length - 2], pilha[pilha.length - 1], points[i]) !== 2) {
        pilha.pop();
      }
      pilha.push(points[i]);
    }
  
    return pilha;
  }
  
  // Função auxiliar para calcular a distância quadrada entre dois pontos
  function distanciaQuadrada(p, q) {
    return (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2;
  }
  
  // Exemplo de uso:
  const pontos = [[0, 3], [1, 1], [2, 2], [4, 4], [0, 0], [1, 2], [3, 1], [3, 3]];
  const envoltorioConvexo = grahamScan(pontos);
  console.log("Envoltório Convexo:", envoltorioConvexo);