<?php

function pugInit()
{
    include_once $_SERVER['DOCUMENT_ROOT'] . '/api/vendor/autoload.php';

    return new Pug([
        'pretty' => true,
        'expressionLanguage' => 'php',
        'cache' => $_SERVER['DOCUMENT_ROOT'] . '/api/cache/pug'
    ]);
}
