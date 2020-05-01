<?php

include_once "api/index.php";

$ccapi = new CasaCreangaAPI();

echo $ccapi->displayPart('heading');

// include 'vendor/autoload.php';

// $pug = new Pug([
//     'pretty' => true,
//     'expressionLanguage' => 'php',
//     'cache' => __DIR__ . '/cache/pug'
// ]);

// $defaults = new scanJSONFromFolder('/defaults/');
// $overwrites = new scanJSONFromFolder('/cache/overwrites/');

// $content = array_replace($defaults->getContent(), $overwrites->getContent());

// $pug->displayFile('src/pug/index.pug', $content);
