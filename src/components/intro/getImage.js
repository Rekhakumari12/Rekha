import img1 from '../../images/img1.jpeg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'

let imageArr = [img1, img2, img3, img4, img5];
  // eslint-disable-next-line no-use-before-define
const index = (Math.floor(Math.random()*imageArr.length));
const Img = imageArr[index]
export default Img;