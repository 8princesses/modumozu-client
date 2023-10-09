import { FC, useEffect, ReactNode, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
}

const Portal: FC<ModalProps> = ({ children = null }) => {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    if (document) {
      setContainer(document.body);
    }
  }, []);

  if (!container || !children) return null;

  return createPortal(children, container);
};

export default Portal;
