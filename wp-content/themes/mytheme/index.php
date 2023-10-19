<?php
// Header
get_header();
?>

<!-- Isi Konten -->
<main id="main-content">
    <?php
    // Bagian Section Home
    get_template_part('home-section');
    ?>

    <?php
    // Bagian Section Service
    get_template_part('service-section');
    ?>

    <?php
    // Bagian Section Contact
    get_template_part('contact-section');
    ?>
</main>

<?php
// Footer
get_footer();
?>