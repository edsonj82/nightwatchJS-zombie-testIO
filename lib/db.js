import{Pool}from 'pg'

const connectionString = 'postgresql://postgres:qaninja@pgdb:5432/zombieplus'
const pool = new Pool({connectionString: connectionString})

export default{
    removeByTitle: (title) => {
        pool.query(`DELETE FROM public.movies WHERE title = ${title}`)
    }
}