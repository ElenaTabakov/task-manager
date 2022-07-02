<?php $fields = get_fields(get_the_ID());
?>

<?php
/*
Template Name: Options trading
*/
?>
<?php get_header(); ?>



<section id="opt-tr-s1">
	<div class="container">
		<div class="row animation-element fadeInUp">
			<div class="col-md-6 intro-text">
				<h1 class="main-ttl"><?php echo the_title(); ?></h1>
				<h2 class="subtitle-intro"><?php echo $fields['subtitle']; ?></h2>
				<div class="intro-content">
					<?php echo $fields['content']; ?>
				</div>
			</div>
			<div class="col-md-6 intro-text">
				<img src="<?php echo $fields['image']['url']; ?>" alt="<?php echo $fields['image']['alt']; ?>">
			</div>
		</div>

</section>
<section id="cta-opt-tr" class="animation-element fadeInUp">
	<div class="container">
		<div class="cta-inner-container" style="background:url(<?php echo $fields['cta_background_img']; ?>)no-repeat center center / cover;">
			<h2 class="ttl-color"><?php echo $fields['color_title_cta']['title_black']; ?> <?php if ($fields['color_title_cta']['title_blue']) : ?> <span class="blue-ttl"><?php echo $fields['color_title_cta']['title_blue']; ?></span><?php endif; ?></h2>
			<?php
			$shortC = $fields['cta_contact_form_shortcode'];
			echo do_shortcode($shortC);
			?>
		</div>
	</div>
</section>
<section id="adv-opt-tr" class="animation-element">
	<div class="container ">
		<h2 class="ttl-color"><?php echo $fields['color_title_reasons']['title_black']; ?> <?php if ($fields['color_title_reasons']['title_blue']) : ?><span class="blue-ttl"><?php echo $fields['color_title_reasons']['title_blue']; ?></span> <?php endif; ?></h2>
		<div class="advs-opt-block">
			<div class="advs-opt-inner">
				<div class="advs-opt row">
					<?php if ($fields['reasons_group']) : ?>
						<?php foreach ($fields['reasons_group'] as $a) { ?>
							<div class="adv-opt-single col-md-3">
								<div class="adv-opt-img-inner">
									<img src="<?php echo $a['icon']['url'] ?>" alt="<?php echo $a['icon']['alt'] ?>">
								</div>
								<span class="title-adv-opt"><?php echo $a['title'] ?></span>
								<span class="short-desription"><?php echo $a['description'] ?></span>
							</div>
						<?php } ?>
					<?php endif; ?>
				</div>
			</div>
		</div>
		<div class="btn-open-acc">
			<a class="open-acc" href="<?php echo $fields['open_account_button']['btn_link'] ?>" <?php if ($fields['open_account_button']['open_in_new_window'][0] == 'Yes') : ?> target="_blank" <?php endif; ?>><?php echo $fields['open_account_button']['btn_text'] ?></a>
		</div>
	</div>
</section>

<section id="about" class="animation-element fadeInUp">
	<div class="container">
		<div class="row about-opt-tr">
			<div class="about-opt-tr-text col-md-6">
				<img class="about-logo" src="<?php echo $fields['about_logo']['url']; ?>" alt="<?php echo $fields['about_logo']['url']; ?>" />
				<div class="text-about-acc"><?php echo $fields['about_content']; ?></div>
				<div class="btn-open-acc">
					<a class="open-acc" href="<?php echo $fields['about_account_button']['btn_link'] ?>" <?php if ($fields['about_account_button']['open_in_new_window'][0] == 'Yes') : ?> target="_blank" <?php endif; ?>><?php echo $fields['about_account_button']['btn_text'] ?></a>
				</div>
			</div>
			<div class="about-opt-tr-text col-md-6">
				<img src="<?php echo $fields['about_left_image']['url']; ?>" alt="<?php echo $fields['about_left_image']['url']; ?>" />
			</div>
		</div>
	</div>
</section>

<section id="statistic-opt-tr">
	<div class="container ">
		<h2 class="ttl-color  animation-element  fadeInUp"><?php echo $fields['color_title_reasons']['title_black']; ?> <?php if ($fields['color_title_reasons']['title_blue']) : ?><span class="blue-ttl"><?php echo $fields['color_title_reasons']['title_blue']; ?></span> <?php endif; ?></h2>
		<div class="statistic-opt-tr-block">
			<div class="statistic-opt-tr-inner">
				<div class="statistic-opt-tr-row row">
					<?php if ($fields['statistics_group_copy']) : ?>
						<?php foreach ($fields['statistics_group_copy'] as $a) { ?>
							<div class="statistic-opt-tr-single col-md-3">
								<div class="statistic-opt-tr-img-inner">
									<img src="<?php echo $a['icon']['url'] ?>" alt="<?php echo $a['icon']['alt'] ?>">
								</div>
								<span class="statistic-opt-tr-opt"><?php echo $a['title'] ?></span>
								<span class="short-desription"><?php echo $a['description'] ?></span>
							</div>
						<?php } ?>
					<?php endif; ?>
				</div>
			</div>
		</div>
</section>

<section id="faq-opt-tr">
	<div class="container ">
		<h2 class="ttl-color  animation-element  fadeInUp"><?php echo $fields['color_title_faq']['title_black']; ?> <?php if ($fields['color_title_faq']['title_blue']) : ?><span class="blue-ttl"><?php echo $fields['color_title_faq']['title_blue']; ?></span> <?php endif; ?></h2>
		<div class="accordion accordion-flush faq-accord" id="faq-accord">
			<div class="statistic-opt-tr-inner">

				<?php if ($fields['statistics_group_copy']) : ?>
					 <?php while( have_rows('slides') ): the_row(); ?>
						<div class="accordion-item">
							<div class="accordion-header" id="flush-<?php echo get_row_index(); ?>">
								<span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
									<?php the_sub_field('title');  ?>
									
								</span>
								<div>
									<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
										<div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
									</div>

								</div>
							 <?php endwhile; ?>
						<?php endif; ?>

							</div>
						</div>
</section>


<script>
	jQuery(document).ready(function($) {

		// Scroll Animation //

		var $animation_elements = $('.animation-element');
		var $window = $(window);

		function check_if_in_view() {
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);

			$.each($animation_elements, function() {
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top;
				var element_bottom_position = (element_top_position + element_height);

				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&
					(element_top_position <= window_bottom_position)) {
					$element.addClass('in-view');
				} else {
					$element.removeClass('in-view');
				}
			});


		}

	});
</script>



<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<link rel='stylesheet' href='/wp-content/themes/inter-ill/css/bootstrap.min.css' type='text/css' media='all' />
<link rel='stylesheet' href='/wp-content/themes/inter-ill/css/bootstrap.rtl.css' type='text/css' media='all' />
<script type='text/javascript' src='/wp-content/themes/inter-ill/js/bootstrap.min.js'></script>
<script type="text/javascript" src="http://www.youtube.com/player_api"></script>
<?php get_footer(); ?>