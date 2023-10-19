<?php
// Header
get_header();
?>

<!-- Isi Konten -->
<main id="service-content">
    <?php
    // Bagian Konten Service
    get_template_part('service-section');
    ?>

    <?php
    // Bagian Konten Service
    get_template_part('service-uptime-section');
    ?>


    <?php
    // Bagian Konten Service
    get_template_part('contact-section');
    ?>
</main>

<?php
// Footer
get_footer();
?>