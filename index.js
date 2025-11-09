const body = document.querySelector("body");
const text = document.querySelector(".text");
const giftIcon = document.querySelector(".gift img");
const gift = document.getElementById("gift");
const wish = document.getElementById("wish");

const wishes = [
  'Бажаємо, щоб цей рік став роком стабільності, розвитку та нових досягнень.',
  'Нехай у ваших домівках панує злагода, у серцях — спокій і віра, а у справах — успіх і процвітання.',
  'Нехай Новий рік принесе Вам натхнення, впевненість у майбутньому та безліч нових можливостей.',
  'Бажаємо миру, благополуччя, професійних успіхів і родинного тепла.',
  'Нехай у 2026-му кожен день приносить нові можливості та радість!',
  'Дякуємо за партнерство — бажаємо натхнення, процвітання та щирих усмішок!',
  'Нехай 2026 буде роком великих звершень, тепла та творчості!',
  'Бажаємо стабільності, росту і гармонії в новому році!',
  'Хай кожна ідея знаходить своє втілення, а кожен проєкт — успіх!'
];

giftIcon.classList.add ("float");

gift.addEventListener("click", () => {
  if (gift.classList.contains("gift-hide")) return;

  giftIcon.classList.remove ("float");
  giftIcon.classList.add("spin");
  giftIcon.style.pointerEvents = 'none';

  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  
  setTimeout(() => {
    gift.classList.remove("spin");

    setTimeout(() => {
      gift.classList.add("gift-hide");
      wish.textContent = randomWish;
      wish.classList.add("show");
      body.classList.add("opacity");
      text.classList.add("active");
    }, 2500);
  }, 100);
});
