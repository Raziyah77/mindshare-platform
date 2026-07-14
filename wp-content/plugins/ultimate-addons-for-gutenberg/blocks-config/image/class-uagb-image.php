<?php
/**
 * UAGB Post.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Image' ) ) {

	/**
	 * Class UAGB_Image.
	 */
	class UAGB_Image {


		/**
		 * Member Variable
		 *
		 * @since 2.0.0
		 * @var instance
		 */
		private static $instance;


		/**
		 *  Initiator
		 *
		 * @since 2.0.0
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'register_blocks' ) );
			add_filter( 'render_block_uagb/image', array( $this, 'sanitize_block_output' ) );
		}

		/**
		 * Register the Image block on server.
		 *
		 * @since 2.0.0
		 */
		public function register_blocks() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			register_block_type(
				'uagb/image',
				array(
					'supports' => array(
						'color' => array(
							'__experimentalDuotone' => 'img',
							'text'                  => false,
							'background'            => false,
						),
					),
				)
			);
		}

		/**
		 * Sanitize the rendered block output to strip any injected event handlers.
		 *
		 * Runs wp_kses_post() on the final HTML so malicious attributes (onload,
		 * onfocus, etc.) injected via crafted block markup in the Code Editor cannot
		 * reach the frontend, regardless of how they survived post-save filtering.
		 *
		 * @since x.x.x
		 * @param string $block_content Rendered block HTML.
		 * @return string Sanitized HTML.
		 */
		public function sanitize_block_output( $block_content ) {
			return wp_kses_post( $block_content );
		}
	}

	/**
	 *  Prepare if class 'UAGB_Image' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Image::get_instance();
}
