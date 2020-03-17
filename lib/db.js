import{Pool}from 'pg'

const connectionString = 'postgresql://postgres:qaninja@pgdb:5432/zombieplus'
const pool = new Pool({ connectionString: connectionString })

export default {
    removeByTitle: (title) => {
        return new Promise((resolve, reject) => {
            pool
                .query(`DELETE FROM public.movies where title = '${title}';`)
                .then(res => {
                    resolve(res)
                })
                .catch(e => reject(e.stack))
        })
    }
}