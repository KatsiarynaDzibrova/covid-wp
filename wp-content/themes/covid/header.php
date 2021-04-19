<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="header">
    <div class="row">
        <div id="logo" class="col-xs-6 col-md-4">
            <?php
            if(has_custom_logo()) {
            $custom_logo_id = get_theme_mod( 'custom_logo' );
            $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
            ?>
            <div class="logo-img">
                <?php the_custom_logo(); ?>
            </div>
            <?php
            }
            ?>
            <div class="logo-title">
                <a href="<?php echo home_url('/'); ?>" class="standard-logo">
                    <?php echo get_bloginfo('name'); ?>
                </a>
            </div>
        </div>
        <div class="col-xs-12 col-md-8">
            <?php if (has_nav_menu('primary')) : ?>
                <nav id="site-navigation">
                    <?php
                    wp_nav_menu(
                        array(
                            'theme_location' => 'primary',
                            'container_class' => false,
                            'fallback_cb' => false,
                            'depth' => 1
                        )
                    );
                    ?>
                </nav>
            <?php endif; ?>
        </div>
</header>
