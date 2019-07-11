import $ from "jquery";
import "../css/style.scss";
import img from "../css/webpack.png";

//console.log(img);

$(() => {
    $("#chme").click(() => {
        const cover_heading = $(".cover-heading");
        const hello_webpack = "Hello use webpack";
        const yello_clsss = $(".yellow_class");
        if (cover_heading.text() == hello_webpack) {
            cover_heading
                .addClass("yellow_class")
                .text(hello_webpack + " now!!");
        } else if (yello_clsss.length) {
            yello_clsss.html(`<span>${hello_webpack}</span>`);
        } else {
            cover_heading.text(hello_webpack);
        }
    });
});
