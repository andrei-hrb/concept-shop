<?php

include_once 'scanJSONFromFolder.php';

function checkIfPartExists($part)
{
    $defaultsFiles = new scanJSONFromFolder('/defaults');
    $defaultsFiles = $defaultsFiles->getFiles();
    $exists = false;
    foreach ($defaultsFiles as $file) {
        if (strpos($file, $part) !== false) {
            $exists = true;
            break;
        }
    }

    if (!$exists) {
        die("Error: The part that you've provided doesn't exist — CasaCreangaAPI/index.php/displayPart($part)");
    }
}
