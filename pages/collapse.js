import React, { useRef, useEffect, useState } from "react";

// credits hashicorp react components

const Collapsible = ({ isCollapsed, children }) => {
  const parentElem = useRef(null);

  useEffect(() => {
    cleanupTransition(parentElem.current);
  }, [parentElem]);

  useEffect(() => {
    adjustHeight(isCollapsed, parentElem);
  }, [isCollapsed]);

  return (
    <div className="collapsible overflow-hidden h-0" ref={parentElem}>
      <div className="inner">{children}</div>
      <style jsx>{`
        .collapsible {
          transition: height 0.3s;
        }
        .inner {
          opacity: 1;
          transition: opacity 0.3s;
        }
      `}</style>
    </div>
  );
};

function adjustHeight(isCollapsed, parentElemRef) {
  const elem = parentElemRef.current;
  if (!elem || !(elem instanceof Element)) return;
  const innerElem = elem.firstChild;
  const computedStyle = getComputedStyle(elem);
  if (isCollapsed) {
    innerElem.style.opacity = 0;
    elem.style.height = computedStyle.height;
    elem.offsetHeight;
    elem.style.height = "0px";
  } else {
    innerElem.style.opacity = 1;
    innerElem.style.display = "block";
    const currentHeight = computedStyle.height;
    elem.style.height = "auto";
    const endHeight = computedStyle.height;
    if (endHeight !== currentHeight) {
      elem.style.height = currentHeight;
      elem.offsetHeight; // force repaint
      elem.style.height = endHeight; // trigger the current px >> end px transition
    }
  }
  elem.addEventListener("transitionend", handleTransitionEnd, false);
}

function handleTransitionEnd(event) {
  if (event.propertyName !== "height") return;
  const elem = event.target;
  cleanupTransition(elem);
  elem.removeEventListener("transitionend", handleTransitionEnd, false);
}

const cleanupTransition = (elem) => {
  if (!elem || !(elem instanceof Element)) return;

  const computedStyle = getComputedStyle(elem);
  const innerElem = elem.firstChild;
  const innerElemStyle = getComputedStyle(innerElem);
  const isCollapsed = computedStyle.height === "0px";

  if (isCollapsed) {
    innerElem.style.display = "none";
    const heightDrtn = parseFloat(computedStyle["trasition-duration"]);
    const opacityDrtn = parseFloat(innerElemStyle["transition-duration"]);

    if (heightDrtn && opacityDrtn) {
      innerElem.style.transitionDelay = `${heightDrtn - opacityDrtn}s`;
    }
  } else {
    elem.style.height = "auto";
    innerElem.style.transitionDelay = "0s";
  }
};

const CollapsePage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="my-8 text-center m-1">
      <div className="mb-4">Collapse</div>

      <div className=" max-w-xl m-auto border rounded-md">
        <div onClick={() => setVisible(!visible)} className="cursor-pointer">
          this is a test
        </div>
        <Collapsible isCollapsed={visible}>
          <div className="m-2">
            this is a test for collapsible <br />
            I just want to test it <br />
            whats your problem
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default CollapsePage;
