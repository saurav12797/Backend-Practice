

  const videoGrid=document.getElementById('video-grid'); // getting video to room.ejs
const myVideo=document.createElement('video'); //creatig video object without html
myVideo.muted=true; //intally i will mute video



/* javascript for front end */
let myVideoStream;
navigator.mediaDevices.getUserMedia({    //allows to get audio and video from chrome

video :true,
Audio:true,


}).then(stream=>{      // stram is kind of video and audio and we save it in myvideo stream

    myVideoStream=stream;
   AddVideoStream(myVideo,stream);

})


const AddVideoStream=(video,stream)=> {

    video.srcObject=stream;   //to play the stream
    video.addEventListener('loadedmetadata',()=>{

        video.play();
    })

    videoGrid.append(video);

}
