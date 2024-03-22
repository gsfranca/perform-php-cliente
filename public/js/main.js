        
    tabelaClientes.onload = read("http://localhost:83/app/index.php");

    btnCreate.onclick = function() {create("http://localhost:83/app/index.php");};

    btnSearch.onclick = function() 
    {
        const cliente_id_search = document.getElementById("cliente_id_search").value;
        search(`http://localhost:83/app/index.php?cliente_id=${cliente_id_search}`);
    };
    
    btnDeletee.onclick = function() 
    {
        const cliente_id_delete = document.getElementById("cliente_id_delete").value;
        deletee(`http://localhost:83/app/index.php?cliente_id=${cliente_id_delete}`);
    };

    btnUpdateSearch.onclick = function() 
    {
        const cliente_id_update = document.getElementById("cliente_id_update").value;
        updateSearch(`http://localhost:83/app/index.php?cliente_id=${cliente_id_update}`);
    };

    btnUpdate.onclick = function() 
    {
        const cliente_id_update = document.getElementById("cliente_id_update").value;
        update(`http://localhost:83/app/index.php?cliente_id=${cliente_id_update}`);
    };