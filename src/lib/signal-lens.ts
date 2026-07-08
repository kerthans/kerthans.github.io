const initialized = new WeakSet<HTMLElement>();

export function initSignalLens(element: HTMLElement): () => void {
  if (initialized.has(element)) return () => {};
  initialized.add(element);

  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (coarse || reduceMotion) return () => {};

  element.dataset.lens = 'active';

  function onPointerMove(e: PointerEvent) {
    const rect = element.getBoundingClientRect();
    element.style.setProperty('--lens-x', `${e.clientX - rect.left}px`);
    element.style.setProperty('--lens-y', `${e.clientY - rect.top}px`);
  }

  element.addEventListener('pointermove', onPointerMove, { passive: true });

  return () => {
    delete element.dataset.lens;
    element.removeEventListener('pointermove', onPointerMove);
    initialized.delete(element);
  };
}