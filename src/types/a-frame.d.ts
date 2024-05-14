/**
 * Extension of the JSX module
 *
 * This is needed for JSX not complaining with Aframe tags
 */
/* eslint-disable  @typescript-eslint/no-explicit-any */
declare module JSX {
  interface IntrinsicElements {
    'a-box'?: any;
    'a-sky'?: any;
    'a-scene': any;
    'a-cone'?: any;
    'a-link'?: any;
    'a-ring'?: any;
    'a-text'?: any;
    'a-image'?: any;
    'a-light'?: any;
    'a-entity': any;
    'a-plane'?: any;
    'a-video'?: any;
    'a-torus'?: any;
    'a-sound'?: any;
    'a-marker'?: any;
    'a-camera'?: any;
    'a-circle'?: any;
    'a-sphere'?: any;
    'a-assets'?: any;
    'a-cursor'?: any;
    'a-triangle'?: any;
    'a-cylinder'?: any;
    'a-obj-model'?: any;
    'a-animation'?: any;
    'a-gltf-model'?: any;
    'a-octahedron'?: any;
    'a-torus-knot'?: any;
    'a-asset-item'?: any;
    'a-curvedimage'?: any;
    'a-icosahedron'?: any;
    'a-tetrahedron'?: any;
    'a-videosphere'?: any;
    'a-dodecahedron'?: any;
    'a-collada-model'?: any;
    'a-marker-camera'?: any;
  }
}
