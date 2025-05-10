import React from 'react'
import {
    Terminal,
    TypingAnimation,
} from "@/components/magicui/terminal";

const TerminalComponent = () => {
    return (
        <Terminal className="bg-[#000]/80">
            <div className="mb-2 text-sm text-green-400">ayushdixit@localhost:~$</div>

            <TypingAnimation className="text-white/90" duration={100} delay={500}>
                {`> mkdir my-next-app`}
            </TypingAnimation>

            <TypingAnimation className="text-white/90" duration={100} delay={2900}>
                {`> cd my-next-app`}
            </TypingAnimation>

            <TypingAnimation className="text-white/90" duration={100} delay={4700}>
                {`> yarn create next-app@latest`}
            </TypingAnimation>

            <TypingAnimation className="text-green-400 my-3" duration={100} delay={7800}>
                {`Success! Project initialization completed. 
Start building!`}
            </TypingAnimation>

            <TypingAnimation className="text-white/90" duration={100} delay={14000}>
                {`> yarn install`}
            </TypingAnimation>

            <TypingAnimation className="text-white/90" duration={100} delay={15500}>
                {`> yarn dev`}
            </TypingAnimation>
        </Terminal>
    )
}

export default TerminalComponent