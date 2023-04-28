// Define type interface for image props
interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  }
  
  // Create image component
  export const Image = ({ src, alt, width = 200, height = 200, className = '' }: ImageProps) => {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  };
  

 