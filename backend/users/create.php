<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$email = $data['email'];

$stmt = $pdo->prepare("INSERT INTO users (username, email) VALUES (?, ?)");
if ($stmt->execute([$username, $email])) {
    echo json_encode(['message' => 'User created successfully']);
} else {
    echo json_encode(['error' => 'User creation failed']);
}
