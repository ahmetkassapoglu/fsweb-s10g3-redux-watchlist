import { movies } from "./movies"
const ONCEKI_FILM = "ONCEKI_FILM"
const SONRAKI_FILM = "SONRAKI_FILM"
const LISTEDEN_CIKAR = "LISTEDEN_CIKAR"
const LISTEYE_EKLE = "LISTEYE_EKLE"
const initialState = {
    movies: movies,
    sira: 0,
    favMovies: [],

}
export function oncekiFilm() {
    return ({type: ONCEKI_FILM})
}
export function sonrakiFilm() {
    return ({type: SONRAKI_FILM})
}
export function listedenCikar(id) {
    return ({type: LISTEDEN_CIKAR, payload: id})
}
export function listeyeEkle() {
    return ({type: LISTEYE_EKLE})
}
export default function  reducer(state=initialState, action)  {
switch(action.type){
    case SONRAKI_FILM:
        return{...state, sira: state.sira +1 }
        case ONCEKI_FILM:
            return{...state, sira: state.sira +1 }
            case LISTEYE_EKLE:
                return{...state, favMovies:[ ...state.favMovies, state.movies[state.sira] ]}
                case LISTEDEN_CIKAR:
                    return{...state, favMovies: state.favMovies.filter((movie) => movie.id !== action.payload ) }
        default:
    return state
  }
}
