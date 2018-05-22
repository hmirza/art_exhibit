function change_picture(id)
{
    if (id == 1) {
        document.getElementById("large_pic_hi").src=document.getElementById("1").src;
        document.getElementById("original_wind_toys_caption").innerHTML = document.getElementById("wind_toys_caption").innerHTML;
        document.getElementById("original_wind_toys_date").innerHTML = document.getElementById("wind_toys_date").innerHTML;
    }

    if (id == 2) {
        document.getElementById("large_pic_hi").src=document.getElementById("2").src;
        document.getElementById("original_wind_toys_caption").innerHTML = document.getElementById("pancakes_caption").innerHTML;
        document.getElementById("original_wind_toys_date").innerHTML = document.getElementById("pancakes_date").innerHTML;
    }

    if (id == 3) {
        document.getElementById("large_pic_hi").src=document.getElementById("3").src;
        document.getElementById("original_wind_toys_caption").innerHTML = document.getElementById("cake_caption").innerHTML;
        document.getElementById("original_wind_toys_date").innerHTML = document.getElementById("cake_date").innerHTML;
    }

    if (id == 4) {
        document.getElementById("large_pic_hi").src=document.getElementById("4").src;
        document.getElementById("original_wind_toys_caption").innerHTML = document.getElementById("3_machines_caption").innerHTML;
        document.getElementById("original_wind_toys_date").innerHTML = document.getElementById("3_machines_date").innerHTML;
    }

    if (id == 5) {
        document.getElementById("large_pic_hi").src=document.getElementById("5").src;
        document.getElementById("original_wind_toys_caption").innerHTML = document.getElementById("boston_caption").innerHTML;
        document.getElementById("original_wind_toys_date").innerHTML = document.getElementById("boston_date").innerHTML;
    }

    if (id == 6) {
        document.getElementById("large_pic_hi").src=document.getElementById("6").src;
        document.getElementById("original_wind_toys_date").innerHTML = document.getElementById("bananas_date").innerHTML;
        document.getElementById("original_wind_toys_caption").innerHTML = document.getElementById("bananas_caption").innerHTML;
    }
}
