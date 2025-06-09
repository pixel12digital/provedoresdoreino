// Modal Pix - Estrutura e exibição
function abrirPixModal() {
    if(document.getElementById('pixModal')) {
        document.getElementById('pixModal').style.display = 'flex';
        return;
    }
    const modal = document.createElement('div');
    modal.id = 'pixModal';
    modal.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.65);z-index:9999;display:flex;align-items:center;justify-content:center;">
      <div style="background:#fff;color:#0e2a5a;border-radius:18px;max-width:380px;width:90vw;padding:28px 18px 18px 18px;box-shadow:0 4px 32px rgba(0,0,0,0.18);text-align:center;position:relative;">
        <button id='fecharPixModal' style="
            position:absolute;top:18px;right:18px;
            width:60px;height:60px;
            background:#ff0;
            border:4px solid #f00;
            border-radius:50%;
            font-size:3rem;
            color:#000;
            cursor:pointer;
            z-index:2147483647;
            line-height:1;
            box-shadow:0 2px 8px #000;
            display:flex;align-items:center;justify-content:center;
            font-weight:bold;
            outline:6px solid #00f;
        ">&times; X-TESTE</button>
        <div>Conteudo do Modal</div>
      </div>
    </div>
    `;
    document.body.appendChild(modal);
    console.log('Botao X criado:', document.getElementById('fecharPixModal'));
    document.getElementById('fecharPixModal').onclick = function() {
        document.body.removeChild(document.getElementById('pixModal'));
    };
} 