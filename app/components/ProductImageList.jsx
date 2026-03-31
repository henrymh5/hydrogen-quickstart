import {Image} from '@shopify/hydrogen';

export function ProductImageList({images, onSelectImage}) {
  if (!images?.nodes?.length) return null;

  const imageCount = images.nodes.length;

  return (
    <div className="product-image-list">
      {imageCount <= 5 ? (
        images.nodes.slice(0, 5).map((image, index) => (
            <Image
              data={image}
              alt={image.altText || ''}
              aspectRatio="1/1"
              onClick={() => onSelectImage?.(image)}
              sizes="(min-width: 1024px) 15vw, 25vw"
              className="thumb-image"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
        ))
      ) : (
        <>
          {images.nodes.map((image, index) => (
              <Image
                data={image}
                alt={image.altText || ''}
                aspectRatio="1/1"
                onClick={() => onSelectImage?.(image)}
                sizes="(min-width: 1024px) 15vw, 25vw"
                className="thumb-image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
          ))}
          <div className="ImageSeeMore">
            <div className="imageOverlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                ></path>
              </svg>
              Mehr anzeigen
            </div>
             <Image
                data={images.nodes[4]}
                alt={images.nodes[4].altText || ''}
                onClick={() => onSelectImage?.(image)}
                aspectRatio="1/1"
                sizes="(min-width: 1024px) 15vw, 25vw"
                className="thumb-image"
              />
          </div>
        </>
      )}
    </div>
  );
}