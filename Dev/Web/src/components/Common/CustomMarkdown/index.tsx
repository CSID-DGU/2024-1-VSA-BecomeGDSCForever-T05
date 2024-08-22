import ReactMarkdown from "react-markdown";
import * as Styled from "./style";
import {githubGist} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {useState} from "react";
import {decodeMarkdown} from "@/utils/serializeUtil.ts";

interface props {
    shortCode: string;
    longCode?: string;
}

// ts-config.json
export default function CustomMarkdown(props: props) {

    const [isShortCode, setIsShortCode] = useState<boolean>(true);

    const handleClick = () => {
        if (props.longCode) {
            setIsShortCode(!isShortCode);
        }
    }

    return (
        <Styled.MarkdownContainer onClick={handleClick} longCode={props.longCode != null}>
            <ReactMarkdown
                components={{
                    code({node, inline, className, children, ...props}: any) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <Styled.CustomSyntaxHighlighter
                                {...props}
                                style={githubGist}
                                language={match[1]}
                                PreTag="div"
                            >
                                {String(children).replace(/\n$/, '')}
                            </Styled.CustomSyntaxHighlighter>
                        ) : (
                            <Styled.CodeContainer
                            >
                                <code {...props} className={className}>
                                    {children}
                                </code>
                            </Styled.CodeContainer>
                        )
                    },
                }}
            >
                {isShortCode ? decodeMarkdown(props.shortCode) : decodeMarkdown(props.longCode || "")}
            </ReactMarkdown>
        </Styled.MarkdownContainer>
    );
}
