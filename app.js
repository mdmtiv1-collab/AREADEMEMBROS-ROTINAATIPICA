// Dados Reais Extraídos das 4 Pastas do Google Drive do Usuário
const driveFolders = {
  atipicas: "https://drive.google.com/drive/folders/1hIv4SCld794Cq9XRKCVJphpAU2c2Xnq0",
  coordenacao: "https://drive.google.com/drive/folders/1qvTzUtes8XxlGeVeH5EWCzGVjX8yz3B9",
  percepcao: "https://drive.google.com/drive/folders/12uNgddHlA-ovE1yh2RsTJcuZjn75-Jgv",
  adaptadas: "https://drive.google.com/drive/folders/1gyzCgOjWzHHKBKjPt4HCczE0cnnZyuvj"
};

const materials = [
  // Módulo 1: Material Atípico Geral
  {
    id: 1,
    title: "Planner Autismo 2026",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Apostila",
    folder: "Autismo 🧩💙",
    foco: "Organização da rotina diária, controle de estímulos e acompanhamento pedagógico.",
    instrucoes: "Imprima as páginas de rotina semanal e utilize com os cartões visuais para estruturar a rotina do dia a dia.",
    url: driveFolders.atipicas
  },
  {
    id: 2,
    title: "Caderno de Atividades Autismo",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Apostila",
    folder: "Autismo 🧩💙",
    foco: "Estímulo de atenção, concentração, pareamento e cognição inicial.",
    instrucoes: "Selecione de 1 a 2 folhas por dia. Sempre apresente a atividade com instruções curtas e diretas.",
    url: driveFolders.atipicas
  },
  {
    id: 3,
    title: "Apostila de Autismo (Turminha-ABC)",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Leitura",
    folder: "Autismo 🧩💙",
    foco: "Introdução lúdica às letras, associação imagem-palavra e vogais.",
    instrucoes: "Utilize lápis de cor ou giz de cera grosso para facilitar a preensão manual durante as tarefas.",
    url: driveFolders.atipicas
  },
  {
    id: 4,
    title: "AEE Apostila Inclusão - Somos Todos Iguais",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Apostila",
    folder: "Autismo 🧩💙",
    foco: "Atendimento Educacional Especializado (AEE), socialização e tarefas adaptadas.",
    instrucoes: "Ideal para professores aplicarem em sala de aula inclusiva ou no contraturno escolar.",
    url: driveFolders.atipicas
  },
  {
    id: 5,
    title: "Arquivo Casinha da Leitura",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Leitura",
    folder: "Autismo 🧩💙",
    foco: "Formação de pequenas palavras, consciência fonológica e associação de sílabas.",
    instrucoes: "Recorte as fichas de palavras e monte a casinha interativa com a criança.",
    url: driveFolders.atipicas
  },
  {
    id: 6,
    title: "Atividades de Corte e Colagem",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Motora",
    folder: "Autismo 🧩💙",
    foco: "Coordenação motora fina, uso de tesoura sem ponta e precisão digital.",
    instrucoes: "Comece com linhas retas antes de avançar para os recortes curvos e figuras geométricas.",
    url: driveFolders.atipicas
  },
  {
    id: 7,
    title: "Atividades Formas Geométricas",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Jogo",
    folder: "Autismo 🧩💙",
    foco: "Reconhecimento de formas, diferenciação de cores e classificação visual.",
    instrucoes: "Peça para a criança identificar objetos parecidos ao redor da sala antes de pintar a folha.",
    url: driveFolders.atipicas
  },
  {
    id: 8,
    title: "Dominó Geométrico",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Jogo",
    folder: "Autismo 🧩💙",
    foco: "Raciocínio lógico, pareamento de peças e interação social entre pares.",
    instrucoes: "Recorte e plastifique as peças para maior durabilidade. Jogue em duplas.",
    url: driveFolders.atipicas
  },
  {
    id: 9,
    title: "Dominó Monetário",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Jogo",
    folder: "Autismo 🧩💙",
    foco: "Nossa moeda, noções de valores e matemática prática para a autonomia.",
    instrucoes: "Associe as notas impressas com compras simples do cotidiano para dar sentido prático.",
    url: driveFolders.atipicas
  },
  {
    id: 10,
    title: "Silabário Simples em PDF",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Leitura",
    folder: "Autismo 🧩💙",
    foco: "Consulta rápida de famílias silábicas para apoio no processo de escrita.",
    instrucoes: "Deixe o silabário sempre visível na mesa de estudos como apoio de consulta.",
    url: driveFolders.atipicas
  },
  {
    id: 11,
    title: "Conte uma História",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Leitura",
    folder: "Autismo 🧩💙",
    foco: "Expressão verbal, sequência temporal de fatos e imaginação.",
    instrucoes: "Mostre as gravuras em ordem e peça para a criança narrar o que acontece em cada cena.",
    url: driveFolders.atipicas
  },
  {
    id: 12,
    title: "Atividades TEA e Apoio Especial",
    module: "atipicas",
    moduleLabel: "Material Atípico",
    type: "Apostila",
    folder: "Autismo 🧩💙",
    foco: "Exercícios variados de atenção sustentada e raciocínio sequencial.",
    instrucoes: "Aplique em momentos do dia em que a criança esteja mais descansada e receptiva.",
    url: driveFolders.atipicas
  },

  // Módulo 2: Coordenação Motora
  {
    id: 13,
    title: "Atividades de Coordenação Motora Fina",
    module: "coordenacao",
    moduleLabel: "Coordenação Motora",
    type: "Motora",
    folder: "Coordenação",
    foco: "Tracejados, pré-escrita, labirintos de lápis e controle de força nas mãos.",
    instrucoes: "Oriente a criança a cobrir os pontilhados sem tirar o lápis do papel.",
    url: driveFolders.coordenacao
  },
  {
    id: 14,
    title: "Alfabeto Sensorial",
    module: "coordenacao",
    moduleLabel: "Coordenação Motora",
    type: "Motora",
    folder: "Coordenação",
    foco: "Memória muscular do traçado das letras através do tato e textura.",
    instrucoes: "Pode ser utilizado colando grãos, barbante ou massa de modelar sobre o traçado das letras.",
    url: driveFolders.coordenacao
  },
  {
    id: 15,
    title: "Minhas Tiras de Coordenação Motora",
    module: "coordenacao",
    moduleLabel: "Coordenação Motora",
    type: "Motora",
    folder: "Coordenação",
    foco: "Exercícios rápidos e em tiras individuais para treino de precisão digital.",
    instrucoes: "Corte em tiras e entregue uma por vez para evitar sobrecarga visual.",
    url: driveFolders.coordenacao
  },
  {
    id: 16,
    title: "Fichas de Leitura Interativa de A a Z",
    module: "coordenacao",
    moduleLabel: "Coordenação Motora",
    type: "Leitura",
    folder: "Coordenação",
    foco: "Reconhecimento das letras e treino de escrita associado com leitura.",
    instrucoes: "A criança lê a letra, aponta o objeto que começa com ela e faz o treino do movimento.",
    url: driveFolders.coordenacao
  },
  {
    id: 17,
    title: "Hora da Leitura",
    module: "coordenacao",
    moduleLabel: "Coordenação Motora",
    type: "Leitura",
    folder: "Coordenação",
    foco: "Pequenas frases para leitura guiada com apoio de ilustrações claras.",
    instrucoes: "Faça a leitura compartilhada: o adulto lê uma palavra e a criança lê a seguinte.",
    url: driveFolders.coordenacao
  },
  {
    id: 18,
    title: "Vamos Codificar!",
    module: "coordenacao",
    moduleLabel: "Coordenação Motora",
    type: "Jogo",
    folder: "Coordenação",
    foco: "Orientação espacial, associação de códigos/símbolos e raciocínio lógico.",
    instrucoes: "A criança deve seguir a sequência de setas/símbolos indicados na ficha para chegar ao objetivo.",
    url: driveFolders.coordenacao
  },

  // Módulo 3: Percepção Visual
  {
    id: 19,
    title: "Apostila de Percepção Visual e Raciocínio",
    module: "percepcao",
    moduleLabel: "Percepção Visual",
    type: "Apostila",
    folder: "Percepção visual",
    foco: "Discriminação de tamanhos, formas, orientação no espaço e figuras sobrepostas.",
    instrucoes: "Peça para a criança apontar com o dedo antes de usar o lápis para marcar.",
    url: driveFolders.percepcao
  },
  {
    id: 20,
    title: "Jogo das Sombras",
    module: "percepcao",
    moduleLabel: "Percepção Visual",
    type: "Jogo",
    folder: "Percepção visual",
    foco: "Pareamento entre imagem real e sua silhueta negra correspondente.",
    instrucoes: "Ligue cada objeto à sua sombra certa. Estimula atenção aos detalhes dos contornos.",
    url: driveFolders.percepcao
  },
  {
    id: 21,
    title: "Encontre o Erro",
    module: "percepcao",
    moduleLabel: "Percepção Visual",
    type: "Jogo",
    folder: "Percepção visual",
    foco: "Atenção sustentada, rastreio visual e comparação de detalhes minuciosos.",
    instrucoes: "Apresente duas figuras aparentemente iguais para encontrar as diferenças.",
    url: driveFolders.percepcao
  },
  {
    id: 22,
    title: "Jogo da Memória dos Animais",
    module: "percepcao",
    moduleLabel: "Percepção Visual",
    type: "Jogo",
    folder: "Percepção visual",
    foco: "Memória visual de curto prazo e fixação de vocabulário de animais.",
    instrucoes: "Recorte as cartas em pares e jogue virando 2 por vez.",
    url: driveFolders.percepcao
  },
  {
    id: 23,
    title: "Animais no Pregador",
    module: "percepcao",
    moduleLabel: "Percepção Visual",
    type: "Jogo",
    folder: "Percepção visual",
    foco: "Associação visual + movimento de pinça usando pregadores de roupa.",
    instrucoes: "A criança deve colocar o pregador de madeira exatamente na resposta correta da ficha.",
    url: driveFolders.percepcao
  },
  {
    id: 24,
    title: "Desenvolvimento da Percepção Sonora",
    module: "percepcao",
    moduleLabel: "Percepção Visual",
    type: "Leitura",
    folder: "Percepção visual",
    foco: "Associação de sons da natureza, animais e instrumentos com figuras visuais.",
    instrucoes: "Faça o som correspondente ou use áudios no celular e peça para a criança indicar a ficha.",
    url: driveFolders.percepcao
  },

  // Módulo 4: Apostilas Adaptadas
  {
    id: 25,
    title: "Atividades Adaptadas para Crianças com Autismo",
    module: "adaptadas",
    moduleLabel: "Apostilas Adaptadas",
    type: "Adaptado",
    folder: "Caderno adaptado",
    foco: "Caderno completo desenvolvido para atender as especificidades do espectro autista.",
    instrucoes: "Atividades com reduzida poluição visual e comandos diretos para minimizar distrações.",
    url: driveFolders.adaptadas
  },
  {
    id: 26,
    title: "Caderno de Atividades Adaptadas para TDAH",
    module: "adaptadas",
    moduleLabel: "Apostilas Adaptadas",
    type: "Adaptado",
    folder: "Caderno adaptado",
    foco: "Foco no Transtorno do Déficit de Atenção com Atividades Curtas e Dinâmicas.",
    instrucoes: "Divida as tarefas em blocos de 5 a 10 minutos para manter o foco elevado.",
    url: driveFolders.adaptadas
  },
  {
    id: 27,
    title: "Caderno Adaptado para Crianças com Dislexia",
    module: "adaptadas",
    moduleLabel: "Apostilas Adaptadas",
    type: "Adaptado",
    folder: "Caderno adaptado",
    foco: "Fonte e espaçamento adaptados para facilidade de leitura e diferenciação de letras espelhadas (b/d, p/q).",
    instrucoes: "Utilize uma régua ou marcador de linha para guiar o olhar durante a leitura.",
    url: driveFolders.adaptadas
  }
];

// State & DOM Elements
let currentModule = "all";
let currentSearch = "";
let currentType = "all";

const cardsGrid = document.getElementById("cards-grid");
const resultsCount = document.getElementById("results-count");
const searchInput = document.getElementById("search-input");
const typeSelect = document.getElementById("type-select");
const moduleButtons = document.querySelectorAll("#module-filters .filter-btn");

// Modal Elements
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalBadge = document.getElementById("modal-badge");
const modalFolder = document.getElementById("modal-folder");
const modalFoco = document.getElementById("modal-foco");
const modalInstrucoes = document.getElementById("modal-instrucoes");
const modalDownload = document.getElementById("modal-download");

// Render Function
function renderCards() {
  const filtered = materials.filter(item => {
    const matchModule = currentModule === "all" || item.module === currentModule;
    const matchType = currentType === "all" || item.type === currentType;
    const matchSearch = item.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                        item.foco.toLowerCase().includes(currentSearch.toLowerCase());
    return matchModule && matchType && matchSearch;
  });

  resultsCount.textContent = `Exibindo ${filtered.length} de ${materials.length} materiais`;

  cardsGrid.innerHTML = "";

  if (filtered.length === 0) {
    cardsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">
        <p style="font-size: 1.1rem; font-weight: 600;">Nenhum arquivo encontrado com esses filtros.</p>
        <p style="font-size: 0.9rem;">Tente limpar a busca ou selecionar outro módulo.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "activity-card";
    card.innerHTML = `
      <div class="card-top">
        <span class="card-badge badge-${item.module}">${item.moduleLabel}</span>
        <h4 class="card-title">${item.title}</h4>
        <span class="card-type">📄 Tipo: ${item.type}</span>
      </div>
      <div class="card-bottom">
        <button class="btn-card btn-secondary" onclick="openFicha(${item.id})">💡 Ver Ficha</button>
        <a href="${item.url}" target="_blank" class="btn-card btn-primary">⬇️ Baixar</a>
      </div>
    `;
    cardsGrid.appendChild(card);
  });
}

// Modal Functions
window.openFicha = function(id) {
  const item = materials.find(m => m.id === id);
  if (!item) return;

  modalTitle.textContent = item.title;
  modalBadge.textContent = item.moduleLabel;
  modalBadge.className = `modal-badge badge-${item.module}`;
  modalFolder.textContent = item.folder;
  modalFoco.textContent = item.foco;
  modalInstrucoes.textContent = item.instrucoes;
  modalDownload.href = item.url;

  modalOverlay.classList.add("active");
};

modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});

// Event Listeners
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderCards();
});

typeSelect.addEventListener("change", (e) => {
  currentType = e.target.value;
  renderCards();
});

moduleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    moduleButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentModule = btn.dataset.module;
    renderCards();
  });
});

// Initial Render
renderCards();
