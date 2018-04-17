import { decl } from 'bem-react-core';
import 'm:type=large | m:type=medium | m:type=noImage | m:type=noDescription';

export default decl({
  block: 'Main',
  elem: 'Article',
  mods({ type }) {
    return { type };
  }
});