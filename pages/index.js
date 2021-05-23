import Slider from '../components/HomeComponent/Slider/Slider';
import ShowBlogContainer from '../components/HomeComponent/ShowBlog/showBlog.container';
import ShopCategoriesContainer from '../components/HomeComponent/ShopCategory/ShopCategory.container';
import ProductsContainer from '../components/HomeComponent/Products/Products.container';

export default function Home() {
  return (
    <>
      <Slider />
      <ShopCategoriesContainer />
      <ProductsContainer />
      <ShowBlogContainer />
    </>
  )
}
