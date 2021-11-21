/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from '@headlessui/react';
import * as tf from '@tensorflow/tfjs';
import * as React from 'react';
import { CgScan } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import Webcam from 'react-webcam';

import DetectAlert from '@/components/alert/DetectAlert';

const videoConstraints = {
  width: 800,
  height: 600,
  facingMode: 'user',
};

type WebProps = {
  closeModal: () => void;
};

export default function WebCamera({ closeModal }: WebProps) {
  const webcamRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const [image, setImage] = React.useState('');
  const [model, setModel] = React.useState<tf.LayersModel>();
  const [alert, setAlert] = React.useState(false);
  const [item, setItem] = React.useState<number>();

  async function loadModel() {
    const URL =
      'https://tensorflowjskeranjangpintarmodel.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json';
    const detection_model = await tf.loadLayersModel(URL);
    detection_model.summary();
    setModel(detection_model);
    console.log('Load Model Success');
  }
  const capture = React.useCallback(() => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    }
  }, [setImage]);

  const findMax = (array: {
    reduce: (
      arg0: (
        iMax: string | number,
        x: number,
        i: any,
        arr: { [x: string]: number }
      ) => any,
      arg1: number
    ) => any;
  }) => {
    const indexOfMaxValue = array.reduce(
      (
        iMax: string | number,
        x: number,
        i: any,
        arr: { [x: string]: number }
      ) => (x > arr[iMax] ? i : iMax),
      0
    );
    return indexOfMaxValue;
  };

  const onDetectImage = async () => {
    if (imageRef && model) {
      const selectedImage: HTMLImageElement = imageRef.current;
      const tensor = tf.browser
        .fromPixels(selectedImage)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();
      try {
        const predictions = await model.predict(tensor).data();
        setItem(findMax(predictions));
        setAlert(true);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('failed to fetch data to model');
      }
    }
  };

  const retakeImage = () => {
    setImage('');
    setAlert(false);
  };

  React.useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

  return (
    <div className='relative'>
      {alert === true ? (
        <div className='absolute inset-0 w-full '>
          <DetectAlert
            value={item}
            image={image}
            setAlert={setAlert}
            retakeImage={retakeImage}
          />
        </div>
      ) : (
        <div className='absolute top-0 left-0 z-10 p-6'>
          <div className='px-3 py-2 text-white bg-gray-800 rounded-full'>
            <p className='text-xs'>Scan your unused items🙌</p>
          </div>
        </div>
      )}

      <div className='absolute top-0 right-0 z-10 p-6 mt-2'>
        <button
          type='button'
          className='inline-flex justify-center p-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-full hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
          onClick={closeModal}
        >
          <IoMdClose />
        </button>
      </div>
      <div>
        {image === '' ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            width={'100%'}
            videoConstraints={videoConstraints}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img id='selected-image' ref={imageRef} src={image} alt='trash' />
        )}
      </div>
      {alert ? (
        <div className='absolute top-0 p-6 m-4'>
          <button
            className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
            type='button'
            onClick={retakeImage}
          >
            Retake Image
          </button>
        </div>
      ) : (
        <div className='absolute bottom-0 flex justify-center w-full p-6 mt-2'>
          <button
            className='inline-flex justify-center p-2 text-sm font-medium text-white rotate-90 bg-gray-800 border border-transparent rounded-full hover:bg-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
            onClick={(e) => {
              e.preventDefault();
              capture();
              setTimeout(() => onDetectImage(), 100);
            }}
          >
            <CgScan size={30} />
          </button>
        </div>
      )}
    </div>
  );
}
