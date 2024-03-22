<?php
namespace App\Model;
class Cliente{
    private int $cliente_id;
    private String $nome;
    private String $email;
    private String $cidade;
    private String $estado;
    public function __construct() {
        
    }

    /**
     * Get the value of cliente_id
     */
    public function getClienteId(): int
    {
        return $this->cliente_id;
    }

    /**
     * Set the value of cliente_id
     */
    public function setClienteId(int $cliente_id): self
    {
        $this->cliente_id = $cliente_id;

        return $this;
    }

    /**
     * Get the value of nome
     */
    public function getNome(): String
    {
        return $this->nome;
    }

    /**
     * Set the value of nome
     */
    public function setNome(String $nome): self
    {
        $this->nome = $nome;

        return $this;
    }

    /**
     * Get the value of email
     */
    public function getEmail(): String
    {
        return $this->email;
    }

    /**
     * Set the value of email
     */
    public function setEmail(String $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of cidade
     */
    public function getCidade(): String
    {
        return $this->cidade;
    }

    /**
     * Set the value of cidade
     */
    public function setCidade(String $cidade): self
    {
        $this->cidade = $cidade;

        return $this;
    }

    /**
     * Get the value of estado
     */
    public function getEstado(): String
    {
        return $this->estado;
    }

    /**
     * Set the value of estado
     */
    public function setEstado(String $estado): self
    {
        $this->estado = $estado;

        return $this;
    }
}