<?php

function pugInit()
{
    include_once 'vendor/autoload.php';

    return new Pug([
        'pretty' => true,
        'expressionLanguage' => 'php',
        'cache' => __DIR__ . '/cache/pug'
    ]);
}
