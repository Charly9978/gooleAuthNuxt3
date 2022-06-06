import sqlite from 'sqlite3'

export async function db_get(query){
    const db = new sqlite.Database('db.sqlite')
    return new Promise((res,rej)=>{
        db.get(query,function(err,row){
            if(err){
                db.close()
                rej(err)
            }
            db.close()
            res(row)
        })
    })
}

export async function db_all(query){
    const db = new sqlite.Database('db.sqlite')
    return new Promise((res,rej)=>{
        db.all(query,function(err,rows){
            if(err){
                db.close()
                rej(err)
            }
            db.close()
            res(rows)
        })
    })
}