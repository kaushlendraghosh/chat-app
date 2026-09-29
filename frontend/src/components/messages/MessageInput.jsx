import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!message.trim()) return;

		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className="px-4 my-3" onSubmit={handleSubmit}>
			<div className="relative">
				<input
					type="text"
					placeholder="Send a message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="w-full border rounded-lg p-3 pr-12 bg-gray-700 text-white"
				/>

				<button
	type="submit"
	style={{
		position: "absolute",
		right: "16px",
		top: "50%",
		transform: "translateY(-50%)",
	}}
>
	<BsSend />
</button>
			</div>
		</form>
	);
};

export default MessageInput;