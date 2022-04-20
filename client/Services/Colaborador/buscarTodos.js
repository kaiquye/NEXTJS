import axios from 'axios'
import Api from '../api/server'
export async function BuscarTodosColaboradores(id) {
    try {
        const Data = await Api.get(`/colaboradores/${id}`)
        return Data
    } catch (error) {
        console.log(error)
        return new Error('')
    }
}