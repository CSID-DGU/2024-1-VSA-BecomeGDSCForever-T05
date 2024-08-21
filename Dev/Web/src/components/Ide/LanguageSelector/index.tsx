import React from "react";
import * as Styled from "./style.ts"
import {LANGUAGE_VERSIONS} from "@/components/Ide/CODE_SNIPPETS.ts";

const languages = Object.entries(LANGUAGE_VERSIONS) as [string, string][];

// props 타입 정의
interface LanguageSelectorProps {
    language: string;
    onSelect: (language: string) => void;
}


const LanguageSelector: React.FC<LanguageSelectorProps> = ({
                                                               language,
                                                               onSelect,
                                                           }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Styled.Container>
            <Styled.Label>Language:</Styled.Label>
            <div style={{position: "relative"}}>
                <Styled.MenuButton onClick={toggleMenu}>{language}</Styled.MenuButton>
                {isOpen && (
                    <Styled.MenuList>
                        {languages.map(([lang, version]) => (
                            <Styled.MenuItem
                                key={lang}
                                active={lang === language}
                                onClick={() => {
                                    onSelect(lang);
                                    setIsOpen(false);
                                }}
                            >
                                {lang}
                                &nbsp;
                                <Styled.VersionText>({version})</Styled.VersionText>
                            </Styled.MenuItem>
                        ))}
                    </Styled.MenuList>
                )}
            </div>
        </Styled.Container>
    );
};

export default LanguageSelector;