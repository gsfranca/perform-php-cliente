const mCreate = document.getElementById("mCreate");
const btnCreate = document.getElementById("btnCreate");

async function create(urli) 
{
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

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
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
        });

        if (!response.ok) 
        {
            throw new Error('Erro na requisição')
        }
        else
        {
            mCreate.innerText = "Cadastro feito";
        }
        
    } 
    catch (error) 
    { 
        console.error('Falha ao enviar requisição:', error);
    }
}