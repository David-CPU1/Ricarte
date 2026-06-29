document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('texto-terminal');
  const estadisticas = document.getElementById('estadisticas-terminal');
  
  if (terminal) {
    const mensajes = [
      '$ scanning_security...\n',
      '$ analyzing_digital_presence...\n',
      '$ threat_assessment: COMPLETE\n',
      '$ ready_for_analysis'
    ];
    
    let index = 0;
    const escribirTexto = () => {
      if (index < mensajes.length) {
        terminal.textContent += mensajes[index];
        index++;
        setTimeout(escribirTexto, 800);
      }
    };
    escribirTexto();
  }
  
  if (estadisticas) {
    setTimeout(() => {
      estadisticas.style.display = 'block';
    }, 4000);
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});