<?php
/*
 * Plugin Name: Covid
 * Description: Custom blocks for content, receiving users questions and sending answers
 * Version: 1.0
 * Author: Me
 * Text Domain: covid
 */

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
    echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
    exit;
}

// Setup
define( 'COVID_PLUGIN_URL', __FILE__ );

// Includes
include('includes/activate.php');
include('blocks/enqueue.php');

// Hooks
register_activation_hook(__FILE__, 'c_activate');
add_action('enqueue_block_editor_assets', 'r_enqueue_block_editor_assets');
add_action('enqueue_block_assets', 'r_enqueue_block_assets');