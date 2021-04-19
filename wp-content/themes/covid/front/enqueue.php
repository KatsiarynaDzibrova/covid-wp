<?php

function c_enqueue() {
    $uri = get_theme_file_uri();
    $ver = time();

    wp_register_style('c_google_fonts',
        'https://fonts.googleapis.com/css?family=Red+Hat+Display:400', [], $ver);
    wp_register_style('c_bootstrap',
        'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css', [], $ver);
    wp_register_style('c_style',
        $uri . '/assets/css/custom-style.css', [], $ver);

    wp_enqueue_script('jquery');
    wp_enqueue_style('c_google_fonts');
    wp_enqueue_style('c_style');
    wp_enqueue_style('c_bootstrap');
    wp_enqueue_script( 'modal', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', ['jquery'], null, true );
    wp_enqueue_script( 'ajax', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', ['jquery'], null, true );
}