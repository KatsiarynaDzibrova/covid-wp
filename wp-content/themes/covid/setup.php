<?php
function c_setup_theme() {
    register_nav_menu('primary', __('Primary Menu', 'covid'));
    add_theme_support( 'custom-logo', array(
        'height'      => 63,
        'width'       => 63,
        'flex-height' => false,
        'flex-width'  => false,
    ) );
}
