<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

session_start();
require_once '../config/db.php'; // koneksi database

$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

// Validasi input
if (empty($username) || empty($password)) {
    echo json_encode(['success' => false, 'message' => 'Username dan password wajib diisi']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$username]);
$user = $stmt->fetch();

if ($user && hash('sha256', $password) === $user['password']) {
    $_SESSION['user'] = [
        'id' => $user['id'],
        'username' => $user['username'],
        'role' => $user['role']
    ];
    echo json_encode(['success' => true, 'role' => $user['role']]);
} else {
    echo json_encode(['success' => false, 'message' => 'Login gagal']);
}
