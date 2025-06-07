<?php
// Configurações do Banco de Dados
define('DB_HOST', 'localhost');
define('DB_USER', 'seu_usuario');
define('DB_PASS', 'sua_senha');
define('DB_NAME', 'seu_banco');

// Configurações do Site
define('SITE_URL', 'https://seudominio.com');
define('SITE_NAME', 'Anel de Salomão');

// Configurações de Timezone
date_default_timezone_set('America/Sao_Paulo');

// Configurações de Erro (desativar em produção)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Conexão com o banco de dados
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8",
        DB_USER,
        DB_PASS
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Erro na conexão: " . $e->getMessage());
}
?> 