# Anel de Salomão - Projeto Otimizado

## 📋 Visão Geral

Este projeto foi completamente revisado e otimizado para oferecer uma experiência de usuário superior, com foco especial no popup de doação e na acessibilidade.

## ✨ Principais Melhorias Implementadas

### 🎨 **Design e Layout**
- **Layout 16:9 perfeito no desktop**: Popup com proporção paisagem harmoniosa
- **Centralização vertical**: Conteúdo perfeitamente alinhado em ambas as colunas
- **Hierarquia visual clara**: Espaçamento adequado entre elementos
- **Responsividade completa**: Adaptação perfeita para mobile, tablet e desktop

### 🎯 **Popup de Doação**
- **CSS padronizado**: Removido CSS inline, tudo centralizado no arquivo `style.css`
- **JavaScript modular**: Código organizado em classe `PopupDoacao`
- **Acessibilidade**: ARIA labels, navegação por teclado, foco automático
- **Feedback visual**: Animações suaves e estados de hover
- **Botão de fechar destacado**: Sempre visível e acessível

### 🔧 **Tecnologia e Performance**
- **Variáveis CSS**: Sistema de design consistente e fácil manutenção
- **Código limpo**: Estrutura modular e bem documentada
- **Fallbacks**: Compatibilidade com navegadores antigos
- **Otimização**: Carregamento eficiente e transições suaves

## 📁 Estrutura do Projeto

```
Anel_de_Salomao/
├── index.html              # Página principal
├── pix-info.html           # Página de informações PIX
├── assets/
│   ├── css/
│   │   └── style.css       # CSS principal com variáveis
│   ├── js/
│   │   ├── popup.js        # JavaScript modular do popup
│   │   └── pix-modal.js    # Modal PIX (legado)
│   └── images/             # Imagens otimizadas
├── admin/                  # Área administrativa (futuro)
├── includes/               # Includes PHP (futuro)
├── .htaccess              # Configurações de servidor
└── README.md              # Esta documentação
```

## 🚀 Funcionalidades

### Popup de Doação
- **Abertura**: Clique no botão "CLICK AQUI PARA FAZER A SUA DOAÇÃO"
- **Fechamento**: 
  - Botão X no canto superior direito
  - Tecla ESC
  - Clique fora do popup
- **Cópia PIX**: Botão "Copiar" com feedback visual
- **Layout responsivo**: 
  - Desktop: 16:9 paisagem com duas colunas
  - Mobile: Layout vertical otimizado

### Acessibilidade
- **Navegação por teclado**: Tab, Enter, ESC
- **ARIA labels**: Descrições para leitores de tela
- **Foco visual**: Indicadores claros de interação
- **Contraste**: Cores com boa legibilidade

## 🎨 Sistema de Design

### Variáveis CSS
```css
:root {
  --cor-primaria: #0a2a5a;
  --cor-secundaria: #17507a;
  --cor-accent: #ffe600;
  --cor-vermelha: #e50909;
  --cor-verde: #0bb20b;
  --cor-branca: #ffffff;
  
  --fonte-principal: 'Montserrat', Arial, sans-serif;
  --fonte-secundaria: 'Arial Black', Arial, sans-serif;
  
  --espaco-xs: 4px;
  --espaco-sm: 8px;
  --espaco-md: 12px;
  --espaco-lg: 16px;
  --espaco-xl: 20px;
  --espaco-2xl: 24px;
  --espaco-3xl: 32px;
  --espaco-4xl: 40px;
  --espaco-5xl: 48px;
}
```

## 📱 Responsividade

### Breakpoints
- **Desktop**: ≥ 900px (Layout 16:9 paisagem)
- **Tablet**: 700px - 899px (Layout adaptativo)
- **Mobile**: < 700px (Layout vertical)
- **Mobile pequeno**: < 480px (Layout compacto)

## 🔧 Como Usar

### Desenvolvimento
1. Clone o repositório
2. Configure um servidor local (XAMPP, WAMP, etc.)
3. Acesse via `http://localhost/Anel_de_Salomao`

### Personalização
- **Cores**: Edite as variáveis CSS em `:root`
- **Espaçamentos**: Use as variáveis de espaçamento
- **Fontes**: Modifique as variáveis de fonte
- **Layout**: Ajuste os breakpoints conforme necessário

## 🎯 Próximas Melhorias Sugeridas

### Performance
- [ ] Minificação de CSS e JS
- [ ] Otimização de imagens (WebP)
- [ ] Lazy loading para imagens
- [ ] Service Worker para cache

### Funcionalidades
- [ ] Analytics de conversão
- [ ] Integração com gateway de pagamento
- [ ] Sistema de notificações
- [ ] Backup automático

### Acessibilidade
- [ ] Testes com leitores de tela
- [ ] Modo alto contraste
- [ ] Redimensionamento de fonte
- [ ] Navegação por voz

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do WhatsApp: **(11) 97477-8796**

---

**Desenvolvido com ❤️ para a Comunidade Cristã Paz e Vida** 