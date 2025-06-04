
const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');
const limpar = document.getElementById('limpar');

formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const celular = document.getElementById('cel').value.trim();
    const data = document.getElementById('data').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if(!nome || !senha || !celular || !data || !email){
        alert('Preencha tudo antes de enviar o formulario!!')
        return;
    }

    const item = document.createElement('div');
    item.innerHTML = `
    Nome: ${nome}<br>
    Celular: ${celular}<br>
    Data: ${data}<br>
    Email: ${email}<hr>
    `;
    lista.appendChild(item);
    formulario.reset();
});

limpar.addEventListener('click', () => {
    lista.innerHTML = '';
});



