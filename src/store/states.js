// Aqui estaran todos los estados que usare

// almacenamiento de los datos de la api
const initstate = {
  searchs: { data: [], status: '' },
  topTranding: { data: [], status: '' },
  favs: [],
  like: []
}
// un estado para capturar exclusivamente en comportamiento de los componentes
const componentstate = {
  searchinputfocus: false,
  screensize: 0
}
export { componentstate, initstate }
