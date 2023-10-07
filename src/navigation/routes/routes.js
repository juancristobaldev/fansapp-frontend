import * as icons from '@fortawesome/free-solid-svg-icons';

export const routesApp = [
  {name: 'feed', icon: icons.faHome},
  {name: 'local', icon: icons.faCompass},
  {name: 'profile', icon: icons.faUser},
  {name: 'settings', icon: icons.faGear},
];

export const routesUpload = [
  {
    name: 'image&video',
    subName:'create-post',
    stack: 'stack-upload',
    icon: icons.faPhotoVideo,
  },
  {
    name: 'audio',
    stack: 'stack-upload',

    icon: icons.faMicrophone,
  },
  {
    name: 'file',
    stack: 'stack-upload',

    icon: icons.faFile,
  },
];
