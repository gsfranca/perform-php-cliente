const mUpdate = document.getElementById("mEdit");
const btnUpdate = document.getElementById("btnUpdate");
const btnUpdateSearch = document.getElementById("btnUpdateSearch");

async function updateSearch(urli)
{
    try 
    {
        const response = await fetch(urli, 
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) 
        {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        if (data) 
        {
            const clienteData = document.getElementById("clienteData")
            clienteData.innerHTML = `
                <label for="nome_update">Nome:</label>
                <input type="text" id="cliente_id_update_search" name="cliente_id_update_search" value="${data.cliente_id}" disabled><br>

                <label for="nome_update">Nome:</label>
                <input type="text" id="nome_update" name="nome_update" value="${data.nome}"><br>

                <label for="email_update">Email:</label>
                <input type="email" id="email_update" name="email_update" value="${data.email}"><br>

                <label for="cidade_update">Cidade:</label>
                <input type="text" id="cidade_update" name="cidade_update" value="${data.cidade}"><br>

                <label for="estado_update">Estado:</label>
                <input type="text" id="estado_update" name="estado_update" value="${data.estado}"><br>
            `;
        } 
        else 
        {
            mSearch.innerText = "Nenhum cliente encontrado";
            tabelaCliente.innerHTML = ""; 
        }
    } 
    catch (error) 
    {
        console.error('Falha ao enviar requisição:', error);
    }
}
async function update(urli) 
{
    const nome = document.getElementById('nome_update').value;
    const email = document.getElementById('email_update').value;
    const cidade = document.getElementById('cidade_update').value;
    const estado = document.getElementById('estado_update').value;

    const data = 
    {
        nome: nome,
        email: email,
        cidade: cidade,
        estado: estado
    };

    try 
    {
        const response = await fetch(urli, 
        {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
        });

        if (!response.ok) 
        {
            throw new Error('Erro na requisição')
        }
        else
        {
            mCreate.innerText = "Alteração feita";
        }
        
    } 
    catch (error) 
    { 
        console.error('Falha ao enviar requisição:', error);
    }
}