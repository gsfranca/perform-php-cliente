const mDeletee = document.getElementById("mDeletee");
const btnDeletee = document.getElementById("btnDeletee");

async function deletee(urli) 
{    
    try 
    {
        const response = await fetch(urli, 
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) 
        {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        if (data) 
        {
            mDeletee.innerText = "Cliente excluido.";
        } 
        else 
        {
            mDeletee.innerText = "Nenhum cliente encontrado";
        }
    } 
    catch (error) 
    {
        console.error('Falha ao enviar requisição:', error);
    }
}
