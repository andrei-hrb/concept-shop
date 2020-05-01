<?php

include_once 'includes/scanJSONFromFolder.php';
include_once 'includes/pugInit.php';

class CasaCreangaAPI
{

    public function displayEditable()
    {
        $content = new scanJSONFromFolder('/api/defaults/');
        $content = $content->getContent();
        $content["editable"] = isset($_GET["editable"]);
        $content["noloading"] = !isset($_GET["noloading"]);
        $content["assets"]["css"] = file_get_contents(__DIR__ . '/private/editable.css');
        $content["assets"]["js"] = file_get_contents(__DIR__ . '/private/editable.js');

        $pug = pugInit();
        $pug->displayFile($_SERVER['DOCUMENT_ROOT'] . "/frontend/src/pug/index.pug", $content);
    }
}
