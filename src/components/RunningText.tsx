import { useEffect, useState } from "react";

const RunningText = () => {

    const words = ["Jatin Yadav", "FullStack Developer", "Software Engineer", "FrontEnd Developer", "Backend Developer", "MERN Developer"];
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState(words[0]);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return; // Skip the effect if a pause is active

        const interval = setInterval(() => {
            const currentWord = words[index % words.length]; // Get the current word

            // Handle deleting text
            if (isDeleting) {
                setDisplayText((prev) => prev.slice(0, prev.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length); // Cycle to next word
                }
            }
            // Handle typing text
            else {
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                } else {
                    // Pause for 1 second after fully typing the word
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsPaused(false);
                        setIsDeleting(true); // Start deleting after the pause
                    }, 500); // 1 second pause
                }
            }
        }, 150); // Interval speed for typing/deleting

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [displayText, isDeleting, index, isPaused]);

    return (
        <>
            <h1 className="text-3xl sm:text-7xl font-bold mb-6">
                {`I'm`} {displayText}
                <span className="animate-pulse">|</span> {/* Cursor effect */}
            </h1>
        </>
    )
}

export default RunningText