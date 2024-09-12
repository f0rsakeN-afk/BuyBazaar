const FloatingFruits = () => {
    const produceEmojis = [
        '🍎', '🍊', '🍇', '🥕', '🥦', '🍓', '🍌', '🍍', '🥑', '🍆',
        '🍅', '🌽', '🥒', '🍉', '🥭', '🍐', '🍋', '🍈', '🍏', '🫐',
        '🥝', '🥔', '🧅', '🫑', '🥬'
    ];

    const animations = [
        'floatUp',
        'floatDown',
        'floatLeftRight',
        'pulse',
        'wiggle',
        'fadeInOut'
    ];

    return (
        <div className="floating-fruits">
            {produceEmojis.map((produce, i) => {
                const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
                return (
                    <div
                        key={i}
                        className="fruit"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationName: randomAnimation,
                            animationDuration: `${5 + Math.random() * 10}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationIterationCount: 'infinite',
                            animationTimingFunction: 'ease-in-out',
                            fontSize: `${16 + Math.random() * 24}px`,
                            zIndex: Math.floor(Math.random() * 10) - 5
                        }}
                    >
                        {produce}
                    </div>
                );
            })}
        </div>
    );
}

export default FloatingFruits;