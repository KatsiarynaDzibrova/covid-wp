<?php

// Includes
include('front/enqueue.php');
include('setup.php');

// Hooks
add_action('wp_enqueue_scripts', 'c_enqueue');
add_action('after_setup_theme', 'c_setup_theme');
