import * as Styled from './style';
import QuestionHeader from "@/components/Question/QuestionHeader";
import SizedBox from "@/components/Common/SizedBox";
import QuestionItem from "@/components/Question/QuestionItem";

export default function Question() {

    const handleClick = () => {
        console.log('응기잇');
    }

    return (
        <Styled.Container>
            <QuestionHeader/>
            <SizedBox height={"20px"}/>
            <QuestionItem isFirst={true} onClick={handleClick}/>
            <QuestionItem onClick={handleClick}/>
            <QuestionItem onClick={handleClick}/>
            <QuestionItem onClick={handleClick}/>
            <QuestionItem onClick={handleClick}/>
            <QuestionItem onClick={handleClick}/>
            <QuestionItem onClick={handleClick}/>
            <QuestionItem onClick={handleClick}/>
            <QuestionItem onClick={handleClick}/>
            <QuestionItem isLast={true} onClick={handleClick}/>
        </Styled.Container>
    )
}