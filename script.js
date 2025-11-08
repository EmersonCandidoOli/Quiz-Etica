const quizData = [
  {
    question: "1. O que significa agir com ética?",
    a: "Seguir regras apenas quando convém",
    b: "Agir de acordo com princípios morais e respeito aos outros",
    c: "Evitar punições",
    d: "Fazer o que todos fazem",
    correct: "b",
  },
  {
    question: "2. Qual das atitudes abaixo é antiética no ambiente de trabalho?",
    a: "Cumprir horários",
    b: "Trabalhar em equipe",
    c: "Falar mal de colegas pelas costas",
    d: "Ser respeitoso",
    correct: "c",
  },
  {
    question: "3. O que caracteriza uma conduta antiética?",
    a: "Ser justo e responsável",
    b: "Agir com empatia",
    c: "Mentir ou manipular para benefício próprio",
    d: "Cumprir suas obrigações",
    correct: "c",
  },
  {
    question: "4. Ser ético significa:",
    a: "Respeitar apenas as leis",
    b: "Seguir princípios morais mesmo sem vigilância",
    c: "Fazer o mínimo possível",
    d: "Evitar qualquer tipo de regra",
    correct: "b",
  },
  {
    question: "5. Qual das opções é um exemplo de comportamento ético?",
    a: "Assumir erros e buscar corrigi-los",
    b: "Ocultar falhas para não ser punido",
    c: "Aproveitar-se de colegas",
    d: "Desrespeitar superiores",
    correct: "a",
  },
  {
    question: "6. Um aluno que cola na prova está tendo uma atitude:",
    a: "Ética",
    b: "Honesta",
    c: "Responsável",
    d: "Antiética",
    correct: "d",
  },
  {
    question: "7. A ética profissional está relacionada a:",
    a: "Como a pessoa se veste",
    b: "Cumprir prazos, respeitar regras e agir corretamente",
    c: "Ser amigo do chefe",
    d: "Evitar responsabilidades",
    correct: "b",
  },
  {
    question: "8. Qual atitude demonstra falta de ética?",
    a: "Respeitar opiniões diferentes",
    b: "Usar recursos da empresa para fins pessoais",
    c: "Cumprir metas com dedicação",
    d: "Ajudar colegas em dificuldades",
    correct: "b",
  },
  {
    question: "9. A honestidade é um valor ético porque:",
    a: "Garante confiança e respeito mútuo",
    b: "Atrapalha o sucesso individual",
    c: "É uma regra imposta",
    d: "Evita o diálogo",
    correct: "a",
  },
  {
    question: "10. Qual das opções representa uma decisão ética?",
    a: "Ser justo mesmo quando ninguém está olhando",
    b: "Agir conforme a conveniência",
    c: "Pensar apenas no benefício próprio",
    d: "Ignorar regras e normas",
    correct: "a",
  }
];

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  resetButtons();
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  document.getElementById("a").textContent = q.a;
  document.getElementById("b").textContent = q.b;
  document.getElementById("c").textContent = q.c;
  document.getElementById("d").textContent = q.d;
}

function resetButtons() {
  answerButtons.forEach(btn => {
    btn.disabled = false;
    btn.style.backgroundColor = "#000";
  });
}

answerButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.id;
    const correct = quizData[currentQuestion].correct;

    if (answer === correct) {
      score++;
      btn.style.backgroundColor = "green";
    } else {
      btn.style.backgroundColor = "red";
    }

    answerButtons.forEach(b => (b.disabled = true));
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `
      <h2>Você acertou ${score}/${quizData.length} perguntas!</h2>
      <button onclick="location.reload()">Jogar novamente</button>
    `;
  }
});

loadQuestion();
