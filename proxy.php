<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$apiToken = '097a10c756d8414bab6f4d152de93b41';
$url = 'https://api.football-data.org/v4/competitions/BSA/standings';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'X-Auth-Token: ' . $apiToken
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($httpCode);
echo $response;
?>
