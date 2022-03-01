import react, { useState, useEffect, useContext } from "react";

import { Context } from "../Context";

import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageForSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("./");
  });

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="
35c61da3-3246-470b-a3a4-825a0a34e8a3"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageForSocial />}
        />
      </div>
    </div>
  );
}
