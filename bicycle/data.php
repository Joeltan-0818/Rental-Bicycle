<?php
    $host="127.0.0.1";
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "rent";

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $card_number = $_POST['card_number'];
    $rental_date = $_POST['rental_date'];
    $return_date = $_POST['return_date'];
    $cvv = $_POST['cvv'];

    // Insert data into database
    $sql = "INSERT INTO payments (name, phone, address, card_number, rental_date, return_date, cvv)
    VALUES ('$name', '$phone', '$address', '$card_number', '$rental_date', '$return_date', '$cvv')";

    if ($conn->query($sql) === TRUE) {

        echo "<script>alert('Checkout complete');</script>";

        echo "<script>window.setTimeout(function(){ window.location.href = 'index.html'; }, 1000);</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>