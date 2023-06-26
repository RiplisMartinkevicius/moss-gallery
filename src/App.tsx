import MainLayout from "./layout/Homepage";
import ImageGallery from "./layout/ImageGallery";
import ImageCard from "./layout/ImageCard";

const App: React.FC = () => {
  return (
    <MainLayout>
      <ImageGallery>
        <ImageCard title="img 1" description="It's moss I guess" />
      </ImageGallery>
    </MainLayout>
  );
};

export default App;
