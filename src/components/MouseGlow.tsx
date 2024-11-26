const selectorHalo = '#halo';
let funcPtr;

function mouseMoveEvent(bgColor: string) {
  return (e: MouseEvent) => {
    const elementHalo: HTMLElement = document.querySelector(selectorHalo);
    const width = 1050;
    const height = 1050;
    const posX = e.pageX - width / 2;
    const posY = e.pageY - height / 2;
    elementHalo.style.setProperty('--mouse-x', posX + 'px');
    elementHalo.style.setProperty('--mouse-y', posY + 'px');
    elementHalo.style.background = 'radial-gradient(rgba(29, 78, 216, 0.15), transparent 65%)';
  }
}

export function addMouseGlow(selectorBackground: string, bgColor: string) {
  const elementBackground: HTMLElement = document.querySelector(selectorBackground);
  const elementHalo: HTMLElement = document.querySelector(selectorHalo);
  if (elementHalo) {
    funcPtr = mouseMoveEvent(bgColor);
    elementBackground.addEventListener('mousemove', funcPtr);
  }
};

export function removeMouseGlow(selectorBackground: string) {
  const elementBackground: HTMLElement = document.querySelector(selectorBackground);
  const elementHalo: HTMLElement = document.querySelector(selectorHalo);
  elementHalo.style.background = 'none';
  if (funcPtr)
    elementBackground.removeEventListener('mousemove', funcPtr);
}
