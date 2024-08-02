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

