import { db_all } from '~/utils/query'

export interface user{
    email: string,
    name: string,
    family_name: string,
    picture: string,
    given_name: string,
    role: string
}



export default defineEventHandler(async (event) => {
    try {
        const users = <user[]>await db_all(`
        SELECT users.email, users.name, users.family_name, users.picture, users.given_name, roles.name as role FROM users 
        JOIN roles ON roles.id = users.role_id 
        `)
        return users
        
    } catch (error) {
        console.log(error)
    }
})
