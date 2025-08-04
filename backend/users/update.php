<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['user_id'];
$username = $data['username'];
$email = $data['email'];

$stmt = $pdo->prepare("UPDATE users SET username = ?, email = ? WHERE user_id = ?");
if ($stmt->execute([$username, $email, $id])) {
    echo json_encode(['message' => 'User updated successfully']);
} else {
    echo json_encode(['error' => 'Update failed']);
}
