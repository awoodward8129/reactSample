import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: "https://lh3.googleusercontent.com/k-h-DvXI0BC5BT3D_zXdHrRS7TwPQr0Qk45MtdRN2oVLdtETBm_W_FW6KcKhEUqOpzXRS-Fpl91iKoFpbRVZSvx7HA-QqWnzrv65Ol_3rX-rNIAZ0RV-BZB7UDpn-6S_O4oamQ",
        thumbnail: "https://lh3.googleusercontent.com/k-h-DvXI0BC5BT3D_zXdHrRS7TwPQr0Qk45MtdRN2oVLdtETBm_W_FW6KcKhEUqOpzXRS-Fpl91iKoFpbRVZSvx7HA-QqWnzrv65Ol_3rX-rNIAZ0RV-BZB7UDpn-6S_O4oamQ",
        thumbnailWidth: 300,
        thumbnailHeight: 320,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]
 
export const GalleryPage  = () =>  {
    return( 
        <Gallery images={IMAGES}/>
)
}
export default GalleryPage;