const screens=[...document.querySelectorAll("[data-screen]")];
const state={screen:"home",history:[],types:new Set()};

function render(){
  screens.forEach(s=>{
    const active=s.dataset.screen===state.screen;
    s.hidden=!active;
    s.classList.toggle("is-active",active);
  });
  document.querySelectorAll(".type-card").forEach(card=>{
    const selected=state.types.has(card.dataset.type);
    card.classList.toggle("is-selected",selected);
    card.setAttribute("aria-pressed",String(selected));
  });
}

function goTo(name,push=true){
  if(!document.querySelector('[data-screen="'+name+'"]')) return;
  if(state.screen===name) return;
  if(push) state.history.push(state.screen);
  state.screen=name;
  window.scrollTo({top:0,behavior:"smooth"});
  render();
}

document.addEventListener("click",e=>{
  const go=e.target.closest("[data-go]");
  if(go){e.preventDefault();goTo(go.dataset.go);return;}
  if(e.target.closest("[data-back]")){
    goTo(state.history.pop()||"home",false);
  }
  const type=e.target.closest("[data-type]");
  if(type){
    const value=type.dataset.type;
    if(state.types.has(value)) state.types.delete(value); else state.types.add(value);
    render();
  }
});

render();
