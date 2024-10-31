/*
  Optimizing Images with the NextJS Image Component
  - now, we are using the <img> for the logo 
    -> we will change to use Next Image component

  1. components/main-header.js
    -> <Image src={logoImg} alt='A plate with food on it' priority />
      # auto generate lazy loading
      # auto add width + height
      # generate srcset -> image format and sizes depends on the viewport

  🌲 if we don't know the width & height of the image -> <fill>
      -> <Image src={image} alt={title} fill />


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  More Custom Components
  2. components/main-header-background.js -> child of <MainHeader />


*/
