import react, { useState, useEffect, useContext } from "react";

import { Context } from "../Context";

import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageForSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageForSocial)
);

export default function chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  if (!showChat) return <div />;

  const router = useRouter();

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="
35c61da3-3246-470b-a3a4-825a0a34e8a3"
          userName={username}
          userSecret={secret}
        />
      </div>
    </div>
  );
}
