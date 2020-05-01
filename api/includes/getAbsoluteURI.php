<?php

function getAbsoluteURI($file = null)
{
    $output = "";
    $output .= isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== "off" ? "https" : "http";
    $output .= "://";
    $output .= $_SERVER['SERVER_NAME'];
    $output .= isset($_SERVER['SERVER_PORT']) ? ":" . $_SERVER['SERVER_PORT'] : "";
    $output .= $file;

    return $output;
}
