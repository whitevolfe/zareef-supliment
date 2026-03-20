import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Sparkles,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useState, useEffect } from 'react';

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured);
  const sports = products.filter((p) => p.category === 'sports').slice(0, 4);
  const gym = products.filter((p) => p.category === 'gym').slice(0, 4);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [
    '/assets/suppliment banner img.jpg',
    '/assets/suppliment banner img2.jpg',
    '/assets/suppliment bannerimg 3.jpg',
  ];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-0 px-0'>
        <div className='relative w-full'>
          {/* Carousel */}
          <div className='relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl'>
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hero ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* Overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === 0 ? carouselImages.length - 1 : prev - 1,
                )
              }
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors'
              aria-label='Previous image'
            >
              <ArrowLeft className='w-6 h-6' />
            </button>
            <button
              onClick={() =>
                setCurrentImageIndex((prev) =>
                  prev === carouselImages.length - 1 ? 0 : prev + 1,
                )
              }
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors'
              aria-label='Next image'
            >
              <ArrowRightIcon className='w-6 h-6' />
            </button>

            {/* Hero Text */}
            <div className='absolute bottom-8 left-8 text-white max-w-2xl'>
              <h1 className='text-4xl md:text-6xl font-bold mb-4'></h1>
              <p className='text-lg md:text-xl text-white/90 mb-8'></p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  asChild
                  size='lg'
                  className='gap-2 bg-white text-black hover:bg-white/90'
                >
                  <Link to='/products'>
                    Shop Now <ArrowRight className='w-4 h-4' />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className='flex justify-center gap-2 mt-4'>
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className='py-16 px-4'>
        <div className='container mx-auto'>
          <div className='flex items-center gap-3 mb-8'>
            <Zap className='w-8 h-8 text-primary' />
            <div>
              <h2 className='text-3xl font-bold text-foreground'>Sports</h2>
              <p className='text-muted-foreground'>
                Latest tech gadgets and accessories
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {sports.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='text-center mt-8'>
            <Button asChild variant='outline'>
              <Link to='/products?category=sports'>
                View All Sports <ArrowRight className='w-4 h-4 ml-2' />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gym Section */}
      <section className='py-16 px-4 bg-muted/30'>
        <div className='container mx-auto'>
          <div className='flex items-center gap-3 mb-8'>
            <Sparkles className='w-8 h-8 text-secondary' />
            <div>
              <h2 className='text-3xl font-bold text-foreground'>Gym</h2>
              <p className='text-muted-foreground'>
                Premium beauty and skincare products
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {gym.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='text-center mt-8'>
            <Button asChild variant='outline'>
              <Link to='/products?category=gym'>
                View All Gym <ArrowRight className='w-4 h-4 ml-2' />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4'>
        <div className='container mx-auto'>
          <div className='bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Shop?
            </h2>
            <p className='text-lg mb-6 opacity-90'>
              Browse our full collection and find your perfect products
            </p>
            <Button asChild size='lg' variant='secondary'>
              <Link to='/products'>
                Explore All Products <ArrowRight className='w-4 h-4 ml-2' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
