import {
  GALLERY,
  //
} from '../consts/generalConsts';
import {
  THREED, TWOD, SCETCH, PROCESS,
} from '../consts/galleriesNames';

const GalleriesDescription = {
  [GALLERY]: {
    caption: 'modules.gallery',
    galleries: [
      {
        name: TWOD,
        caption: 'legal.twod',
      },
      {
        name: THREED,
        caption: 'legal.threed',
      },
      {
        name: SCETCH,
        caption: 'legal.scetch',
      },
      {
        name: PROCESS,
        caption: 'legal.process',
      },
    ],
  },
};

export default GalleriesDescription;
