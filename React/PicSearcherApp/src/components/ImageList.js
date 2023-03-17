import ImageShow from './ImageShow';

function ImageList({ images }) {
  
    return (
        <div>
            {images.map((image) => (
                <ImageShow image={image} />
            ))}
        </div>
    );
}

export default ImageList;
