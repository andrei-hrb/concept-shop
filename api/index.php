<?php

include_once 'includes/scanJSONFromFolder.php';
include_once 'includes/pugInit.php';
include_once 'includes/checkIfPartExists.php';

class CasaCreangaAPI
{

    public function displayPart($part)
    {
        checkIfPartExists($part);
        $content = new scanJSONFromFolder('/defaults/');
        $content = $content->getContent();

        $pug = pugInit();
        $pug->displayFile($_SERVER['DOCUMENT_ROOT'] . "/src/pug/includes/$part.pug", $content);
    }
}
