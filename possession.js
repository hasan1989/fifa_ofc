function poss() {
    document.getElementById("pass_a").style.display = "none";
    document.getElementById("pass_b").style.display = "none";

    document.getElementById("poss_a").style.display = "block";
    document.getElementById("poss_b").style.display = "block";


    document.getElementById("btn_poss").className = "btn_active";
    document.getElementById("btn_pass").className = "btn_inactive";
};