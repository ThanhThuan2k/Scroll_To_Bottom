import {useState, useRef, useEffect} from 'react';

export default function ScrollToBottom(){
	const bottomRef = useRef();

	useEffect(() => {
        console.log("mount");
		scrollToBottom();
	}, []);

	useEffect(() => {
		scrollToBottom();
	})

	const scrollToBottom = () => {
		bottomRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
	}

	return (
		<>
			<div className="App">
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
			</div>
			<div className="bottom" ref={bottomRef}>
                <h1>Scroll here</h1>
            </div>
		</>
	);
}