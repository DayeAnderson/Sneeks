import tokenService from '../services/tokenService';
const BASE_URL = '/api/sneakers/';

export function create(sneaker) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(sneaker)
    }, {mode: "cors"})
    .then(res => res.json());
  }