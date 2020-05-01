<?php

include 'vendor/autoload.php';
include 'defaults/index.php';

$pug = new Pug([
    'pretty' => true,
    'expressionLanguage' => 'php',
    'cache' => __DIR__ . '/cache/pug'
]);

$defaults = new Defaults();

$pug->displayFile('src/pug/index.pug', $defaults->getDefaults());
