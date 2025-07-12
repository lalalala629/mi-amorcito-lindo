const messages=[
    "Te amo mucho amorcito, gracias por todo corazón, en serio eres alguien especial para mí 😘",
    "Eres la razón por la que sonrío cada día, mi niña hermosa 💖",
"Contigo todo tiene más color, más sentido, más amor 🎨",
"No me canso de amarte, ni un solo segundo mi amor ⏳",
"Mi corazón late más fuerte solo por ti, mi vida 💓",
"Gracias por existir y por iluminar mi mundo, cosita bella ✨",
"Si pudiera elegir otra vez, te escogería mil veces más 💍",
"Estás en mis pensamientos siempre, día y noche, mi cielo 🌙",
"Tus ojitos son mi lugar favorito, donde quiero perderme siempre 👀",
"Eres mi paz, mi hogar, mi todo 🏡",
"Nada me hace más feliz que saber que estás en mi vida, mi reina 👑",
"Tu sonrisa es mi debilidad, mi amorcito 🥹",
"Tú y yo, contra el mundo, siempre juntos 💪",
"A tu lado descubrí lo que es el amor de verdad 🫶",
"Tú le das sentido a todo lo que hago, princesita hermosa 🌟",
"Cada momento contigo es un regalo que valoro con el alma 🎁",
"Amarte es lo más bonito que me ha pasado en esta vida 🌎",
"Me enamoras más cada día con tu forma de ser, mi cielo lindo 💕",
"Eres mi sueño hecho realidad, la niña que tanto esperé 🌠",
"Gracias por hacerme sentir amado, completo y feliz, mi amor 🤗",
"No hay un solo día donde no piense en ti y me sienta afortunado 🧠",
"Eres como un rayito de luz en mis días más nublados ☀️",
"Tu voz tiene el poder de calmar cualquier tormenta en mí 🎶",
"Abrazarte es como volver a casa después de un mal día 🤗",
"Eres más hermosa de lo que cualquier palabra puede decir 📖",
"En tu mirada encontré el universo que siempre soñé 🌌",
"Amarte es fácil cuando eres todo lo que siempre quise 💘",
"Gracias por aguantarme incluso en mis días difíciles 🧸",
"Tus besos tienen magia, me curan el alma ✨",
"No me hace falta nada más si te tengo a ti 💞",
"Siempre voy a elegirte, sin importar lo que pase 🔁",
"Me haces sentir especial como nadie más lo ha hecho 🎈",
"Contigo los problemas se vuelven más pequeños 🪶",
"Eres mi motivación para seguir, cada día 🏃‍♂️",
"Todo lo que soy es mejor desde que llegaste tú 🔥",
"Amarte me enseñó lo que significa cuidar de alguien de verdad 💗",
"Tienes el corazón más lindo del mundo y es mío ❤️",
"Quiero darte el mundo, pero tú ya eres todo mi mundo 🌍",
"Cuando sonríes, todo lo demás deja de importar 😊",
"Siempre voy a estar aquí para ti, porque tú vales todo 💎",
];

function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  const left = Math.random() * 80 + 10;
  const top = Math.random() * 80 + 10;

  bubble.style.position = "absolute";
  bubble.style.left = left + "vw";
  bubble.style.top = top + "vh";

  const container = document.getElementById("bubbles-text");
  container.appendChild(bubble);

  setTimeout(() => {
    const rect = bubble.getBoundingClientRect();

if (rect.right > window.innerWidth) {
  const newLeft = window.innerWidth - rect.width - 10;
  bubble.style.left = `${newLeft}px`;
}

if (rect.bottom > window.innerHeight) {
  const newTop = window.innerHeight - rect.height - 10;
  bubble.style.top = `${newTop}px`;
}

    if (rect.left < 0) {
      bubble.style.left = "10px";
    }

    if (rect.top < 0) {
      bubble.style.top = "10px";
    }
  }, 10);

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(createTextBubble,500);