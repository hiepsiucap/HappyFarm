/** @format */

import { useEffect, useState } from "react";

const useIntersectionObserver = (threshold: number = 0) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ngừng quan sát khi đã hiển thị
        }
      },
      {
        threshold,
      }
    );

    const element = document.querySelector("#line-chart"); // Phần tử cần quan sát
    if (element) {
      observer.observe(element); // Bắt đầu quan sát
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Ngừng quan sát khi component bị hủy
      }
    };
  }, [threshold]);

  return isVisible; // Trả về trạng thái hiển thị
};

export default useIntersectionObserver;
