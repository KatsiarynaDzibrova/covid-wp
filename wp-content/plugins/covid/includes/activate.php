<?php
function c_activate() {
    if(version_compare(get_bloginfo('version'), '5.0', '<')) {
        wp_die('Must update Wordpress to 5.0 or higher');
    }
}