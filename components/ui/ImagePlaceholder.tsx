interface ImagePlaceholderProps {
    width?: number;
    height?: number;
    label?: string;
  }
  
  const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
    width = 400, 
    height = 224,
    label = 'Property Image'
  }) => {
    return (
      <div 
        className="relative bg-gradient-to-br from-neutral-800 to-neutral-900"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white/50">
          <span>{label}</span>
        </div>
      </div>
    );
  };
  
  export default ImagePlaceholder;