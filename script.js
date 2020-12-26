const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element and then play
async function SelectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){

    }
}

button.addEventListener('click', async () =>{
    //Disable button
    button.disabled = true; 
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
});

//On load
SelectMediaStream();