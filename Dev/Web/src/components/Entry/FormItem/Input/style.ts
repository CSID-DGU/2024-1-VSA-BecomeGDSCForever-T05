import styled from 'styled-components';

interface InputProps {
    width?: string;
    borderRadius?: string;
}

interface InputFieldContainerProps {
    width?: string;
}

export const InputFieldContainer = styled.div<InputFieldContainerProps>`
    display: flex;
    flex-direction: column;
    height: 60px;
    width: ${({ width }) => width || '100%'};
`;

export const LabelContainer = styled.label`
    font-size: 1rem;
    width: 600px;
    height: 20px;
    color: ${({ theme }) => theme.colorSystem.neutral['500']};
`;

export const InputContainer = styled.input<InputProps>`
    width: ${({ width }) => width || '100%'};
    display: flex;
    height: 60px;
    padding: 20px;
    font-size: 14px;
    gap: 10px;
    box-sizing: border-box;
    border: 1.5px solid ${({ theme }) => theme.colorSystem.neutral['300']};
    border-radius: ${({ borderRadius }) => borderRadius || '12px'};
`;

export const PasswordContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const ToggleButton = styled.button`
    background: none;
    border: none;
    position: absolute;
    right: 20px;
    cursor: pointer;
    outline: none;
    padding: 0;

    img {
        width: 24px;
        height: 24px;
    }
`;
