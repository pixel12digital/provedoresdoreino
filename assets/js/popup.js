// ===== POPUP DE DOAÇÃO - JavaScript Modular =====

class PopupDoacao {
  constructor() {
    this.popupBg = document.getElementById('popupDoacaoBg');
    this.popup = document.getElementById('popupDoacao');
    this.btnDoacao = document.querySelector('.btn-doacao');
    this.btnFechar = document.querySelector('#popupDoacao .fechar');
    this.btnCopiar = document.getElementById('btnPopupCopiar');
    this.pixKey = document.getElementById('popupPixKey');
    
    this.init();
  }

  init() {
    this.bindEvents();
    this.setupAccessibility();
  }

  bindEvents() {
    // Abrir popup
    if (this.btnDoacao) {
      this.btnDoacao.addEventListener('click', (e) => {
        e.preventDefault();
        this.abrir();
      });
    }

    // Fechar popup
    if (this.btnFechar) {
      this.btnFechar.addEventListener('click', () => {
        this.fechar();
      });
    }

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isAberto()) {
        this.fechar();
      }
    });

    // Fechar clicando fora
    if (this.popupBg) {
      this.popupBg.addEventListener('click', (e) => {
        if (e.target === this.popupBg) {
          this.fechar();
        }
      });
    }

    // Copiar PIX
    if (this.btnCopiar) {
      this.btnCopiar.addEventListener('click', () => {
        this.copiarPix();
      });
    }
  }

  setupAccessibility() {
    // Foco automático no popup quando abrir
    if (this.popup) {
      this.popup.setAttribute('tabindex', '-1');
      this.popup.setAttribute('role', 'dialog');
      this.popup.setAttribute('aria-labelledby', 'popup-titulo');
      this.popup.setAttribute('aria-describedby', 'popup-descricao');
    }

    // ARIA labels
    if (this.btnFechar) {
      this.btnFechar.setAttribute('aria-label', 'Fechar popup de doação');
    }

    if (this.btnCopiar) {
      this.btnCopiar.setAttribute('aria-label', 'Copiar chave PIX');
    }
  }

  abrir() {
    if (this.popupBg) {
      this.popupBg.style.display = 'flex';
      
      // Foco no popup para acessibilidade
      setTimeout(() => {
        if (this.popup) {
          this.popup.focus();
        }
      }, 100);

      // Prevenir scroll do body
      document.body.style.overflow = 'hidden';
    }
  }

  fechar() {
    if (this.popupBg) {
      this.popupBg.style.display = 'none';
      
      // Restaurar scroll do body
      document.body.style.overflow = '';
      
      // Foco de volta no botão de doação
      if (this.btnDoacao) {
        this.btnDoacao.focus();
      }
    }
  }

  isAberto() {
    return this.popupBg && this.popupBg.style.display === 'flex';
  }

  async copiarPix() {
    if (!this.pixKey || !this.btnCopiar) return;

    const chave = this.pixKey.innerText;
    
    try {
      await navigator.clipboard.writeText(chave);
      
      // Feedback visual
      this.btnCopiar.classList.add('copiado');
      this.btnCopiar.innerText = 'Copiado!';
      this.btnCopiar.setAttribute('aria-label', 'Chave PIX copiada com sucesso');
      
      // Restaurar após 2 segundos
      setTimeout(() => {
        this.btnCopiar.classList.remove('copiado');
        this.btnCopiar.innerText = 'Copiar';
        this.btnCopiar.setAttribute('aria-label', 'Copiar chave PIX');
      }, 2000);
      
    } catch (err) {
      console.error('Erro ao copiar PIX:', err);
      
      // Fallback para navegadores antigos
      this.fallbackCopy(chave);
    }
  }

  fallbackCopy(text) {
    // Método alternativo para copiar
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      this.btnCopiar.innerText = 'Copiado!';
      this.btnCopiar.classList.add('copiado');
      
      setTimeout(() => {
        this.btnCopiar.innerText = 'Copiar';
        this.btnCopiar.classList.remove('copiado');
      }, 2000);
    } catch (err) {
      console.error('Erro no fallback copy:', err);
      this.btnCopiar.innerText = 'Erro!';
    }
    
    document.body.removeChild(textArea);
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new PopupDoacao();
});

// Exportar para uso global se necessário
window.PopupDoacao = PopupDoacao; 