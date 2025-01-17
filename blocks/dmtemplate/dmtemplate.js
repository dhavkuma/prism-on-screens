import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
  const column = block.firstElementChild;
  const templateDiv = column.firstElementChild;
  column.setAttribute('style', 'display:none');
  const templateName = templateDiv.innerText;
  const imageName = `/is/image/${templateName}`;
  const img = createOptimizedPicture(imageName);
  block.appendChild(img);
}
