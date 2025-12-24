import { useEffect, useState } from "react";

const Typewriter = ({
  text = "TECH-IT",
  typingSpeed = 120,
  deletingSpeed = 80,
  delay = 1200,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);
    } 
    else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    } 
    else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } 
    else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="font-extrabold text-gold">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
