import './Gallery.css';
import ImageGallery from 'react-image-gallery';


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

export default function Gallery() {
    return (
        <>
            <h3 className='gallery-heading'>Application Screenshots</h3>
            <ImageGallery
                items={images}
                infinite={false}
                thumbnailPosition={'bottom'}
                slideDuration={500}
                slideInterval={2000}
            />
        </>
    );
}