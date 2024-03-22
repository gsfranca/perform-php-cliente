const mSearch = document.getElementById("mSearch");
const btnSearch = document.getElementById("btnSearch");
const tabelaCliente = document.getElementById("tabelaCliente");

async function search(urli) 
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
            const tbodySearch = document.getElementById("tbodySearch")
            tbodySearch.innerHTML = "";

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${data.cliente_id}</td>
                <td>${data.nome}</td>
                <td>${data.email}</td>
                <td>${data.cidade}</td>
                <td>${data.estado}</td>

            `;
            tbodySearch.appendChild(tr);
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
