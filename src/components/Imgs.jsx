import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

//import required actions
import { thumbnail } from "@cloudinary/url-gen/actions/resize";


//import required qualifiers
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";

// Import plugins
import {lazyload, placeholder} from '@cloudinary/react';

const Imgs = ({uploadedImage}) => {
  // Create and configure your Cloudinary instance.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dg9mim6xj', // Replace with your actual cloud name
  },
});

// Use the image with public ID, 'pond_reflect'.
const myImage = cld.image(uploadedImage); // Replace 'uploadedImg' with the actual public ID
  myImage.resize(
    thumbnail()
      .width(150)
      .height(150)
      .gravity(focusOn(face()))
  )
  return (
    <div>
      <AdvancedImage cldImg={myImage} plugins={[lazyload(), placeholder({mode: 'predominant-color'})]} />
    </div>
  );
};

export {Imgs};
