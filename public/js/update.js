const mUpdate = document.getElementById("mUpdate");
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

        if (data && Object.keys(data).length !== 0) 
        {
            const clienteData = document.getElementById("clienteData")
            clienteData.innerHTML = `

                <!--Campo ID-->
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><text>ID</text></span>
                        <input type="number" class="form-control" aria-label="Username" aria-describedby="basic-addon1" id="cliente_id_update_search" name="cliente_id_update_search" value="${data.cliente_id}" disabled>
                    </div>
                <!--Fim do Campo ID-->

                <!--Campo Nome-->
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><text>Nome</text></span>
                        <input type="name" class="form-control" aria-label="Username" aria-describedby="basic-addon1" id="nome_update" name="nome_update" value="${data.nome}">
                    </div>
                <!--Fim do Campo Nome-->

                <!--Campo Email-->
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><text>Email</text></span>
                        <input type="email" class="form-control" aria-label="Username" aria-describedby="basic-addon1" id="email_update" name="email_update" value="${data.email}">
                    </div>
                <!--Fim do Campo Email-->
             
                <!--Campo Cidade-->
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><text>Cidade</text></span>
                        <input type="city" class="form-control" aria-label="Username" aria-describedby="basic-addon1" id="cidade_update" name="cidade_update" value="${data.cidade}">
                    </div>
                <!--Fim do Campo Cidade-->
                

                <!--Campo Estado-->
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><text>Estado</text></span>
                        <input type="state" class="form-control" aria-label="Username" aria-describedby="basic-addon1" id="estado_update" name="estado_update" value="${data.estado}">
                    </div>
                <!--Fim do Campo Estado-->

            `;
        } 
        else 
        {
            clienteData.innerHTML =  "";
            mUpdate.innerText = "Nenhum cliente encontrado";
        }
    } 
    catch (error) 
    {
        console.error('Falha ao enviar requisição:', error);
        mUpdate.innerText = "Erro ao carregar dados do cliente";
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
            throw new Error('Erro na requisição')        }
        else
        {
            mUpdate.innerText = "Alteração feita";
        }
        
    } 
    catch (error) 
    { 
        console.error('Falha ao enviar requisição:', error);
        mUpdate.innerText = 'Falha ao enviar requisição:', error;
    }
}