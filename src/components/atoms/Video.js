import React from 'react'
import styled from 'styled-components';


const SThumb = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.4;
  filter: brightness(0.7);
  transition: opacity 400ms ease 0ms;
`





const Video = ({thumb, src, header}) => {
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const SVideo = styled.video`
        opacity: ${isVideoLoaded ? 1 : 0};
        width: 100%;
    `

   const SVideoHeader = styled(SVideo)`
        opacity: 0.4;
        filter: brightness(0.7);  
    `
    

  return (
      <>
        <SThumb
          src={thumb}
          className="video-thumb tiny"
          alt="thumb"
          style={{ opacity: isVideoLoaded ? 0 : 1 }}
        />
        { header ? <SVideoHeader
          autoPlay
          playsInline
          muted
          src={src}
          onLoadedData={onLoadedData}
          loop
          style={{ opacity: isVideoLoaded ? 1 : 0, width: '100%' }}
        /> : <SVideo
        autoPlay
        playsInline
        muted
        src={src}
        onLoadedData={onLoadedData}
        loop
        style={{ opacity: isVideoLoaded ? 1 : 0, width: '100%' }}
      />}
        
      </>
    );
  };

  export default Video