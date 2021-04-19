<?php
function r_enqueue_block_editor_assets() {
    wp_register_script(
        'c_blocks_bundle',
        plugins_url('/blocks/dist/bundle.js', COVID_PLUGIN_URL),
        ['wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor'],
        filemtime(plugin_dir_path(COVID_PLUGIN_URL) . '/blocks/dist/bundle.js')
    );

    wp_enqueue_script('c_blocks_bundle');
}

function r_enqueue_block_assets() {

}