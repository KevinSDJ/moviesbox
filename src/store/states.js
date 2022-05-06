// Aqui estaran todos los estados que usare

// almacenamiento de los datos de la api
const initstate = {
  searchs: { data: [], status: '' },
  topTranding: { data: [], status: '' },
  popularity: { data: [], status: '' },
  upcomming: { data: [], status: '' },
  favs: [],
  like: []
}
// un estado para capturar exclusivamente en comportamiento de los componentes
const componentstate = {
  searchinputfocus: false,
  screensize: window.innerWidth
}
export { componentstate, initstate }
