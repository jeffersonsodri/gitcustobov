
import Formulario from './view/Formulario.vue'
import Relatorio from './view/Relatorio.vue'

export const routes = [
{path: '/', component: Formulario},
{path:'/relatorio', component: Relatorio},
{path:'*', component: Formulario},
];