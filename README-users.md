## HISTÓRIA DO USUÁRIO: 

===# CRUD DE USUÁRIOS #==
criar relacionamentos

## OneToMany com agendamentos: 
criar endpoint para retornar: User {
    users_id: 1,
    users_name: 'wanderson',
    users_email: 'wanderson@gmail.com',
    agendamentos: [
        agendamento_id: 1,
        agendamento_name: 'fisioterapia',
        agendamento_date: '2022-10-12'
    ]
}
Um usuário poderá ter mais de um agendamento no mês, desde que as datas-horários não conflitem.

O usuário poderá cancelar agendamentos(ativar/desativar), caso isso aconteça, criar um array de agendamentos cancelados(desativados), para alerta-lo com a alguma mensagem.