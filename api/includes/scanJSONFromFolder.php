<?php

include_once 'getAbsoluteURI.php';

class scanJSONFromFolder
{

    private $content;
    private $dir;
    private $dirc;

    public function __construct($dir)
    {
        $this->content = [];
        $this->dir = $dir;
        $this->dirc = array_slice(scandir($_SERVER['DOCUMENT_ROOT'] . $dir), 2);
    }

    private function setContent()
    {
        foreach ($this->dirc as $file) {
            if (strpos($file, '.json') === false) continue;

            $fileName = str_replace(".json", "", $file);
            $fileContent = json_decode(
                str_replace(
                    '/public',
                    getAbsoluteURI('/public'),
                    file_get_contents($_SERVER['DOCUMENT_ROOT'] . $this->dir . $file)
                )
            );

            $this->content[$fileName] = $fileContent;
        }
    }

    public function getContent()
    {
        $this->setContent();

        return $this->content;
    }

    public function getFiles()
    {
        return $this->dirc;
    }
}
