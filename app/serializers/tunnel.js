import DRFSerializer from './drf';

export default DRFSerializer.extend({
  attrs: {
    sourceip: { serialize: false },
  }
});
