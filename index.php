<?php

include 'vendor/autoload.php';
include 'defaults/index.php';

$pug = new Pug([
    'pretty' => true,
    'expressionLanguage' => 'php'
]);

$defaults = new Defaults();

$pug->displayFile('src/pug/index.pug', $defaults->getDefaults());
