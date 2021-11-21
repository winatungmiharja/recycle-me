/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import SectionText from '@/components/Text/SectionText';

import useCraft from '@/store/CraftStore';
const products = [
  {
    id: 3,
    name: 'Lorem Ipsum',
    href: '#',
    coin: '89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Lorem Ipsum',
    href: '#',
    coin: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    coin: '48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    coin: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },

  // More products...
];

export default function CraftPage() {
  const store = useCraft();
  const fetchInformation = async () => {
    const fetchCraft = await fetch(
      'https://recyle-web.herokuapp.com/information/showInformation.php'
    );
    const res = await fetchCraft.json();
    if (res.isSuccess) {
      store.setCrafts(res.data);
    } else {
      console.error(res.error);
    }
  };
  React.useEffect(() => {
    fetchInformation();
  });

  const products = store.crafts;

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <section>
          <div className='flex flex-row-reverse flex-wrap'>
            <div className='top-0 self-start w-full lg:sticky lg:mt-0 lg:w-4/12 lg:pl-4'>
              {/* <img src='/images/craft.svg' alt='' className='rounded-3xl' /> */}
              <div className='relative h-40 bg-bottom bg-no-repeat bg-cover lg:h-96 bg-craft rounded-3xl'>
                <div className='absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full p-6 text-white lg:text-black'>
                  <h3>Build Projects</h3>

                  <p className=''>and discover your interest!</p>
                </div>
                <div className='w-full h-full bg-gradient-to-b from-gray-700/60 lg:from-transparent to-transparent rounded-3xl'></div>
              </div>
            </div>
            <div className='w-full p-6 text-white bg-gray-800 lg:w-8/12 rounded-3xl'>
              <SectionText
                title={'Projects🧾'}
                subTitle={`${products.length} project available for you!`}
              />
              <div className=''>
                <h2 className='sr-only'>Products</h2>
                <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 xl:gap-x-8'>
                  {products.map((product) => (
                    <div key={product.id} className='group'>
                      <Link href={`craft/${product.id}`}>
                        <div>
                          <div className='overflow-hidden bg-gray-200 rounded-3xl aspect-w-1 aspect-h-1 group-hover:opacity-75'>
                            <img
                              src={product.img}
                              alt={product.title}
                              className='object-cover object-center w-full h-full'
                            />
                          </div>
                          <h4 className='mt-4 text-white'>{product.title}</h4>
                          <p className='flex items-center gap-2 mt-1 font-medium text-white'>
                            Reward : {product.coin}
                            <img
                              src='/images/coin.svg'
                              alt='coin'
                              className='w-6'
                            />
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
