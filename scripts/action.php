<?php
echo "Hi" . htmlspecialchars($_POST['name']);
echo "You are" . (int)$_POST['age'] . "years old.";
?>
