import introVideo from "../../img/production ID_4204900.mp4";

const Video = () => {

    return (
        <video autoPlay muted loop width="100%"  id="myVideo">
            <source src={introVideo} type="video/mp4"/>
        </video>
    )
}
export default Video;