<?php
namespace App;
require "../vendor/autoload.php";
use App\Model\Cliente;
use App\Repository\ClienteRepository;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

switch ($_SERVER['REQUEST_METHOD']) 
{
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));

        if (!isValid($data)) 
        {
            http_response_code(400);
            echo json_encode(["error" => "Dados de entrada inválidos."]);
            break;
        }

        $cliente = new Cliente();
        
        $cliente
        ->setNome($data->nome)
        ->setEmail($data->email)
        ->setCidade($data->cidade)
        ->setEstado($data->estado);

        $repository = new ClienteRepository();
        $success = $repository->insertCliente($cliente);
        if ($success) 
        {
            http_response_code(200);
            echo json_encode(["message" => "Dados inseridos com sucesso."]);
        } 
        else 
        {
            http_response_code(500);
            echo json_encode(["message" => "Falha ao inserir dados."]);
        }
        break;

        case 'PUT':
            $data = json_decode(file_get_contents("php://input"));
            
            if (!isValid($data)) 
            {
                http_response_code(400);
                echo json_encode(["error" => "Dados de entrada inválidos."]);
                break;
            }
            
            $cliente = new Cliente();
        
            $cliente_id = filter_input(INPUT_GET, 'cliente_id', FILTER_VALIDATE_INT);
            
            if ($cliente_id === false) 
            {
                http_response_code(400); 
                echo json_encode(['error' => 'O valor do ID fornecido não é um inteiro válido.']);
                exit;
            } 
            else 
            {
                $cliente
                    ->setNome($data->nome)
                    ->setEmail($data->email)
                    ->setCidade($data->cidade)
                    ->setEstado($data->estado);
            }
        
            $repository = new ClienteRepository();
            if ($repository->updateCliente($cliente, $cliente_id)) 
            {
                http_response_code(200);
                echo json_encode(["message" => "Dados alterados com sucesso."]);
            } 
            else 
            {
                http_response_code(404);
                echo json_encode(["message" => "Cliente não encontrado."]);
            }
            break;    

    case 'GET':
        $cliente = new Cliente();
        $repository = new ClienteRepository();
        if (isset($_GET['cliente_id'])) 
        {
            $cliente_id = filter_input(INPUT_GET, 'cliente_id', FILTER_VALIDATE_INT);
                if ($cliente_id === false) 
                {
                    http_response_code(400); 
                    echo json_encode(['error' => 'O valor do ID fornecido não é um inteiro válido.']);
                    exit;
                } else {
                    $cliente = new Cliente();
                    $repository = new ClienteRepository();
                    $cliente->setClienteId($cliente_id);
                    $result = $repository->getById($cliente);
                }
            } 
            else 
            {
                $result = $repository->getAll();
            }

        if ($result) 
        {
            http_response_code(200);
            echo json_encode($result);
        } 
        else 
        {
            http_response_code(404);
            echo json_encode(["message" => "Nenhum dado encontrado."]);
        }
        break;

        case 'DELETE':
            $repository = new ClienteRepository();
        
            if (isset($_GET['cliente_id'])) 
            {
                $cliente_id = filter_input(INPUT_GET, 'cliente_id', FILTER_VALIDATE_INT);

                if ($cliente_id === false) 
                {
                    http_response_code(400); 
                    echo json_encode(['error' => 'O valor do ID fornecido não é um inteiro válido.']);
                    exit;
                } 

                else 
                {
                    $cliente = new Cliente();
                    $cliente->setClienteId($cliente_id);
                    $result = $repository->deleteCliente($cliente);
                    if ($result) 
                    {
                        http_response_code(200);
                        echo json_encode(["message" => "Cliente excluído com sucesso."]);
                    } 
                    else 
                    {
                        http_response_code(404);
                        echo json_encode(["message" => "Cliente não encontrado."]);
                    }
                }
            } 
            else 
            {
                http_response_code(400);
                echo json_encode(["error" => "ID do cliente não foi fornecido."]);
            }
            break;
        
        default:
            http_response_code(405);
            echo json_encode(["error" => "Método não permitido."]);
            break;
}

function isValid($data) 
{
    $requiredFields = ['nome', 'email', 'cidade', 'estado'];
    foreach ($requiredFields as $field) 
    {
        if (!isset($data->$field) || empty($data->$field)) 
        {
            return false;
        }
    }
    return true;
}
