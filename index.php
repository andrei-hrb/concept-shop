<?php

include 'vendor/autoload.php';

$pug = new Pug([
    'pretty' => true,
    'expressionLanguage' => 'php'
]);

$pug->displayFile('src/pug/index.pug');
