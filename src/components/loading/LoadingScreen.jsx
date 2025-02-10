import { useState, useEffect } from 'react';
import './loadingScreen.scss';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Progress animation
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 1.5;
            });
        }, 35);

        // Loading complete timer
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Delay the onLoadingComplete call to allow fade-out
            setTimeout(() => {
                setIsVisible(false);
                onLoadingComplete?.();
            }, 600); // Match this with your CSS transition duration
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [onLoadingComplete]);

    if (!isVisible) return null;

    return (
        <div className={`loading-screen ${isLoading ? '' : 'fade-out'}`}>
            <div className="loading-content">
                <svg viewBox="0 0 500 160">
                    <text 
                        x="50%" 
                        y="50%" 
                        textAnchor="middle" 
                        dy=".32em" 
                        className="text-body"
                    >
                        Jeanh
                    </text>
                </svg>
                <div className="progress-container">
                    <div 
                        className="progress-bar" 
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
