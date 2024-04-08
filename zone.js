// function sevenwonder() {
    function sevenwonder() {
        images =
            [
                {
                    
                    "img1": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                    "img2": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                    "img3": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                    "img4": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh"
                    },

                {
                    "img1": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                    "img2": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                    "img3": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",    
                }

            ]

        var print = "";
        for (var i in images) {
            print +=

                `
    <img src="${images[i].img1}" alt="" width="200px" height="200px">
    <img src="${images[i].img2}" alt="" width="200px" height="200px">
    <img src="${images[i].img3}" alt="" width="200px" height="200px">
    <img src="${images[i].img4}" alt="" width="200px" height="200px">

        `
        }
        document.getElementById("show_data").innerHTML = print;
    }



function north() {
    images =
        [
            {
                "img1": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                "img2": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                "img3": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                "img4": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh"
            }
        ]
    var print = "";
    for (var i in images) {
        print +=
            `
<img src="${images[i].img1}" alt="" width="300px" height="300px">
<img src="${images[i].img2}" alt="" width="300px" height="300px">
<img src="${images[i].img3}" alt="" width="300px" height="300px">
<img src="${images[i].img4}" alt="" width="300px" height="300px">

    `
    }
    document.getElementById("show_data").innerHTML = print;
}


function east() {
    images =
        [
            {
                "img1": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                "img2": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                "img3": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                "img4": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh"
            }
        ]
    var print = "";
    for (var i in images) {
        print +=
            `
<img src="${images[i].img1}" alt="" width="300px" height="300px">
<img src="${images[i].img2}" alt="" width="300px" height="300px">
<img src="${images[i].img3}" alt="" width="300px" height="300px">
<img src="${images[i].img4}" alt="" width="300px" height="300px">

    `
    }
    document.getElementById("show_data").innerHTML = print;
}


function west() {
    images =
        [
            {
                "img1": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                "img2": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                "img3": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh",
                "img4": src = "https://source.unsplash.com/600x600/?monuments,pakistan,sindh"
            }
        ]
    var print = "";
    for (var i in images) {
        print +=
            `
<img src="${images[i].img1}" alt="" width="300px" height="300px">
<img src="${images[i].img2}" alt="" width="300px" height="300px">
<img src="${images[i].img3}" alt="" width="300px" height="300px">
<img src="${images[i].img4}" alt="" width="300px" height="300px">

    `
    }
    document.getElementById("show_data").innerHTML = print;
}


function south() {
    images =
        [
            {
                "img1": src = "https://source.unsplash.com/600x600/?monuments,france",
                "img2": src = "https://source.unsplash.com/600x600/?monuments,america",
                "img3": src = "https://source.unsplash.com/600x600/?monuments,saudia",
                "img4": src = "https://source.unsplash.com/600x600/?monuments,iraq"
            }
        ]
    var print = "";
    for (var i in images) {
        print +=
            `
<img src="${images[i].img1}" alt="" width="300px" height="300px">
<img src="${images[i].img2}" alt="" width="300px" height="300px">
<img src="${images[i].img3}" alt="" width="300px" height="300px">
<img src="${images[i].img4}" alt="" width="300px" height="300px">

    `
    }
    document.getElementById("show_data").innerHTML = print;
}
