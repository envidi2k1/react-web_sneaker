import ImageSlider, { Slide } from "react-auto-image-slider";
const SlideShow = () => {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={5000}>
      <Slide>
        <img
          className="slide-img"
          alt="img2"
          src="https://a.ipricegroup.com/trends-article/danh-cho-fan-giay-the-thao-10-dieu-it-ai-biet-ve-giay-adidas-va-lich-su-di-den-su-thanh-cong.jpg"
          />
      </Slide>
      <Slide>
        <img
          className="slide-img"
          alt="img2"
          src="https://capvirgo.com/wp-content/uploads/2019/03/adidas_nite_jogger_feb-wht4.jpg"
        />

      </Slide>
      <Slide>
        <img
          className="slide-img"
          alt="img1"
          src="https://tinhte.vn/store/2017/04/4027924_C_Adidas_moi_truong-8.jpg"
        />

      </Slide>
      <Slide>
        <img
          className="slide-img"
          alt="img1"
          src="https://file.hstatic.net/200000384421/article/thiet_ke_chua_co_ten_f26c31f8014f46f3b0a8336676424752_1024x1024.png"
        />

      </Slide>
    </ImageSlider>
  );
};

export default SlideShow;
