// window.CMS_MANUAL_INIT = true;
import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.registerMediaLibrary(cloudinary);

// CMS.init({
//   config: {
//     media_library: {
//       name: 'cloudinary',
//       config: {
//         cloud_name: 'du9yhowdr',
//         api_key: 937339823723728
//       },
//     },
//   },
// });