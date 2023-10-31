<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Music libary</title>
</head>

<body>
    <nav>
        <ul>
            <p>M</p>
            <div>
                <?php
                $menuItems = array("HOME", "ALBUMS", "CONTACT", "LALA");
                for ($i = 0; $i < 4; $i++) {
                    echo '<li><a href="#">' . $menuItems[$i] . '</a></li>';
                }
                ?>
            </div>
        </ul>
    </nav>



    <article class="album">

        <section>
        <h2>Artiesten</h2>
            <?php

            // Inclusief het singles.php-document om gegevens op te halen
            include '../source/singels.php';

            foreach ($musicSingles as $data) {
                include "../source/views/card.php";
            }
            ?>
        </section>
    </article>



</body>

</html>