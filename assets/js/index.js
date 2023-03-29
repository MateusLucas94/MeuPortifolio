/*====================== MENU MOSTRAR E ESCONDER ====================*/
/* começaremos pegando o id dos elementos menu, toggle e close */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*======= MOSTRAR MENU =====*/
/* após pegar os elementos menu, toggle e close faremos a validação para mostrar o menu */
/* Valida se a constante existe */
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

/*======= MENU ESCONDIDO =====*/
/* depois de fazer a validação para abrir o menu, farei a validação para esconder ele */
/* Valida se a constante existe */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*====================== REMOVER MENU CELULAR ====================*/
/*  após fazer a validação para esconder o menu, faremos com que cada item do menu vá direto para 
    sua respectiva área da página */
//  após automatizar os botões do menu, voltarei para o index.html fazer a parte MAIN do projeto!
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando nós clicamos em cada nav__link, nós removemos a classe show-menu,
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====================== HABILIDADES DE ACORDEÃO ====================*/


/*====================== GUIAS DE QUALIFICAÇÃO ====================*/


/*====================== MODAL DE SERVIÇOS ====================*/


/*====================== PORTFOLIO SWIPER ====================*/


/*====================== DEPOIMENTO ======================*/


/*====================== ROLAR SEÇÕES LINK ATIVO ====================*/


/*====================== MUDAR CABEÇALHO DE FUNDO ====================*/ 


/*====================== MOSTRAR ROLAR PARA CIMA ====================*/ 


/*====================== TEMA DA LUZ ESCURA ====================*/ 