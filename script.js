const screens = [...document.querySelectorAll('[data-screen]')];
const state = { screen: 'home', nickname: '', intentions: new Set() };
const history = [];

function render() {
  screens.forEach((screen) => {
    const active = screen.dataset.screen === state.screen;
    screen.hidden = !active;
    screen.classList.toggle('is-active', active);
  });
  document.querySelectorAll('[data-user]').forEach((element) => {
    element.textContent = state.nickname ? `, ${state.nickname}` : '';
  });
  const selections = document.querySelector('[data-selections]');
  if (selections) selections.textContent = state.intentions.size ? [...state.intentions].join(', ') : 'aucun';
  document.querySelectorAll('.intention-card').forEach((card) => {
    card.classList.toggle('is-selected', state.intentions.has(card.dataset.intention));
    card.setAttribute('aria-pressed', state.intentions.has(card.dataset.intention));
  });
  const continueButton = document.querySelector('.continue-button');
  if (continueButton) continueButton.disabled = state.intentions.size === 0;
}

function goTo(screen, addHistory = true) {
  if (state.screen === screen) return;
  if (addHistory) history.push(state.screen);
  state.screen = screen;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-go]');
  if (target) goTo(target.dataset.go);
  if (event.target.closest('[data-back]')) {
    goTo(history.pop() || 'home', false);
  }
});

document.querySelector('[data-form="profile"]')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.nickname = String(formData.get('nickname')).trim();
  goTo('intentions');
});

document.querySelectorAll('.intention-card').forEach((card) => {
  card.addEventListener('click', () => {
    const intention = card.dataset.intention;
    if (state.intentions.has(intention)) state.intentions.delete(intention);
    else state.intentions.add(intention);
    render();
  });
});

render();
