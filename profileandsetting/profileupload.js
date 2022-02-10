//declaring html elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on the profile pic
imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block"
});

//if user hover out from the profile pic
imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none"
});

//image functionality

//when we choose photo to upload 
file.addEventListener('change', function(){
    //this references to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        //filereader is predefined function of js
        const reader = new FileReader();

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});