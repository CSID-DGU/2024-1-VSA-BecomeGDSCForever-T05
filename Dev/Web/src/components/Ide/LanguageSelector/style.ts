import styled from "styled-components";

export const Container = styled.div`
    margin-left: 8px;
    margin-bottom: 16px;
`;

export const Label = styled.p`
    margin-bottom: 8px;
    font-size: 1.125rem;
`;

export const MenuButton = styled.button`
    background-color: #3182ce;
    color: white;
    padding: 8px 16px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
`;

export const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #110c1b;
    border: 1px solid #ccc;
    border-radius: 4px;
    position: absolute;
    z-index: 1;
    width: 200px;
`;

export const MenuItem = styled.li<{ active: boolean }>`
    padding: 8px 16px;
    cursor: pointer;
    background-color: ${(props) => (props.active ? "#2d3748" : "transparent")};
    color: ${(props) => (props.active ? "#3182ce" : "inherit")};

    &:hover {
        background-color: #2d3748;
        color: #3182ce;
    }
`;

export const VersionText = styled.span`
    font-size: 0.875rem;
    color: #718096;
`;