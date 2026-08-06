/**
 * CONFIGURAÇÕES E DADOS
 */
const CONFIG = {
  minLoadingTime: 800,
  sabores: [
    { name: 'Laranja', color: '#F59E0B', icon: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12L12 2M12 12L19.0711 4.92893M12 12L22 12M12 12L19.0711 19.0711M12 12L12 22M12 12L4.92893 19.0711M12 12L2 12M12 12L4.92893 4.92893' },
    { name: 'Mamão c/ Laranja', color: '#F97316', icon: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z M12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6Z' },
    { name: 'Abacaxi', color: '#FCD34D', icon: 'M12 14.5L14.5 12L12 9.5L9.5 12L12 14.5ZM12 2L9 7L12 9L15 7L12 2ZM6 10L4 12L6 14L8 12L6 10ZM18 10L16 12L18 14L20 12L18 10ZM12 22L9 17L12 15L15 17L12 22Z' },
    { name: 'Abacaxi c/ Hortelã', color: '#84CC16', icon: 'M12 12L15 9M12 12L9 9M12 12L12 15M12 2L15 5L12 8L9 5L12 2ZM6 10L4 12L6 14L8 12L6 10ZM18 10L16 12L18 14L20 12L18 10ZM12 22L9 17L12 15L15 17L12 22Z' },
    { name: 'Morango', color: '#EF4444', icon: 'M12 22C12 22 20 16 20 9C20 5 17 3 14 3C12.5 3 12 4 12 4C12 4 11.5 3 10 3C7 3 4 5 4 9C4 16 12 22 12 22ZM12 8V8.01M9 11V11.01M15 11V11.01M10 15V15.01M14 15V15.01M12 12V12.01' },
    { name: 'Maracujá', color: '#FDE047', icon: 'M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16ZM12 13C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13Z' },
    { name: 'Uva', color: '#A855F7', icon: 'M15 6A3 3 0 0 1 15 12A3 3 0 0 1 15 6ZM9 6A3 3 0 0 1 9 12A3 3 0 0 1 9 6ZM12 11A3 3 0 0 1 12 17A3 3 0 0 1 12 11ZM9 16A3 3 0 0 1 9 22A3 3 0 0 1 9 16ZM15 16A3 3 0 0 1 15 22A3 3 0 0 1 15 16ZM12 2L14 4L12 4L12 2Z' },
    { name: 'Bergamota', color: '#FBBF24', icon: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12L12 2M12 12L19.0711 4.92893M12 12L22 12M12 12L19.0711 19.0711M12 12L12 22M12 12L4.92893 19.0711M12 12L2 12M12 12L4.92893 4.92893' },
    { name: 'Melancia', color: '#EF4444', icon: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z M12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6Z' },
    { name: 'Manga', color: '#F59E0B', icon: 'M12 22C12 22 20 16 20 9C20 5 17 3 14 3C12.5 3 12 4 12 4C12 4 11.5 3 10 3C7 3 4 5 4 9C4 16 12 22 12 22ZM12 8V8.01M9 11V11.01M15 11V11.01M10 15V15.01M14 15V15.01M12 12V12.01' }
  ],
  tamanhos: [
    { size: '5 Litros', desc: 'Para toda a família', scale: 1.6 },
    { size: '2 Litros', desc: 'O favorito do fim de semana', scale: 1.3 },
    { size: '1 Litro', desc: 'Perfeito para o almoço', scale: 1.0 },
    { size: '330 ml', desc: 'Refresco prático', scale: 0.8 }
  ]
};

/**
 * INICIALIZAÇÃO
 */
const loadingScreen = document.getElementById('loading-screen');

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';

  const heroVideo1 = document.getElementById('hero-video-1');

  // Promessa 1: Tempo mínimo de tela de loading
  const minTime = new Promise(resolve => setTimeout(resolve, CONFIG.minLoadingTime));

  // Promessa 2: Carregamento completo da página (imagens, css, etc)
  const pageLoad = new Promise(resolve => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', resolve);
    }
  });

  // Promessa 3: Vídeo principal carregado o suficiente para tocar sem travar
  const videoLoad = new Promise(resolve => {
    // readyState >= 4 significa HAVE_ENOUGH_DATA (pode tocar até o fim sem parar)
    if (!heroVideo1 || heroVideo1.readyState >= 4) {
      resolve();
    } else {
      heroVideo1.addEventListener('canplaythrough', resolve);
      heroVideo1.addEventListener('error', resolve); // Continua se der erro

      // Timeout de segurança (15s) para liberar o site caso a internet esteja excessivamente lenta
      setTimeout(resolve, 15000);
    }
  });

  // Quando tudo estiver pronto (tempo mínimo + página carregada + vídeo carregado)
  Promise.all([minTime, pageLoad, videoLoad]).then(() => {
    loadingScreen?.classList.add('is-hidden');
    document.body.style.overflow = '';

    // Garante que o vídeo inicie agora que a tela está liberada
    if (heroVideo1) {
      heroVideo1.play().catch(() => { });
    }
  });

  // 1. Navbar Glassmorphism
  const siteHeader = document.getElementById('site-header');
  const handleScroll = () => {
    siteHeader?.classList.toggle('is-scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // 2. Hero Video Transition Logic
  const v1 = document.getElementById('hero-video-1');
  const v2 = document.getElementById('hero-video-2');
  const transition = document.getElementById('dark-transition');
  let switched = false;

  if (v1 && v2 && transition) {
    v1.addEventListener('timeupdate', () => {
      if (!switched && (v1.duration - v1.currentTime) <= 1.2) {
        transition.classList.add('is-active');
      }
    });

    v1.addEventListener('ended', () => {
      if (switched) return;
      setTimeout(() => {
        switched = true;
        v1.classList.remove('is-visible');
        v2.classList.add('is-visible');
        v2.play().catch(() => { });
        setTimeout(() => transition.classList.remove('is-active'), 500);
      }, 1000);
    });
  }

  // 3. Render Dinâmico de Produtos
  const flavorsCont = document.getElementById('flavors-container');
  if (flavorsCont) {
    flavorsCont.innerHTML = CONFIG.sabores.map((s, i) => `
      <div class="flavor-pill animate-on-scroll anim-fade" style="transition-delay: ${0.3 + (i * 0.1)}s; --sabor-color: ${s.color}">
        <div class="pill-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="${s.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="${s.icon}" fill="${s.color}" fill-opacity="0.15"></path>
          </svg>
        </div>
        <span>${s.name}</span>
      </div>
    `).join('');
  }

  const sizesCont = document.getElementById('sizes-container');
  if (sizesCont) {
    sizesCont.innerHTML = CONFIG.tamanhos.map((t, i) => `
      <div class="size-item animate-on-scroll anim-slide-right" style="transition-delay: ${0.5 + (i * 0.1)}s">
        <div class="size-visual">
          <div class="bottle-silhouette" style="transform: scale(${t.scale})"></div>
        </div>
        <div class="size-info">
          <strong class="font-display">${t.size}</strong>
          <small>${t.desc}</small>
        </div>
      </div>
    `).join('');
  }

  // 4. Ativar Observador de Animações
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting));
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
