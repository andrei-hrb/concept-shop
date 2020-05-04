<?php

include_once 'includes/scanJSONFromFolder.php';
include_once 'includes/pugInit.php';
class CasaCreangaAPI
{

    public function getData($editable = false)
    {
        $output = [];

        $contentD = new scanJSONFromFolder('/api/defaults/');
        $contentD = $contentD->getContent();

        $contentDb = new scanJSONFromFolder('/api/cache/database/');
        $contentDb = $contentDb->getContent();

        if ($editable) {
            $contentO = new scanJSONFromFolder('/api/cache/overwrite/');
            $contentO = $contentO->getContent();
        }

        $output = (array_merge($contentD, $contentDb, ($editable ? $contentO : null)));

        return $output;
    }

    public function displayEditable()
    {
        $editable = isset($_GET["editable"]);

        $content = $this->getData($editable);

        if ($editable) {
            $contentD = new scanJSONFromFolder('/api/defaults/');
            $contentD = $contentD->getContent();
            $content["json"]["default"] = json_encode($contentD);

            $contentDb = new scanJSONFromFolder('/api/cache/database/');
            $contentDb = $contentDb->getContent();
            $content["json"]["database"] = json_encode($contentDb);

            $contentO = new scanJSONFromFolder('/api/cache/overwrite/');
            $contentO = $contentO->getContent();
            $content["json"]["overwrite"] = json_encode($contentO);
        }

        $content["editable"] = $editable;
        $content["noloading"] = !isset($_GET["noloading"]);
        $content["assets"]["css"] = file_get_contents(__DIR__ . '/private/css/editable.css');
        $content["assets"]["js"] =
            file_get_contents(__DIR__ . '/private/js/loadingAnimation.js')
            . file_get_contents(__DIR__ . '/private/js/removeHref.js')
            . file_get_contents(__DIR__ . '/private/js/byString.js')
            . file_get_contents(__DIR__ . '/private/js/getHTMLForEditor.js')
            . file_get_contents(__DIR__ . '/private/js/selectAnElement.js')
            . file_get_contents(__DIR__ . '/private/js/editAnElement.js')
            . file_get_contents(__DIR__ . '/private/js/addAnElement.js')
            . file_get_contents(__DIR__ . '/private/js/scrollToLoad.js');

        $pug = pugInit();
        $pug->displayFile($_SERVER['DOCUMENT_ROOT'] . "/frontend/src/pug/index.pug", $content);
    }
}
