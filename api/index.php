<?php

include_once 'includes/scanJSONFromFolder.php';
include_once 'includes/pugInit.php';
class CasaCreangaAPI
{

    public function displayEditable()
    {
        $content = new scanJSONFromFolder('/api/defaults/');
        $content = $content->getContent();
        $content["json"] = json_encode($content);
        $content["editable"] = isset($_GET["editable"]);
        $content["noloading"] = !isset($_GET["noloading"]);
        $content["assets"]["css"] = file_get_contents(__DIR__ . '/private/css/editable.css');
        $content["assets"]["js"] =
            file_get_contents(__DIR__ . '/private/js/loadingAnimation.js')
            . file_get_contents(__DIR__ . '/private/js/removeHref.js')
            . file_get_contents(__DIR__ . '/private/js/byString.js')
            . file_get_contents(__DIR__ . '/private/js/editAnElement.js')
            . file_get_contents(__DIR__ . '/private/js/scrollToLoad.js');

        $pug = pugInit();
        $pug->displayFile($_SERVER['DOCUMENT_ROOT'] . "/frontend/src/pug/index.pug", $content);
    }
}
