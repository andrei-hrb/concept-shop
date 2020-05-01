<?php

class Defaults
{

    private $content;
    private $dir;

    public function __construct()
    {
        $this->content = [];
        $this->dir = array_slice(scandir(__DIR__ . '/parts'), 2);
    }

    private function setContent()
    {
        foreach ($this->dir as $file) {
            $fileName = str_replace(".json", "", $file);
            $fileContent = json_decode(file_get_contents(__DIR__ . "/parts/" . $file));

            $this->content[$fileName] = $fileContent;
        }
    }

    public function getDefaults()
    {
        $this->setContent();

        return $this->content;
    }
}
