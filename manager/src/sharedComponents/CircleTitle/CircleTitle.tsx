import * as S from "./CircleTitle.styles";



interface CircleTitleProps {
  circleContent: string ;
}

const tW = (text: string) => {  

    const textLength = text.split(' ');
    // console.log(textLength);
    if (textLength.length === 1 ){
        return textLength[0][0];
    }
    if (textLength.length > 1 ){
        // const lastWord = ;
        return (textLength[0][0] + textLength[textLength.length - 1][0]);
    }
    return (text.split(' ').map(word => word[0]));
}

const Circle = ({ circleContent}: CircleTitleProps) => {
  return (
    <S.CircleTitle>{tW(circleContent)}</S.CircleTitle>
  );
};

export default Circle;
