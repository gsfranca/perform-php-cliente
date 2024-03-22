const mRead = document.getElementById("mRead");
const tabelaClientes = document.getElementById("tabelaClientes");


async function read(urli) 
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

        if (data.length > 0) {

            const tbodyRead = document.getElementById("tbodyRead")
            tbodyRead.innerHTML = "";
            
            data.forEach(
            cliente => 
            {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${cliente.cliente_id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.cidade}</td>
                    <td>${cliente.estado}</td>
                `;
                tbodyRead.appendChild(tr);
            });
        } 
        else 
        {
            mRead.innerText = "Nenhum cliente encontrado";
            tabelaClientes.innerHTML = ""; 
        }
    } 
    catch (error) 
    {
        console.error('Falha ao enviar requisição:', error);
    }
}