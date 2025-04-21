<?php
$host = "localhost";
$user = "root";
$password = "yourpassword";
$dbname = "social_network";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
