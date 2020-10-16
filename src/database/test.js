const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then( async db => {
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: '-21.7909949',
        lng:  '-46.5652284',
        name: 'Lar de amor',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '99885542',
        images: [

            "https://images.unsplash.com/photo-1598454444425-4067fd1ac9db?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1598454444425-4067fd1ac9db?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        opening_hours: 'Horário de visitas Das 8h as 18h',
        open_on_weekends: "1"
    })

    // // Consultar dados na tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages);

    // // Consultar somente um orfanato pelo ID
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    // console.log(orphanage);

    // // Deletar dados na tabela
    // console.log(await db.run(`DELETE FROM orphanages WHERE id = "4"`))
    // console.log(await db.run(`DELETE FROM orphanages WHERE id = "5"`))
})