<?php

include_once 'includes/scanJSONFromFolder.php';
include_once 'includes/pugInit.php';
include_once 'includes/checkIfPartExists.php';

class CasaCreangaAPI
{

    public function displayEditable()
    {
        $content = new scanJSONFromFolder('/api/defaults/');
        $content = $content->getContent();
        $content["editable"] = isset($_GET["editable"]);
        $content["noloading"] = !isset($_GET["noloading"]);

        $pug = pugInit();
        $pug->displayFile($_SERVER['DOCUMENT_ROOT'] . "/frontend/src/pug/index.pug", $content);
    }
}
