// Runs before paint: opts the page into reveal animations only when JS is alive,
// and un-hides everything if hydration never marks motion as ready.
export const motionBootScript = `(function(){var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('motion')},2500)})();`;
