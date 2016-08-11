<?php
/**
 * Displays the footer site info.
 *
 * @package Primer
 */
?>

<div class="site-info-wrapper">

	<div class="site-info">

			<div class="site-info-text">

				<?php

				wp_nav_menu(
					array(
						'theme_location' => 'footer',
						'depth'          => 1,
						'fallback_cb'    => false,
					)
				);

				?>

				<?php printf( esc_html_x( 'Built with %1$s by %2$s.', '1. theme name link, 2. theme author link', 'primer' ), '<a href="https://wordpress.org/themes/primer/" rel="designer">Primer</a>', '<a href="https://www.godaddy.com/" rel="designer">GoDaddy</a>' ) ?>

			</div><!-- .site-info-text -->

			<?php get_template_part( 'templates/parts/social-navigation' ); ?>

		</div><!-- .site-info-inner -->

</div><!-- .site-info-wrapper -->
