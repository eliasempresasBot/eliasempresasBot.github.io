// Seleciona o ícone de hambúrguer e o menu de navegação
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

// Adiciona um evento de clique ao ícone de hambúrguer
menuIcon.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' para mostrar ou esconder o menu
    nav.classList.toggle('active');
});
```
