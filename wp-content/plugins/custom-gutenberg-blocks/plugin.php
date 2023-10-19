<?php

/**
 * Plugin Name: Custom Gutenberg Blocks
 * Description: Custom Gutenberg Blocks for Your Site
 * Version: 1.0
 * Author: Widyadnyana
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Register blocks using the gutenberg_block_init hook.
add_action('init', 'custom_gutenberg_blocks_register_blocks');

function custom_gutenberg_blocks_register_blocks()
{
    // Register Block 1
    register_block_type(
        'custom-gutenberg-blocks/block-1',
        array(
            'editor_script' => 'custom-gutenberg-blocks-scripts',
        )
    );

    // Register Block 2
    register_block_type(
        'custom-gutenberg-blocks/block-2',
        array(
            'editor_script' => 'custom-gutenberg-blocks-scripts',
        )
    );

    // Register Block 3
    register_block_type(
        'custom-gutenberg-blocks/block-3',
        array(
            'editor_script' => 'custom-gutenberg-blocks-scripts',
        )
    );

    // Register Block 4
    register_block_type(
        'custom-gutenberg-blocks/block-4',
        array(
            'editor_script' => 'custom-gutenberg-blocks-scripts',

        )
    );
}

// Enqueue scripts for the editor.
add_action('init', 'custom_gutenberg_blocks_register_blocks');

function custom_gutenberg_blocks_editor_assets()
{
    wp_enqueue_script(
        'custom-gutenberg-blocks-scripts',
        plugin_dir_url(__FILE__) . 'blocks/scripts.js',
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'bootstrap'),
        filemtime(plugin_dir_path(__FILE__) . 'blocks/scripts.js'),
        true
    );
}

add_action('enqueue_block_editor_assets', 'custom_gutenberg_blocks_editor_assets');


