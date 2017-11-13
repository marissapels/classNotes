<?php

$first="Marissa";
$last="Pels";
$name="$first $last";
$age=26;

echo "My name is $name.\n";
if (strlen($name)>12)
	echo "$name - It's a long name\n";
else
	echo "$name - It's a short name\n";

echo str_repeat('=',30). "\n";

echo "I'm $age years old.\n";

if($age>21)
	echo "Sake! Sake! Sake!\n";
else if($age<21)
	echo "No Sake for me :(\n";
else
	echo "Just slipped by! Sake\n";