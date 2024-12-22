const selectorHalo = '#halo';
const selectorHaloContainer = selectorHalo + '-container';
const width = 1050;
const height = 1050;
let funcPtr;

function mouseMoveEvent(bgColor: string, elementBackground: HTMLElement) {
  return (e: MouseEvent) => {
    const elementHalo: HTMLElement = document.querySelector(selectorHalo);
    const elementHaloContainer: HTMLElement = document.querySelector(selectorHaloContainer);
    const maxSafePosX = elementBackground.scrollWidth - width;
    const maxSafePosY = elementBackground.scrollHeight - height;
    let posX = e.pageX - width / 2;
    let posY = e.pageY - height / 2;
    const posXSafe = posX > maxSafePosX ? maxSafePosX : posX;
    const posYSafe = posY > maxSafePosY ? maxSafePosY : posY;
    if (posY > maxSafePosY) {
      elementHaloContainer.style.setProperty('--mouse-y-safe', posYSafe + 'px');
      posY = posY - maxSafePosY;
    } else {
      elementHaloContainer.style.setProperty('--mouse-y-safe', posY + 'px');
      posY = 0;
    }
    if (posX > maxSafePosX) {
      elementHaloContainer.style.setProperty('--mouse-x-safe', posXSafe + 'px');
      posX = posX - maxSafePosX;
    } else {
      elementHaloContainer.style.setProperty('--mouse-x-safe', posX + 'px');
      posX = 0;
    }
    elementHalo.style.setProperty('--mouse-y', posY + 'px');
    elementHalo.style.setProperty('--mouse-x', posX + 'px');
    elementHalo.style.background = 'radial-gradient(rgba(29, 78, 216, 0.15), transparent 65%)';
  }
}

export function addMouseGlow(selectorBackground: string, bgColor: string) {
  const elementBackground: HTMLElement = document.querySelector(selectorBackground);
  const elementHalo: HTMLElement = document.querySelector(selectorHalo);
  if (elementHalo) {
    funcPtr = mouseMoveEvent(bgColor, elementBackground);
    elementBackground.addEventListener('mousemove', funcPtr);
    window.addEventListener('resize', funcPtr);
  }
};

export function removeMouseGlow(selectorBackground: string) {
  const elementBackground: HTMLElement = document.querySelector(selectorBackground);
  const elementHalo: HTMLElement = document.querySelector(selectorHalo);
  elementHalo.style.background = 'none';
  if (funcPtr) {
    elementBackground.removeEventListener('mousemove', funcPtr);
    window.removeEventListener('resize', funcPtr);
  }
}
