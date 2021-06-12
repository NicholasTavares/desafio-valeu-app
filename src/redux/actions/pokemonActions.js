import axios from 'axios'
import BASE_URL from '../base_url'

export function getPokemonByName() {
    const request = axios.get(`${BASE_URL}/dailytrends`)
    return {
        type: 'NAME',
        payload: request
    }
}