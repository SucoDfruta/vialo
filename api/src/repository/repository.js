import { con } from './connection.js'



    export async function inserirvilao(vilao) {
    const comando =
        `SELECT id_vilao		id,
                nm_vilao		nome,
                ds_maldades maldades,
                bt_super_poder  poder
           FROM tb_lista `
    
    const [linhas] = await con.query(comando, [vilao.id, vilao.nome, vilao.maldades, vilao.poder]);
    return linhas[0];
}

     

 



export async function achartodos() {
    const comando =
        ` select * 
          from tb_lista`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}