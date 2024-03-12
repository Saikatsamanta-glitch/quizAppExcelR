import Sliders from "../Components/Sliders";
import { SwiperSlide } from "swiper/react";
import quiz_datas from "../util";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Sliders>
        {quiz_datas.map((slide) => {
          if (slide.slider) {
            return (
              <SwiperSlide key={slide.id}>
                <div className="h-96 ">
                  <img
                    src={slide.img}
                    className="h-full absolute w-full blur-md "
                  />
                  <img
                    src={slide.img}
                    className="h-full z-50 absolute left-0 right-0 mx-auto"
                  />
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Sliders>
      <div className="flex flex-wrap p-8 justify-center gap-4">
      {
        quiz_datas.map((quiz)=>{
            return <Link to={`/quiz/${quiz.id}`}> <div className="h-20 w-80 rounded shadow-lg flex items-center px-8">
                <h1 className="text-xl "> {quiz.name} </h1>
            </div></Link>
        })
      }
      </div>
    </>
  );
}
