<?php

$age=26;

$nameList = [
	'Whitney' => 'Wong',
	'Marissa' => 'Pels'
];

echo "The first command-line argument is $argv[1].\n";

foreach ($nameList as $first => $last){
	echo "My name is $first $last.\n";
	if (strlen("$first $last") >11){
		echo "$first $last - It's a long name\n";
	}
	else {
		echo "$first $last - It's a short name\n";
	}
}