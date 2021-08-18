import React, { useRef, useState, useEffect } from "react";

const randomText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Assumenda culpa quis tempore, ducimus dolores possimus
quibusdam eum tempora perferendis fugit ab rem minus odit
autem quaerat debitis laudantium unde? Quasi, cumque totam.
Amet ipsam esse natus excepturi corporis explicabo eius
eveniet magnam, necessitatibus commodi placeat vero ad
cupiditate quis repellat?`;

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

const StickyPage = () => {
  const [visible, setVisible] = useState(0);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const isVisible1 = useOnScreen(ref1);
  const isVisible2 = useOnScreen(ref2);
  const isVisible3 = useOnScreen(ref3);

  useEffect(() => {
    if (isVisible1) setVisible(1);
    if (isVisible2) setVisible(2);
    if (isVisible3) setVisible(3);
  }, [isVisible1, isVisible2, isVisible3]);

  return (
    <div className="my-8 text-center">
      <div className="mb-4">Sticky Page</div>
      <div>
        <section className="text-gray-700 mb-40 m-auto">
          <div className="text-xl my-10">Hello from my sticky page</div>
          <div className="relative flex justify-center">
            <div className="flex-1 max-w-screen-sm text-2xl">
              <div ref={ref1} className="flex flex-col justify-center my-80">
                <div>{randomText}</div>
              </div>
              <div ref={ref2} className="flex flex-col justify-center my-80">
                <div>{randomText}</div>
              </div>
              <div ref={ref3} className="flex flex-col justify-center my-80">
                <div>{randomText}</div>
              </div>
            </div>
            <div className="px-20 sticky min-h-screen top-0 self-start flex flex-col justify-center">
              <div className=" text-4xl">hello {visible}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StickyPage;
