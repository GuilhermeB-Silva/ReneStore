import {ChevronLeftIcon,ChevronRightIcon} from '@heroicons/react/outline';


export function BtnSlider({ direction, moveSlide }) {
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        {direction === "next" ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
      </button>
    );
  }