import React, { useEffect, useRef } from 'react';

const Space = () => {
    const canvasRef = useRef(null); // 캔버스 참조 생성
    const numStars = 1900;
    let focalLength;
    let centerX, centerY;
    let stars = [];
    let animate = true;

    useEffect(() => {
        const canvas = canvasRef.current;

        // 캔버스 크기 설정
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // 애니메이션 실행 함수(프레임)
        const executeFrame = () => {
            if (!animate || !canvas) return;

            requestAnimationFrame(executeFrame); // 다음 프레임 예약
            moveStars();
            drawStars();
        };

        // 윈도우 크기 조정 시 캔버스 크기 조정
        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initializeStars();
            }
        };

        window.addEventListener('resize', handleResize);

        initializeStars();
        executeFrame();

        return () => {
            // 컴포넌트가 언마운트될 때 애니메이션 중지
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 초기 별 설정
    const initializeStars = () => {
        const canvas = canvasRef.current;
        centerX = canvas.width / 2; // 화면 중심으로 모이게
        centerY = canvas.height / 2; // 화면 중심으로 모이게
        stars = [];

        // 랜덤 위치 별 생성
        for (let i = 0; i < numStars; i++) {
            let star = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * canvas.width,
                o: '0.' + Math.floor(Math.random() * 99) // rgba 뒤 투명도
            };
            stars.push(star); // 별 배열에 추가
        }
        focalLength = canvas.width * 1; // 3D 공간 깊이

    };

    const moveStars = () => {
        const canvas = canvasRef.current;

        if (!canvas) return;
        for (let i = 0; i < numStars; i++) {
            let star = stars[i];
            star.z--; // 별이 앞으로 이동

            if (star.z <= 0) { // 별이 화면을 통과하면
                star.z = canvas.width; // 다시 뒤에가서 출발
            }
        }
    };

    const drawStars = () => {
        const canvas = canvasRef.current;

        if (!canvas) return;
        const c = canvas.getContext("2d");

        // 배경 그라디언트 약간 주기
        const gradient = c.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "rgba(0, 0, 34, 1)");
        gradient.addColorStop(1, "rgba(0, 10, 20, 1)");
        c.fillStyle = gradient;
        c.fillRect(0, 0, canvas.width, canvas.height);

        // 각 별을 그리기
        for (let i = 0; i < numStars; i++) {
            let star = stars[i];

            // 별의 화면 좌표 계산 (z 값을 이용해 크기와 위치 조절)
            let pixelX = (star.x - centerX) * (focalLength / star.z) + centerX;
            let pixelY = (star.y - centerY) * (focalLength / star.z) + centerY;
            let pixelRadius = 1 * (focalLength / star.z); // 별의 반경 계산

            // 별 그리기
            c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
            c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        }

    };

    return (
        <div
            className='space__container'
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        >
            <canvas id="space" ref={canvasRef}></canvas>
            <div className='falling--star star1'></div>
            <div className='falling--star star2'></div>
            <div className='falling--star star3'></div>
            <div className='falling--star star4'></div>
            <div className='falling--star star5'></div>
        </div>
    );
};

export default Space;
